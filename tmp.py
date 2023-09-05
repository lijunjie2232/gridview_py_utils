from GridviewAccount import GridviewAccount
from GridviewFile import GridviewFile

if __name__ == '__main__':
    account = GridviewAccount(
        username="lijunjie",
    )
    filemanager = account.getGridviewFileManager()
    gu = filemanager.getUploader(threadNum=1)
    gu.singleUpload(
        #"/data/fmy/detection_data/total_new.tar.gz",
        "./core.16965",
        "/public/home/lijunjie/test/",
        overwrite=True
    )
