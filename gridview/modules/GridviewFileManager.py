import pandas as pd
import configparser
from requests import Session
import json
import os

from .GlobalConfig import getConfig
from .GridviewFile import GridviewFile

class GridviewFileManager:
    class Stack:
        def __init__(self, min=0, initData:list=[]):
            self.min = min
            assert isinstance(initData, list), 'type of initData should be list'
            assert len(initData) >= self.min
            self.items = initData

        def is_empty(self):
            return self.size == self.min

        def push(self,item):
            self.items.append(item)

        def pop(self):
            if self.size() > self.min:
                return self.items.pop()
            elif self.min:
                return self.peek()
            else:
                return None

        def peek(self):
            if self.size():
                return self.items[-1]
            else:
                return None

        def clear(self):
            self.items = self.items[:self.min]
        
        def dump(self):
            tmp = self.items[self.min:]
            self.clear()
            return tmp[::-1]
    
        def size(self):
            return len(self.items)
        
        def tolist(self):
            return self.items[::-1]
        
    def __init__(
        self,
        account,
        globalConfig:configparser=None,
    ):
        self._account = account
        self._config = account.getGridviewConfig()
        self._globalInfo = account.getGlobalInfo()
        self._session = account.getSession()
        if globalConfig:
            self._globalConfig = globalConfig
        else:
            self._globalConfig = getConfig()

        self.userHome = account.getUserHome()
        self._fileManagerUrl = self._config['url']['filemanager']
        self._fileManagerInitInfo = self.regSession()
        assert self._fileManagerInitInfo, 'File Manager Faild to Init, それは草．．．'
        self.front = self.Stack()
        self.back = self.Stack(min=1, initData=[self._fileManagerInitInfo['userInfo']['homePath']])
        self.currentPath = self.back.peek()
        self._uploaders = None
        self._downloaders = None
        
    def regSession(self)->dict:
        try:
            AuthResult = json.loads(self._session.get(self._config['url']['main']+self._config['routes']['login']['UserAuthToken']).text)
            assert AuthResult['code'] == '0', AuthResult['msg']
            UserAuthToken = AuthResult['data']
            regData = self._config['dataForm']['filemanager']['sessionReg']['data']
            regData['token'] = UserAuthToken
            # print(regData)
            regResult = self._session.get(url=self._fileManagerUrl+self._config['routes']['filemanager']['sessionReg'], params=regData)
            assert regResult.status_code == 200, regResult.text
            initResp = self._session.get(url=self._fileManagerUrl+self._config['routes']['filemanager']['initInfo'])
            initData = json.loads(initResp.text)
            assert initData['code'] == '0', initData['msg']
            return initData['data']
        except Exception as e:
            print(e)
            return None
        
    def getToPath(self, path:str=None, front:bool=False, back:bool=False)->str:
        if not front and not back and path:
            self.back.push(path)
            if self.front.is_empty():
                pass
            elif path == self.front.peek():
                self.front.pop()
            else:
                self.front.clear()
        elif back:
            self.front.push(self.back.pop())
        elif front:
            self.back.push(self.front.pop())
        path = self.back.peek()
        self.currentPath = self.back.peek()
        return path

    def listFiles(
        self,
        order:['asc', 'desc']='asc',
        orderBy:['name', 'size', 'lastModifiedTime']='name',
        path:str=None,
        start:int=0,
        limit:int=500,
        keyWord:str='',
        front=False,
        back=False
    )->dict:
        try:
            if not front and not back and path:
                self.back.push(path)
                if self.front.is_empty():
                    pass
                elif path == self.front.peek():
                    self.front.pop()
                else:
                    self.front.clear()
            elif back:
                self.front.push(self.back.pop())
            elif front:
                self.back.push(self.front.pop())
            path = self.back.peek()
            self.currentPath = self.back.peek()

            reqData = self._config['dataForm']['filemanager']['list']['data']
            reqData['order'] = 'asc'
            reqData['orderBy'] = 'name'
            reqData['path'] = path
            reqData['start'] = 0
            reqData["keyWord"] = keyWord
            reqData['limit'] = 500
            # print(reqData)
            
            fileListResult = json.loads(
                self._session.get(
                    self._fileManagerUrl+self._config['routes']['filemanager']['list'], params=reqData
                    ).text
                )
            assert fileListResult['code'] == '0', fileListResult['msg']
            fileData = fileListResult['data']
            return fileData
        except Exception as e:
            print(e)
            return None
    
    def exists(self, filePath)->bool:
        existCheckRoute = self._config["routes"]["filemanager"]["exist"]
        existCheckMethod = self._config["dataForm"]["filemanager"]["exist"]["method"]
        existCheckData = self._config["dataForm"]["filemanager"]["exist"]["data"]
        existCheckDataType = self._config["dataForm"]["filemanager"]["exist"]["dataType"]
        
        existCheckData['path'] = filePath
        reqData = {
            existCheckDataType: existCheckData
        }
        existCheck = json.loads(
                self._session.request(
                    url = self._fileManagerUrl+existCheckRoute,
                    method = existCheckMethod,
                    **reqData
                ).text
            )
        assert existCheck["code"] == "0", existCheck["msg"]
        return existCheck["data"]["exist"]

    def pathFormater(self, filePath:str, dirPath:str=None)->str:
        if filePath.startswith(self.userHome):
            if filePath.endswith("/"):
                filePath = filePath[:-1]
            return filePath
        if filePath.startswith("~/"):
            filePath = os.path.join(self.userHome, filePath[2:])
            if filePath.endswith("/"):
                filePath = filePath[:-1]
            return filePath
        
        if not dirPath:
            dirPath=self.back.peek()
        elif dirPath.startswith("~/"):
            dirPath = os.path.join(self.userHome, dirPath[2:])
        assert dirPath.startswith("/"), "bad directory path, (or ../ and ./ are not supported for dirPath)"
        if filePath.startswith("../"):
            while filePath.startswith("../"):
                dirPath=os.path.dirname(dirPath)
                filePath = filePath[3:]
            if dirPath  == '':
                dirPath = '/'
        
        if filePath.startswith("./"):
            filePath = filePath[2:]
        if not filePath.startswith("/"):
            filePath = os.path.join(dirPath, filePath)

        assert filePath.startswith(self.userHome), "path not in user home"
        if filePath.endswith("/"):
            filePath = filePath[:-1]
        return filePath
    
    # def fileListHandler(fileData:map):
    #     fileList = fileData['fileList']
    #     file_df = pd.DataFrame(fileList)
    #     childrenList = fileData['children']
    #     children_df = pd.DataFrame(childrenList)
    #     return file_df, children_df
    
    def getFile(self, filePath:str)->GridviewFile:
        filePath = self.pathFormater(filePath)
        assert self.exists(filePath), 'file %s not exists'%filePath
        dirName, fileName = os.path.split(filePath)
        fileData = self.listFiles(
            path=dirName,
            keyWord=fileName,
            limit=500,
        )
        if fileData['total'] == 1:
            return GridviewFile(fileData["fileList"][0])
        elif fileData['total'] > 500:
            assert 'not support get file object directly from lots of files, please use lsDir or matchFile instead'
        assert fileData['total'] < 0, "no such file found"
        file = file[file["name"] == "461.2dab3c1f.js"]
        assert file.shape[0], "no such file found"
        return GridviewFile(file.iloc[0])
    
    def lsDir(self, dirName:str, fileName:str="")->tuple:
        dirName =  self.pathFormater(dirName)
        fileData = self.listFiles(
            path=dirName,
            keyWord=fileName,
            limit=500,
        )
        fileList = fileData["fileList"]
        childList = fileData['children']
        total = fileData['total']
        if total > 500:
            page = 1
            while page * 500 < total:
                fileData = self.listFiles(
                    path=dirName,
                    keyWord=fileName,
                    limit=500,
                    start=page*500,
                )
                fileList += fileData["fileList"]
                childList += fileData['children']
                page += 1
        file_df = pd.DataFrame(fileList)
        child_df = pd.DataFrame(childList)
        return file_df, child_df
    
    def matchFile(self, dirName:str, pattern:str)->pd.DataFrame:
        dirName =  self.pathFormater(dirName)
        file, _ = self.lsDir(dirName)
        return file[file["name"].str.contains(pattern)]
    
    # @DeprecationWarning
    # def getDownloader(
    #     self,
    #     chunkSize:int=None
    # )->GridviewDownloader:
    #     if not self._downloaders:
    #         self._downloaders = GridviewDownloader(
    #             self,
    #             chunkSize=chunkSize
    #         )
    #     return self._downloaders
    
    # @DeprecationWarning
    # def getUploader(
    #     self,
    #     chunkSize:int=None,
    #     threadNum:int=None
    # )->GridviewUploader:
    #     if not self._uploaders:
    #         self._uploaders = GridviewUploader(
    #             self,
    #             chunkSize=chunkSize,
    #             threadNum=threadNum,
    #         )
    #     return self._uploaders
    
    def getFileManagerInitInfo(self)->dict:
        return self._fileManagerInitInfo
    
    def getAccount(self):
        return self._account
    
    def getSession(self)->Session:
        return self._session

    def getGridviewConfig(self)->dict:
        return self._config

    def getGlobalConfig(self)->configparser:
        return self._globalConfig
    
    def getHomePath(self):
        return self._fileManagerInitInfo['userInfo']['homePath']
    
    def getClusterUserName(self):
        return self._fileManagerInitInfo['userInfo']['clusterUserName']

    def getCurrentPath(self):
        return self.currentPath