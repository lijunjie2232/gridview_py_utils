from configparser import ConfigParser
from requests_toolbelt import MultipartEncoder, MultipartEncoderMonitor
from copy import deepcopy
import threading
from rich.progress import Progress
from concurrent.futures import ThreadPoolExecutor
import sys
import traceback
import json
import os
import time
# from GridviewFileManager import GridviewFileManager
import uuid

 
class GridviewUploader(threading.Thread):
    _CHUNK_SIZE = 10*1024*1024
    _uploaderPool = None
    _uploaderNum = 3
    _progress = None
    _main_task = None
    _cond=threading.Condition(lock=threading.Lock())
    
    def __init__(
        self,
        filemanager,
        globalConfig: ConfigParser=None,
        GridviewConfig: dict=None,
        chunkSize: int = None,
        threadNum:int = None,
    ):
        if chunkSize:
            self._CHUNK_SIZE = chunkSize
        if threadNum and threadNum > 0:
            self._uploaderNum = threadNum
        self._filemanager = filemanager
        self._session = filemanager.getSession()
        if GridviewConfig:
            self._config = GridviewConfig
        else:
            self._config =filemanager.getGridviewConfig()
        self._globalConfig = globalConfig
        
        self.fileManagerUrl = self._config["url"]["filemanager"]
        self.userHome = self._filemanager.getFileManagerInitInfo()["userInfo"]["homePath"]
        
        self.existCheckRoute = self._config["routes"]["filemanager"]["exist"]
        self.existCheckMethod = self._config["dataForm"]["filemanager"]["exist"]["method"]
        self.existCheckData = self._config["dataForm"]["filemanager"]["exist"]["data"]
        self.existCheckDataType = self._config["dataForm"]["filemanager"]["exist"]["dataType"]
        
        self.chunkUploadRoute = self._config["routes"]["filemanager"]["chunkUpload"]
        self.chunkUploadMethod = self._config["dataForm"]["filemanager"]["chunkUpload"]["method"]
        self.chunkUploadData = self._config["dataForm"]["filemanager"]["chunkUpload"]["data"]
        self.chunkUploadDataType = self._config["dataForm"]["filemanager"]["chunkUpload"]["dataType"]
        
        self.mergeRoute = self._config["routes"]["filemanager"]["merge"]
        self.mergeMethod = self._config["dataForm"]["filemanager"]["merge"]["method"]
        self.mergeData = self._config["dataForm"]["filemanager"]["merge"]["data"]
        self.mergeDataType = self._config["dataForm"]["filemanager"]["merge"]["dataType"]
        
    def chunkUploader(
        self,
        url,
        method,
        dataType,
        data
    ):
        try:
            me = MultipartEncoder(
                    fields={
                        **data,
                    }
                )
            m = MultipartEncoderMonitor(
                me,
                lambda monitor: self._progress.update(task, completed=monitor.bytes_read)
            )
            task = self._progress.add_task("[#fd79a8]\[%s-%s]Uploading"%("chunk", data["chunkNumber"]), total=m.len)
            resp = self._session.request(
                method = method,
                url = url,
                headers={'Content-Type': m.content_type},
                **{
                    dataType: m
                }
            )
            # success: {"code":"0","data":null,"msg":"操作成功"}
            respData = json.loads(resp.text)
            assert respData["code"] == "0", respData["msg"]
            
            self._progress.reset(task, visible=False)
            self._progress.stop_task(task)
            self._cond.acquire()
            self._progress.update(self._main_task, advance=1)
            self._cond.release()
            time.sleep(0.1)
        except Exception as e:
            # print(sys.exc_info())
            # print('\n','>>>' * 20)
            print(traceback.print_exc())
            # print('\n','>>>' * 20)
            # print(traceback.format_exc())
    
    
    def singleUpload(self, filePath:str, targetDir:str, overwrite:bool=False):
        assert os.path.isfile(filePath), "filePath must be a file"

        fileName = os.path.split(filePath)[-1]
        # destPath = targetDir
        # if destPath.startswith("~/"):
        #     destPath = destPath[2:]
        # if not destPath.startswith("/"):
        #     destPath = os.path.join(self.userHome, destPath)
        destPath = self._filemanager.pathFormater(targetDir)
        assert destPath.startswith(self.userHome), "invalid path: %s"%destPath
        
        assert self._filemanager.exists(destPath), "do not support file operation yet, please ensure target diredtory exists first"

        # check if target file is exist
        path = destPath
        destPath = os.path.join(destPath, fileName)
        cover = "uncover"
        if self._filemanager.exists(destPath):
            if  overwrite:
                cover = "cover"
            else:
                print("file [%s] exists and not to overwrite it"%destPath)
                return
        
        # upload file
        totalSize = os.path.getsize(filePath)
        cnt = 1
        if totalSize > self._CHUNK_SIZE:
            cnt = (totalSize - 1) // (self._CHUNK_SIZE // 2)
        totalChunks = cnt
        identifier = uuid.uuid4().hex
        chunkSize = self._CHUNK_SIZE
        relativePath = fileName
        currentChunkSize = self._CHUNK_SIZE
        
        # init thread pool
        self._uploaderPool = ThreadPoolExecutor(max_workers=self._uploaderNum)
        self._progress = Progress(
            auto_refresh=True,
            refresh_per_second=10,
            speed_estimate_period = 10
        )
        self._progress.start()
        self._main_task = self._progress.add_task("[#0984e3]\[Total Upload]", total=totalChunks)
        
        with open(filePath, 'rb') as f:
            chunkNumber = 1
            while cnt > 0:
                data = self.chunkUploadData.copy()
                data['chunkNumber'] = str(chunkNumber)
                data['chunkSize'] = str(chunkSize)
                data['currentChunkSize'] = str(currentChunkSize)
                data['totalSize'] = str(totalSize)
                data['identifier'] = identifier
                data['filename'] = fileName
                data['relativePath'] = relativePath
                data['totalChunks'] = str(totalChunks)
                data['path'] = path
                data['cover'] = cover
                data['file'] = (
                    fileName,
                    f.read() if cnt == 1 else f.read(self._CHUNK_SIZE//2),
                    "application/octet-stream",
                )
                
                self._uploaderPool.submit(
                    self.chunkUploader,
                    self.fileManagerUrl+self.chunkUploadRoute,
                    self.chunkUploadMethod,
                    self.chunkUploadDataType,
                    data,
                )
                cnt -= 1
                chunkNumber += 1

        
        # wait thread pool
        self._uploaderPool.shutdown()
        self._progress.stop_task(self._main_task)
        self._progress.stop()
        
        # mergeAction
        data = self.mergeData.copy()
        data["cover"] = cover
        data["path"] = path
        data["relativePath"] = relativePath
        resp = self._session.request(
            method=self.mergeMethod,
            url=self.fileManagerUrl+self.mergeRoute,
            **{
                self.mergeDataType:data
            }
        )
        mergeResult = json.loads(resp.text)
        """ success:
        {
            "code": "0",
            "data": "/public/home/lijunjie/test/HTTP_Debugger_Professional_v9.11.zip",
            "msg": "操作成功"
        }
        """
        assert mergeResult["code"] == "0", mergeResult["msg"]
        print("file: %s\noperation message: %s"%(mergeResult["data"], mergeResult["msg"]))
        
        