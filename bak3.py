# from configparser import ConfigParser
# from requests_toolbelt import MultipartEncoder, MultipartEncoderMonitor
# from copy import deepcopy
# import threading
# from rich.progress import Progress
# from concurrent.futures import ThreadPoolExecutor
 
# class GridviewUploader(threading.Thread):
#     _CHUNK_SIZE = 10*1024*1024
#     _uploaderPool = None
#     def __init__(
#         self,
#         account: GridviewAccount,
#         GridviewConfig: dict,
#         userConfig: ConfigParser=None
#     ):
#         self._account = account
#         self._session = account.getSession()
#         self._config = GridviewConfig
#         self._userConfig = userConfig
        
#         self.fileManagerUrl = self._config["url"]["filemanager"]
#         self.userHome = account.getGlobalInfo()["userHome"]
        
#         self.existCheckRoute = config["routes"]["filemanager"]["exist"]
#         self.existCheckMethod = config["dataForm"]["filemanager"]["exist"]["method"]
#         self.existCheckData = config["dataForm"]["filemanager"]["exist"]["data"]
#         self.existCheckDataType = config["dataForm"]["filemanager"]["exist"]["dataType"]
        
#         self.chunkUploadRoute = config["routes"]["filemanager"]["chunkUpload"]
#         self.chunkUploadMethod = config["dataForm"]["filemanager"]["chunkUpload"]["method"]
#         self.chunkUploadData = config["dataForm"]["filemanager"]["chunkUpload"]["data"]
#         self.chunkUploadDataType = config["dataForm"]["filemanager"]["chunkUpload"]["dataType"]
        
#         self.mergeRoute = config["routes"]["filemanager"]["merge"]
#         self.mergeMethod = config["dataForm"]["filemanager"]["merge"]["method"]
#         self.mergeData = config["dataForm"]["filemanager"]["merge"]["data"]
#         self.mergeDataType = config["dataForm"]["filemanager"]["merge"]["dataType"]
        
#     def chunkUploader(
#         self,
#         url,
#         method,
#         dataType,
#         data
#     ):
#         m = MultipartEncoder(
#                 fields={
#                     **data,
#                 }
#             )
#         self._session.request(
#             method = method,
#             url = url,
#             headers={'Content-Type': m.content_type},
#             **{
#                 dataType: m
#             }
#         )
        
#         # success: {"code":"0","data":null,"msg":"操作成功"}
#         respData = json.loads(resp.text)
#         assert respData["code"] == "0", respData["msg"]
    
    
#     def uploader(self, filePath:str, targetDir:str, overwrite:bool=False):
#         assert os.path.isfile(filePath), "filePath must be a file"

#         fileName = os.path.split(filePath)[-1]
#         destPath = targetDir
#         if destPath.startswith("~/"):
#             destPath = destPath[2:]
#         if not destPath.startswith("/"):
#             destPath = os.path.join(self.userHome, destPath)
#         assert destPath.startswith(self.userHome), "invalid path: %s"%destPath
        
#         # check if target dir is exist (should be)
#         self.existCheckData['path'] = destPath
#         reqData = {
#             self.existCheckDataType: self.existCheckData
#         }
#         existCheck = json.loads(
#                 self._session.request(
#                     url = self.fileManagerUrl+self.existCheckRoute,
#                     method = self.existCheckMethod,
#                     **reqData
#                 ).text
#             )
        
#         assert existCheck["code"] == "0", existCheck["msg"]
#         assert existCheck["data"]["exist"], "do not support file operation yet, please ensure target diredtory exists first"

#         # check if target file is exist
#         path = destPath
#         destPath = os.path.join(destPath, fileName)
#         print(destPath)
#         self.existCheckData['path'] = destPath
#         reqData = {
#             config["dataForm"]["filemanager"]["exist"]["dataType"]: self.existCheckData
#         }
#         existCheck = json.loads(
#                 self._session.request(
#                     url = self.fileManagerUrl+self.existCheckRoute,
#                     method = self.existCheckMethod,
#                     **reqData
#                 ).text
#             )
#         assert existCheck["code"] == "0", existCheck["msg"]
#         cover = "uncover"
#         if existCheck["data"]["exist"]:
#             if  overwrite:
#                 cover = "cover"
#             else:
#                 print("file <%s> exists and not to overwrite it"%destPath)
#                 return
        
#         #upload file
#         totalSize = os.path.getsize(filePath)
#         cnt = 1
#         if totalSize > self._CHUNK_SIZE:
#             cnt = (totalSize - 1) // (self._CHUNK_SIZE // 2)
#         totalChunks = cnt
#         identifier = uuid.uuid4().hex
#         chunkSize = self._CHUNK_SIZE
#         relativePath = fileName
#         currentChunkSize = self._CHUNK_SIZE
        
#         # init thread pool
#         self._uploaderPool = ThreadPoolExecutor(max_workers=3)
        
#         with open(filePath, 'rb') as f:
#             chunkNumber = 1
#             while cnt > 0:
#                 data = self.chunkUploadData.copy()
#                 data['chunkNumber'] = str(chunkNumber)
#                 data['chunkSize'] = str(chunkSize)
#                 data['currentChunkSize'] = str(currentChunkSize)
#                 data['totalSize'] = str(totalSize)
#                 data['identifier'] = identifier
#                 data['filename'] = fileName
#                 data['relativePath'] = relativePath
#                 data['totalChunks'] = str(totalChunks)
#                 data['path'] = path
#                 data['cover'] = cover
#                 # print(data)
#                 data['file'] = (
#                     fileName,
#                     f.read() if cnt == 1 else f.read(self._CHUNK_SIZE//2),
#                     "application/octet-stream",
#                 )
#                 # file = f.read() if cnt == 1 else f.read(self._CHUNK_SIZE//2)
#                 # self.chunkUploader(
#                 #     self.fileManagerUrl+self.chunkUploadRoute,
#                 #     self.chunkUploadMethod,
#                 #     self.chunkUploadDataType,
#                 #     data,
#                 # )
                
#                 self._uploaderPool.submit(
#                     self.chunkUploader,
#                     self.fileManagerUrl+self.chunkUploadRoute,
#                     self.chunkUploadMethod,
#                     self.chunkUploadDataType,
#                     data,
#                 )
#                 cnt -= 1
#                 chunkNumber += 1
#             # content_b = f.read()
#             # currentChunkSize = len(content_b)
#             # print(len(content_b))
        
#         # wait thread pool
#         self._uploaderPool.shutdown()
#         # data = {}
#         # data['chunkSize'] = str(chunkSize)
#         # data['totalSize'] = str(totalSize)
#         # data['filename'] = fileName
#         # data['relativePath'] =relativePath
#         # data['totalChunks'] = str(totalChunks)
#         # data['path'] = path
#         # data['cover'] = cover
        

#         # me = MultipartEncoder(
#         #     fields={
#         #         **data,
#         #         "file": (fileName, open(filePath, 'rb'), "application/octet-stream")
#         #     }
#         # )
#         # progress = Progress(
#         #     auto_refresh=True,
#         #     refresh_per_second=10,
#         # )
        
#         # m = MultipartEncoderMonitor(
#         #     me,
#         #     lambda monitor: progress.update(task1, completed=monitor.bytes_read)
#         # )
        
#         # task1 = progress.add_task("[#fd79a8]Downloading...", total=m.len)
        
#         # progress.start()
        
#         # resp = session.request(
#         #     method = self.chunkUploadMethod,
#         #     url = self.fileManagerUrl+self.chunkUploadRoute,
#         #     headers={'Content-Type': m.content_type},
#         #     **{
#         #         self.chunkUploadDataType: m
#         #     }
#         # )
#         # progress.reset(task1, description="[#00b894]finished", completed=m.len)
#         # progress.stop_task(task1)
#         # progress.stop()
        
#         # success: {"code":"0","data":null,"msg":"操作成功"}
#         # respData = json.loads(resp.text)
#         # assert respData["code"] == "0", respData["msg"]
        
#         # mergeAction
#         data = self.mergeData.copy()
#         data["cover"] = cover
#         data["path"] = path
#         data["relativePath"] = relativePath
#         resp = self._session.request(
#             method=self.mergeMethod,
#             url=self.fileManagerUrl+self.mergeRoute,
#             **{
#                 self.mergeDataType:data
#             }
#         )
#         mergeResult = json.loads(resp.text)
#         """ success:
#         {
#             "code": "0",
#             "data": "/public/home/lijunjie/test/HTTP_Debugger_Professional_v9.11.zip",
#             "msg": "操作成功"
#         }
#         """
#         assert mergeResult["code"] == "0", mergeResult["msg"]
#         print("file: %s\noperation message: %s"%(mergeResult["data"], mergeResult["msg"]))
        
        