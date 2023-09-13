import argparse
# import traceback
from rich.console import Console
from rich.panel import Panel
from rich.padding import Padding

class Commander:
    title = None
    # _upper_commander = None
    _console = Console()
    # _name = None
    
    def __init__(self, upper_commander=None, desc='Commander description', prog='Commander', name='Commander'):
        self._upper_commander = upper_commander
        self._name = name
        
        # 定义命令行解析器对象
        self.parser = argparse.ArgumentParser(
            prog=prog, 
            description=desc, 
            formatter_class=argparse.RawDescriptionHelpFormatter         
        )
        # # 添加子命令
        self.subparsers = self.parser.add_subparsers(help="commands:")
        
        parser = self.subparsers.add_parser("help", help="show help information")
        parser.set_defaults(func=self.help)
        # # 添加子命令
        # self.subparsers = self.parser.add_subparsers(help='test')
        # #################################################################
        # # 命令行参数
        # parser_a = self.subparsers.add_parser('test', help='test func')
        # parser_a.add_argument('-v', type=int, help='value')
        # # 设置默认函数
        # parser_a.set_defaults(func=self.test)
        # #################################################################

        # parser.add_argument("--fetch", action="store_true", default=False)
        # parser.add_argument("--upload", action="store_true", default=False)

        # parser.add_argument("--file", type=str, required=True)
        # parser.add_argument("--to", type=str, default="~/")
        # parser.add_argument("--overwrite", action="store_true", default=False)
        # parser.add_argument("--keep_stru", action="store_true", default=False)
        
    # def test(self, args):
    #     if hasattr(args, 'v'):
    #         print(args.v)
    
    def __call__(self, cmd_str):
        # print(cmd_str)
        cmd_list = cmd_str.split(' ')
        # print(cmd_list)
        if not cmd_list:
            return None
        args = self.parser.parse_args(args=cmd_list)
        try:
            args.func(args)
            return 0
        except Exception as e:
            # print(traceback.print_exc())
            self.help()
            return e
        
    def help(self):
        self._console.print(
            Panel.fit(
                Padding("\n" + self.parser.format_help(), (0, 3)),
                border_style="#00b894",
                style="#74b9ff",
                title="%s HELP" % self._name.upper(),
            ),
            justify="left",
        )
        
    def get_status(self):
        return self.title

    
if __name__ == '__main__':
    c = Commander()
    c.help()
    # c("test -v 123")