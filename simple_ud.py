from gridview import GridviewAccount, GridviewFileManager, GridviewUploader, GridviewDownloader
import argparse
import os

# 1. 定义命令行解析器对象
parser = argparse.ArgumentParser(description="simple_ud")

# 2. 添加命令行参数
parser.add_argument("--fetch", action="store_true", default=False)
parser.add_argument("--upload", action="store_true", default=False)

parser.add_argument("--file", type=str, required=True)
parser.add_argument("--to", type=str, default="~/")
parser.add_argument("--overwrite", action="store_true", default=False)
parser.add_argument("--keep_stru", action="store_true", default=False)

if __name__ == "__main__":
    args = parser.parse_args()
    assert not (args.upload and args.fetch), "upload or download"
    assert args.file, "file in null"
    account = GridviewAccount()
    filemanager = GridviewFileManager(account)
    if args.upload:
        # gu = filemanager.getUploader(threadNum=1)
        gu = GridviewUploader(filemanager)
        gu.singleUpload(args.file, filemanager.pathFormater(args.to), overwrite=args.overwrite)
    elif args.fetch:
        # gd = filemanager.getDownloader()
        gd = GridviewDownloader(filemanager)
        file = filemanager.getFile(args.file)
        out_path = args.to
        out_name = None
        if out_path.endswith("/"):  # 认为传入参数为路径
            os.makedirs(out_path, exist_ok=True)
        else:  # 认为传入参数为文件位置
            out_path, out_name = os.path.split(out_path)
        gd.singleDownload(file, out_path, out_name, args.keep_stru)
