import time
import keyboard
from rich import pretty
# from rich.console import Console
from pytermgui import tim
from GridviewAccount import GridviewAccount
# from GridviewFile import GridviewFile

welcome_str = """
**********************************
*  welcome to use gridview tool  *
**********************************
- host: %s
- username: %s
- home: %s
- role: %s
- time: %s

**********************************
*              tips              *
**********************************
- type help or ? to get help info
- type exits
"""

help_str = """
gridview_tool version: gridview_tool/0.0.3
Usage: 
"""
type_front = "[78 @34;52;111] %s [inverse] %s@%s [/ #66d78c] $ "

file_front = "[78 @34;52;111] %s@%s [inverse] %s [78 @34;52;111]"

if __name__ == '__main__':
    pretty.install()
    # account = GridviewAccount()
    # filemanager = account.getGridviewFileManager()
    # tim.print(
    #     welcome_str%(
    #         account.getManagerServerIp(),
    #         account.getUserName(),
    #         account.getUserHome(),
    #         account.getUserRole(),
    #         time.ctime()
    #     )
    # )
    current_path = ""
    modle = None
    while True:
        tim.print(
            type_front%(
                time.ctime(),
                'lijunjie',
                '0.0.0.0'
                # account.getUserName(),
                # account.getManagerServerIp(),
            ),
            end=""
        )
        # cmd_str = input()
        print('123321', end='')
        time.sleep(2)
        print('\b')

        
        
        
        