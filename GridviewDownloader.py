import requests
import re
import time
import rich
import os
import shutil
from configparser import ConfigParser
from GridviewFile import GridviewFile
# from GridviewFileManager import GridviewFileManager
import json
import threading
from tqdm import tqdm
from rich.progress import Progress, DownloadColumn, TextColumn, BarColumn, TaskProgressColumn, TimeRemainingColumn, TransferSpeedColumn


class GridviewDownloader(threading.Thread):
    _CHUNK_SIZE = 512*1024  # 8 MB

    def __init__(
        self,
        filemanager,
        globalConfig: ConfigParser=None,
        GridviewConfig: dict=None,
        chunkSize: int = None
    ):
        super(self.__class__, self).__init__()
        if chunkSize:
            self._CHUNK_SIZE = chunkSize
        self._filemanager = filemanager
        self._session = filemanager.getSession()
        if GridviewConfig:
            self._config = GridviewConfig
        else:
            self._config =filemanager.getGridviewConfig()
        if globalConfig:
            self._globalConfig = globalConfig
        else:
            self._globalConfig = filemanager.getGlobalConfig()
            
        
        self.fileManagerUrl = self._config["url"]["filemanager"]
        
        self.downloadHeaders = {
            "Referer": self._config["headers"]["Referer"],
            "Accept-Ranges": "bytes",
            "Range": "bytes=0-",
        }

    def refreshRange(self, start: int = 0):
        self.downloadHeaders["Range"] = "bytes=%d-" % start

    def singleDownload(
        self,
        file: GridviewFile,
        saveDir: str = None,
        saveName: str = None,
        keepOriginStructure: bool = True,
        overwrite=False,
        showProgress=True,
    ) -> str:
        """_summary_

        Args:
            file : GridviewFile オブジエクトである
            savePath (str, optional): ファイルの出力するパス
            keepOriginStructure (bool, optional): 元の相対位置を維持するかどうか Defaults to True.
            overwrite (bool, optional): 同じ名前のファイルを上書きするかどうか Defaults to False.

        Returns:
            str: ファイルの出力するパス
        """
        assert not file.get('isDirectory'), "もし訳ありませんが、ディレクトリをダウンロードすることがまだできまでん"
        filePath = file.get("path")
        fileDir, fileName = os.path.split(filePath)
        savePath = ''
        if not saveName:
            saveName = fileName
        if not saveDir:
            saveDir = self._globalConfig.get(
                "global",
                "default_download_dir"
            )
        else:
            assert not os.path.isfile(saveDir), 'saveDirはファイルで入力することができません'

        if keepOriginStructure:
            saveDir = os.path.join(
                savePath,
                fileDir if not fileDir.startswith(
                    "/") else fileDir[1:],
            )
        os.makedirs(saveDir, exist_ok=True)
        savePath = os.path.join(
            saveDir,
            saveName
        )
        if file.get('isDirectory') and not savePath.endswith('.zip'):
            savePath+='.zip'
        tmpPath = savePath + ".tmp"
        tmpSize = 0
        if os.path.exists(savePath):
            if overwrite:
                shutil.rm(savePath)
            else:
                print('このファイル"%s"はダウンロードされてしまいました' % filePath)
                return
        elif os.path.exists(tmpPath) and not file.get('isDirectory'):
            tmpSize = os.path.getsize(tmpPath)
        if file.get('isDirectory'):
            self.downloadHeaders.pop("Range")
        else:
            self.refreshRange(start=tmpSize)

        self._session.headers.update(self.downloadHeaders)
        finished = False
        try:
            downloadCheckRoute = self._config["routes"]["filemanager"]["downloadCheck"]
            downloadCheckData = self._config["dataForm"]["filemanager"][
                "downloadCheck"
            ]["data"]
            downloadCheckData["paths"] = filePath
            downloadCheckMethod = self._config["dataForm"]["filemanager"][
                "downloadCheck"
            ]["method"]
            reqData = {
                self._config["dataForm"]["filemanager"]["downloadCheck"][
                    "dataType"
                ]: downloadCheckData
            }
            resp = self._session.request(
                method=downloadCheckMethod,
                url=self.fileManagerUrl + downloadCheckRoute,
                **reqData,
            )
            downloadCheck = json.loads(resp.text)
            assert downloadCheck["code"] == "0", downloadCheck["msg"]

            multiDownloadRoute = self._config["routes"]["filemanager"]["multiDownload"]
            multiDownloadData = self._config["dataForm"]["filemanager"][
                "multiDownload"
            ]["data"]
            multiDownloadData["paths"] = filePath
            multiDownloadMethod = self._config["dataForm"]["filemanager"][
                "multiDownload"
            ]["method"]
            reqData = {
                self._config["dataForm"]["filemanager"]["multiDownload"][
                    "dataType"
                ]: multiDownloadData
            }

            progress_bar = None
            task = 0
            # noinspection PyProtectedMember
            with self._session.request(
                method=multiDownloadMethod,
                url=self.fileManagerUrl + multiDownloadRoute,
                stream= not file.get('isDirectory'),
                **reqData,
            ) as resp:
                llen = int(resp.headers.get("content-length", 0))
                if resp.headers.get("Accept-Ranges", None) != "bytes":
                    raise ValueError(f'リンク"{resp.url}"が期限切れました')
                if showProgress:
                    # progress_bar = tqdm(
                    #     total=llen + tmpSize, unit="B", unit_scale=True, colour="#fd79a8"
                    # )
                    # progress_bar.update(tmpSize)
                    progress =  Progress(
                            TextColumn("[progress.description]{task.description}"),
                            BarColumn(),
                            DownloadColumn(binary_units=True),
                            TransferSpeedColumn(),
                            TaskProgressColumn(),
                            TimeRemainingColumn(),
                            auto_refresh=True
                            )
                    task = progress.add_task("[red]Downloading...", total=llen + tmpSize)
                    progress.update(task, advance=tmpSize)
                    progress.start()
                with open(tmpPath, "a" if file.get('isDirectory') else "ab") as f:
                    for content in resp.iter_content(
                        chunk_size=self._CHUNK_SIZE
                    ):
                        if showProgress:
                            # progress_bar.update(len(content))
                            progress.update(task, advance=len(content))
                        f.write(content)
                        f.flush()
            assert os.path.getsize(tmpPath) == file.get("size")
            os.rename(tmpPath, savePath)

        finally:
            # if progress_bar:
            #     progress_bar.close()
            if progress:
                progress.stop()
        print("ファイルはダウンロードすることがしまいました")
        return filePath
