import requests
import json
from ruamel.yaml import YAML
import os
import pickle
import time
import traceback
import getpass
from .GlobalConfig import getConfig

class GridviewAccount:
    def __init__(
        self,
        username: str = None,
        password: str = None,
        configDir: str = "./config",
        GridviewConfigName: str = "GridviewConfig.yaml",
        cacheDir: str = "",
        saveName="",
        Gridviewconfig: dict = None,
        fromSerializationFile=None,
    ):
        configPath = os.path.join(configDir, GridviewConfigName)
        self._session = None
        self._username = username
        self._password = password
        self.tmpDir = cacheDir
        self.statusName = saveName
        self._globalInfo = None
        if Gridviewconfig:
            self._gridview_config = Gridviewconfig
        else:
            self._gridview_config = self.readYAMLConfig(configPath)
            
        self._globalConfig = getConfig()
        if not self.tmpDir:
            self.tmpDir = self._globalConfig['global']['tmp_dir']
        if not self.statusName:
            self.statusName = self._globalConfig['global']['statue_tmp_name']
        

        if fromSerializationFile:
            # print("fromSerializationFile: %s" % fromSerializationFile)
            self.antiSerialization(
                filePath=fromSerializationFile, refreshGlobalInfo=True
            )
        elif os.path.exists(os.path.join(self.tmpDir, self.statusName)) and not self._globalInfo:
            self.antiSerialization(
                filePath=os.path.join(self.tmpDir, self.statusName), refreshGlobalInfo=True
            )

        while not self._username:
            self._username = input("Enter username:")
        if (
            self._globalInfo and self._globalInfo["userName"] != self._username
        ):  # change user
            self._globalInfo = None
        elif (
            self._globalInfo
            and self._password
            and self._globalInfo["passwd"] != self._password
        ):  # change password
            self._globalInfo = None

        if self._globalInfo:
            self.serialization()
            # print("GridviewAccount successfully initialized by last status\nusername: %s"%self._username)
            return

        self._password = None
        while not self._password:
            self._password = getpass.getpass("Enter password (invisable):")
        # elif self._username and self._password:
        self._session = requests.Session()
        self._session.headers.update(
            {"User-Agent": self._gridview_config["headers"]["userAgent"]}
        )
        self.login()
        self._globalInfo = self.fetchGlobalInfo()
        assert self._globalInfo, "can not initialize account class yet"
        self.serialization()
        # print("GridviewAccount successfully initialized by login: %s"%self._username)

    def login(self, username=None, password=None):
        try:
            if not username:
                username = self._username
            if not password:
                password = self._password

            mainUrl = self._gridview_config["url"]["main"]
            checkLockRoutes = self._gridview_config["routes"]["login"]["checkLock"]
            loginAuthRoutes = self._gridview_config["routes"]["login"]["loginAuth"]
            checkLockMethod = self._gridview_config["dataForm"]["login"]["checkLock"]["method"]
            loginAuthMethod = self._gridview_config["dataForm"]["login"]["loginAuth"]["method"]

            checkLock = json.loads(
                self._session.request(
                    url=mainUrl + checkLockRoutes, method=checkLockMethod
                ).text
            )
            assert not checkLock["result"], "client has been blocked by target website"

            data = self._gridview_config["dataForm"]["login"]["loginAuth"]["data"]
            k_v = self._gridview_config["dataForm"]["login"]["loginAuth"]["kv"]
            data[k_v["username"]] = username
            data[k_v["password"]] = password
            loginResult = self._session.request(
                url=mainUrl + loginAuthRoutes,
                method=loginAuthMethod,
                data=data
            )
            jsonData = json.loads(loginResult.text)
            assert jsonData["success"], jsonData["errMsg"]
            # print(jsonData["errMsg"])
            if username != self._username:
                self._username = username
            if password != self._password:
                self._password = password
        except Exception as e:
            traceback.format_exc()
            # print(e)

    def serialization(self, userCacheDir: str = None, name: str = None):
        if userCacheDir is None:
            userCacheDir = self.tmpDir
        os.makedirs(userCacheDir, exist_ok=True)
        if name is None:
            name = self.statusName
        with open(os.path.join(userCacheDir, name), "wb") as f:
            session_data = {
                "session": self._session,
                "globalInfo": self._globalInfo,
                "time": time.time(),
            }
            pickle.dump(session_data, f)

    def antiSerialization(
        self,
        filePath="./data/latestLogin.db",
        refreshGlobalInfo=True
    ):
        # print("antiSerializing ...")
        assert os.path.isfile(filePath), "serialization file not exists"
        with open(filePath, "rb") as f:
            session_dump_data = pickle.load(f)
        self._session = session_dump_data["session"]
        # if time.time() - session_dump_data['time'] < 30 * 60:
        self._globalInfo = session_dump_data["globalInfo"]
        tmp = self._globalInfo
        self._globalInfo = self.fetchGlobalInfo()
        if self._globalInfo:
            tmp = self._globalInfo
        if not self._username:
            self.uasename = tmp["userName"]
        if not self._password:
            self._password = tmp["passwd"]
            
    def refresh(self):
        if not self.fetchGlobalInfo():
            self.login(self._username, self._password)

    def fetchGlobalInfo(self) -> dict:
        try:
            assert self._session
            mainUrl = self._gridview_config["url"]["main"]
            globalInfoRoute = self._gridview_config["routes"]["account"]["globalInfo"]
            globalInfoMethod = self._gridview_config["dataForm"]["account"]["globalInfo"]["method"]

            globalInfo = json.loads(
                self._session.request(
                    url=mainUrl + globalInfoRoute,
                    method=globalInfoMethod
                ).text
            )
            assert globalInfo["code"] == "0", globalInfo["msg"]
            if self._globalInfo != globalInfo["data"]:
                self._globalInfo = globalInfo["data"]
            return globalInfo["data"]
        except Exception as e:
            traceback.format_exc()
            # print(e)
            return None

    def readYAMLConfig(self, path="./config/config.yaml"):
        assert os.path.isfile(path), "no config file in path %s" % path
        with open(path, "r", encoding="utf-8") as f:
            yaml=YAML(typ='safe', pure=True)
            config = yaml.load(f)
            assert config, "read local config error"
            return config

    def getGlobalInfo(self) -> dict:
        return self._globalInfo

    def getGridviewConfig(self) -> dict:
        return self._gridview_config

    def getSession(self) -> requests.Session:
        return self._session

    def getUserHome(self) -> str:
        assert self._globalInfo, "not initialized yet"
        return self._globalInfo["userHome"]

    def getUserName(self) -> str:
        assert self._globalInfo, "not initialized yet"
        return self._globalInfo["userName"]

    def getUserRole(self) -> str:
        assert self._globalInfo, "not initialized yet"
        return self._globalInfo["userRole"]

    def getOsName(self) -> str:
        assert self._globalInfo, "not initialized yet"
        return self._globalInfo["osName"]

    def getManagerServerIp(self) -> str:
        assert self._globalInfo, "not initialized yet"
        return self._globalInfo["managerServerIp"]

    # @DeprecationWarning
    # def getGridviewFileManager(self)->GridviewFileManager:
    #     return GridviewFileManager(self)
