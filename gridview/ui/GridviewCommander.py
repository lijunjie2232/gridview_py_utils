import time
# import argparse

from pytermgui import tim
from rich import pretty
from rich.text import Text
from rich.panel import Panel
from rich.padding import Padding

from gridview.modules.GridviewAccount import GridviewAccount
from gridview.modules.GridviewFileManager import GridviewFileManager
from .Commander import Commander
from .GridviewMode import GridviewMode
from .FileManagerMode import FileManagerMode
from gridview.info import __version__


class GridviewCommander(Commander):
    def __init__(self):
        super().__init__(
            desc="gridview_tool/%s"%__version__ ,
            prog="[commands]",
            name="gridview util",
        )
        self._name = "GRIDVIEW UTIL"

        self._account = None
        self.account_init()
        self._file_manager = GridviewFileManager(self._account)
        self.current_path = ""

        self._mode_pool = {}
        self._mode_pool["gridview"] = GridviewMode(
            upper_commander=self,
            desc="cluster related operator",
            prog="",
            name="gridview mode",
        )
        self._mode_pool["filemanager"] = FileManagerMode(
            upper_commander=self,
            desc="file related operator",
            prog="",
            name="filemanager mode",
        )
        self.mode = self._mode_pool["gridview"]

        self.commands = ["gridview", "filemanager", "help", "version", "exit"]

        self.console_on = False

        # 定义命令行解析器对象
        # self.parser = argparse.ArgumentParser(prog="[commands]", description="gridview_tool version: gridview_tool/%s" % VERSION,)
        # 添加子命令
        # self.subparsers = self.parser.add_subparsers(help="commands:")
        
        # 命令行参数
        parser = self.subparsers.add_parser(
            "gridview", help="change to gridview mode to manage cluster"
        )
        # 设置默认函数
        parser.set_defaults(func=self.to_gridview_mode)

        parser = self.subparsers.add_parser(
            "filemanager", help="change to filemanager mode to manage file"
        )
        parser.set_defaults(func=self.to_filemanager_mode)

        # parser = self.subparsers.add_parser("help", help="show help information")
        # parser = self.subparsers._name_parser_map["help"]
        self.subparsers._name_parser_map["help"].set_defaults(func=self.dump_help_info)
        # parser.set_defaults(func=self.dump_help_info)
        
        parser = self.subparsers.add_parser("version", help="print gridview util version")
        parser.set_defaults(func=self.version_display)

        parser = self.subparsers.add_parser("exit", help="exit gridview util")
        parser.set_defaults(func=self.console_exit)
        
    def version_display(self, args=None):
        text = Text("gridview_tool version: %s"%__version__)
        text.stylize("bold #fd79a8")
        self._console.print(text)
        
    def console_exit(self, args=None):
        self.console_on = False

    def dump_help_info(self, args=None):
        self.help()
        for mode in self._mode_pool.values():
            mode.help()

    def get_account(self):
        return self._account
    
    def get_filemanager(self):
        return self._file_manager
    
    def filemanager_help(self, args=None):
        self._mode_pool['filemanager'].help()

    def gridview_help(self, args):
        self._mode_pool['gridview'].help()
        
    def to_gridview_mode(self, args=None):
        self.to_mode("gridview")

    def to_filemanager_mode(self, args=None):
        self.to_mode("filemanager")

    def to_mode(self, mode: str):
        self.mode = self._mode_pool[mode]

    def load_config(self):
        pass

    def account_init(self):
        self._account = GridviewAccount()
        color_text_main = "#fd79a8"
        color_title_main = "#74b9ff"
        welcome_text = f"\
                [{color_title_main}]host: [{color_text_main}]{self._account.getManagerServerIp()}\n\n\
                [{color_title_main}]username: [{color_text_main}]{self._account.getUserName()}\n\n\
                [{color_title_main}]home: [{color_text_main}]{self._account.getUserHome()}\n\n\
                [{color_title_main}]role: [{color_text_main}]{self._account.getUserRole()}\n\n\
                [{color_title_main}]time: [{color_text_main}]{time.strftime('%Y-%m-%d %H:%M:%S')}\
            "
        self._console.print(
            Panel.fit(
                Padding(welcome_text, (1, 7, 1, 0)),
                border_style="#00b894",
                style="#00b894",
                title="welcome to use gridview tool",
            ),
            justify="left",
        )

    def console(self):
        self.console_on = True
        pretty.install()
        cmd = None
        while self.console_on:
            tim.print(self.mode.get_status(), end="")
            cmd = input()
            try:
                cmd = cmd.strip()
                if not cmd:
                    continue
                cmd_list = cmd.split(" ")
                if "" in cmd_list:
                    cmd_list.remove("")
                if len(cmd_list) == 1 and cmd_list[0] in self.commands:
                    self(cmd)
                elif cmd_list[0] in self._mode_pool.keys():
                    self._mode_pool[cmd_list[0]](' '.join(cmd_list[1:]))
                else:
                    self.mode(cmd)
            except:
                pass