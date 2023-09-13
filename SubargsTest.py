import argparse


class SubargsTest:
    def __init__(self):
        self.parser = argparse.ArgumentParser(prog="PROG")
        subparsers = self.parser.add_subparsers(help="sub-command help")
        # 添加子命令 add
        parser_a = subparsers.add_parser("add", help="add help")
        parser_a.add_argument("-x", "--x", "-X", type=int, help="x value")
        parser_a.add_argument("-y", type=int, help="y value")
        # 设置默认函数
        parser_a.set_defaults(func=self.add)

        parser_s = subparsers.add_parser("sub", help="sub help")
        parser_s.add_argument("-x", type=int, help="x value")
        parser_s.add_argument("-y", type=int, help="y value")
        parser_s.set_defaults(func=self.sub)

        parser_s = subparsers.add_parser("sub", help="sub help")
        parser_s.set_defaults(func=self.help)

        parser_h = subparsers.add_parser("help", help="sub help")
        parser_h.set_defaults(func=self.help)

    def add(self, args):
        r = args.x + args.y
        print("x + y = ", r)

    def sub(self, args):
        r = args.x - args.y
        print("x - y = ", r)

    def help(self, args):
        print("help func")

    def __call__(self):
        args = self.parser.parse_args()
        print(args)
        # 执行函数功能
        args.func(args)


if __name__ == "__main__":
    st = SubargsTest()
    st()
