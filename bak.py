# from configparser import ConfigParser
# from requests_toolbelt import MultipartEncoder, MultipartEncoderMonitor
# from copy import deepcopy
# import threading
# from rich.progress import Progress
# class GridviewUploader(threading.Thread):
#     _CHUNK_SIZE = 5*1024*1024
    
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
        
#         data = {}
#         data['chunkSize'] = str(chunkSize)
#         data['totalSize'] = str(totalSize)
#         data['filename'] = fileName
#         data['relativePath'] =relativePath
#         data['totalChunks'] = str(totalChunks)
#         data['path'] = path
#         data['cover'] = cover
        

#         me = MultipartEncoder(
#             fields={
#                 **data,
#                 "file": (fileName, open(filePath, 'rb'), "application/octet-stream")
#             }
#         )
#         progress = Progress(
#             auto_refresh=True,
#             refresh_per_second=10,
#         )
        
#         m = MultipartEncoderMonitor(
#             me,
#             lambda monitor: progress.update(task1, completed=monitor.bytes_read)
#         )
        
#         task1 = progress.add_task("[#fd79a8]Downloading...", total=m.len)
        
#         progress.start()
        
#         resp = session.request(
#             method = self.chunkUploadMethod,
#             url = self.fileManagerUrl+self.chunkUploadRoute,
#             headers={'Content-Type': m.content_type},
#             **{
#                 self.chunkUploadDataType: m
#             }
#         )
#         progress.reset(task1, description="[#00b894]finished", completed=m.len)
#         progress.stop_task(task1)
#         progress.stop()
        
#         # success: {"code":"0","data":null,"msg":"操作成功"}
#         respData = json.loads(resp.text)
#         assert respData["code"] == "0", respData["msg"]
        
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
        
        