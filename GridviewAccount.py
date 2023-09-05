import requests
import json
from ruamel.yaml import YAML
import os
import pickle
import time
import traceback
import getpass
from GridviewFileManager import GridviewFileManager


class GridviewAccount:
    def __init__(
        self,
        username: str = None,
        password: str = None,
        configDir: str = "./config",
        GridviewConfigName: str = "GridviewConfig.yaml",
        dataDir: str = "./data",
        saveName="lastLogin.bin",
        Gridviewconfig: dict = None,
        fromSerializationFile=None,
    ):
        configPath = os.path.join(configDir, GridviewConfigName)
        self._session = None
        self._username = username
        self._password = password
        self.dataDir = dataDir
        self.saveName = saveName
        self._globalInfo = None
        if Gridviewconfig:
            self._config = Gridviewconfig
        else:
            self._config = self.readYAMLConfig(configPath)

        if fromSerializationFile:
            print("fromSerializationFile: %s" % fromSerializationFile)
            self.antiSerialization(
                filePath=fromSerializationFile, refreshGlobalInfo=True
            )
        elif os.path.exists(os.path.join(dataDir, saveName)) and not self._globalInfo:
            self.antiSerialization(
                filePath=os.path.join(dataDir, saveName), refreshGlobalInfo=True
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
            print("GridviewAccount successfully initialized by last status\nusername: %s"%self._username)
            return

        self._password = None
        while not self._password:
            self._password = getpass.getpass("Enter password (invisable):")
        # elif self._username and self._password:
        self._session = requests.Session()
        self._session.headers.update(
            {"User-Agent": self._config["headers"]["userAgent"]}
        )
        self.login()
        self._globalInfo = self.fetchGlobalInfo()
        assert self._globalInfo, "can not initialize account class yet"
        self.serialization()
        print("GridviewAccount successfully initialized by login: %s"%self._username)

    def login(self, username=None, password=None):
        try:
            if not username:
                username = self._username
            if not password:
                password = self._password

            mainUrl = self._config["url"]["main"]
            checkLockRoutes = self._config["routes"]["login"]["checkLock"]
            loginAuthRoutes = self._config["routes"]["login"]["loginAuth"]
            checkLockMethod = self._config["dataForm"]["login"]["checkLock"]["method"]
            loginAuthMethod = self._config["dataForm"]["login"]["loginAuth"]["method"]

            checkLock = json.loads(
                self._session.request(
                    url=mainUrl + checkLockRoutes, method=checkLockMethod
                ).text
            )
            assert not checkLock["result"], "client has been blocked by target website"

            data = self._config["dataForm"]["login"]["loginAuth"]["data"]
            k_v = self._config["dataForm"]["login"]["loginAuth"]["kv"]
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
            userCacheDir = self.dataDir
        if name is None:
            name = self.saveName
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
        print("antiSerializing ...")
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

    def fetchGlobalInfo(self) -> dict:
        try:
            assert self._session
            mainUrl = self._config["url"]["main"]
            globalInfoRoute = self._config["routes"]["account"]["globalInfo"]
            globalInfoMethod = self._config["dataForm"]["account"]["globalInfo"]["method"]

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
        return self._config

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

    def getGridviewFileManager(self)->GridviewFileManager:
        return GridviewFileManager(self)

if __name__ == "__main__":
    pass
