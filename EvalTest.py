import traceback
import argparse
import sys

class EvalTest:
    def a(self, x):
        print(x)
        
    def b(self, x, test=None):
        eval('self.a(%s)'%x)
    
    def call_func(self, func_name:str, *args, **kwargs):
        print(args)
        eval(func_name)(args, kwargs)

if __name__ == '__main__':
    # 1. 定义命令行解析器对象
    parser = argparse.ArgumentParser(description="Demo of argparse")

    # 2. 添加命令行参数
    parser.add_argument("--fetch", action="store_true", default=False)
    parser.add_argument("--upload", action="store_true", default=False)

    parser.add_argument("--file", type=str, required=True)
    parser.add_argument("--to", type=str, default="~/")
    parser.add_argument("--overwrite", action="store_true", default=False)
    parser.add_argument("--keep_stru", action="store_true", default=False)
    
    print(sys.argv[1:])
    args_list = []
    args = parser.parse_known_args(args=None, namespace=None)
    print(args)
    # t = EvalTest()
    # t.b(11)
    # try:
    #     t.call_func('self.'+'b', 1, test=1)
    # except Exception as e:
    #     # print(traceback.print_exc())
    #     print('error occurs')