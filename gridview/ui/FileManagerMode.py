from gridview.modules.GridviewDownloader import GridviewDownloader
from gridview.modules.GridviewUploader import GridviewUploader
from .Commander import Commander
import time
import os


class FileManagerMode(Commander):
    def __init__(self, upper_commander=None, desc="", prog="", name=""):
        super().__init__(
            upper_commander=upper_commander, desc=desc, prog=prog, name=name
        )
        self._account = self._upper_commander.get_account()
        self._file_manager = self._upper_commander.get_filemanager()
        self.title = "[78 @34;52;111]FileMode %s [inverse] %s@%s [/ 78 @34;52;111]   %s [/ 34;52;111][/ #66d78c]\n❯ $ [/]"

        # self.subparsers = self.parser.add_subparsers(help='help')

        # parser = self.subparsers.add_parser("help", help="show help information")
        # parser.set_defaults(func=self.help)

        parser = self.subparsers.add_parser(
            "fetch",
            help="fetch file from remote, dir not support yet, please pack it first",
        )
        parser.add_argument(
            "-r", "--remote-file", type=str, required=True, help="path of remote file"
        )
        parser.add_argument(
            "-d", "--local-dir", type=str, help="specify dir to receive file"
        )
        parser.add_argument("-l", "--local-file", type=str, help="specify file path or name")
        parser.add_argument(
            "-k", "--keep-dir-structure", action="store_true", default=False, help="keep directory structure as remote"
        )
        parser.set_defaults(func=self.download)

        parser = self.subparsers.add_parser(
            "upload",
            help="upload file to remote, dir not supported yet, rename not supported",
        )
        parser.add_argument("-l", "--local-file", required=True, type=str, help="local file path")
        parser.add_argument(
            "-d",
            "--remote-dir",
            required=True,
            type=str,
            help="specify remote dir path to upload file, should to be existed",
        )
        parser.add_argument("-o", "--overwrite", action="store_true", default=False)
        parser.set_defaults(func=self.upload)
        

    def get_status(self):
        return self.title % (
            time.strftime("%Y-%m-%d %H:%M:%S"),
            self._account.getUserName(),
            self._account.getManagerServerIp(),
            self._file_manager.getCurrentPath(),
        )

    def download(self, args):
        print('fetch')
        gd = GridviewDownloader(self._file_manager)
        file = self._file_manager.getFile(args.remote_file)
        out_path = None
        out_name = None
        if args.local_file:
            out_path, out_name = os.path.split(args.local_file)
            if args.keep_dir_structure:
                print(
                    "will not keep structure after specified output path instead of output directory"
                )
                args.keep_dir_structur = False
        else:
            assert args.local_dir, "one of arguments -d or -l should be specified"
            out_path = args.local_dir
        gd.singleDownload(file, out_path, out_name, args.keep_dir_structure)

    def upload(self, args):
        gu = GridviewUploader(self._file_manager)
        gu.singleUpload(args.local_file, self._file_manager.pathFormater(args.remote_dir), overwrite=args.overwrite)
