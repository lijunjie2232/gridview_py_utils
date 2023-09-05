from GridviewAccount import GridviewAccount
from GridviewFile import GridviewFile
import argparse
import os

# 1. 定义命令行解析器对象
parser = argparse.ArgumentParser(description='Demo of argparse')
 
# 2. 添加命令行参数
parser.add_argument('-u', action='store_true', default=False)
parser.add_argument('-d', action='store_true', default=False)

parser.add_argument('--file', type=str, required=True)
parser.add_argument('--to', type=str, required=True, default='~/')
parser.add_argument('--overwrite', action='store_true', default=False)
parser.add_argument('--keep_stru', action='store_true', default=False)

if __name__ == '__main__':
    args = parser.parse_args()
    assert not (args.u and args.d), 'upload or download'
    assert args.file, 'file in null'
    account = GridviewAccount(
        username="lijunjie",
    )
    filemanager = account.getGridviewFileManager()
    if args.u:
        gu = filemanager.getUploader(threadNum=1)
        gu.singleUpload(
            args.file,
            filemanager.pathFormater(args.to),
            overwrite=True
        )
    elif args.d:
        gd = filemanager.getDownloader()
        file = filemanager.getFile(args.file)
        out_path =  args.to
        out_name = None
        if out_path.endswith('/'):# 认为传入参数为路径
            os.makedirs(out_path, exist_ok=True)
        else:# 认为传入参数为文件位置
            out_path, out_name = os.path.split(out_path)
        gd.singleDownload(
            file,
            out_path,
            out_name,
            args.keep_stru
        )
        
        

