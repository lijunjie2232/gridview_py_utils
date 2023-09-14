# Gridview Utils
python api utils for ningbo server

## simple usage of Python programming:

### 1. login

```python
from gridview.GridviewAccount import GridviewAccount

account = GridviewAccount(
    username="xxx",
    password="xxx",
)
account.getGlobalInfo()
```

### 2. fileManager

```python
from gridview.GridviewFileManager import GridviewFileManager
filemanager = GridviewFileManager(account)
print(filemanager.getFileManagerInitInfo())


test_file = filemanager.getFile("/public/home/user/test/461.2dab3c1f.js")
print(test_file.name, test_file.size, test_file.isDirectory)
```

### 3. download

```python
from gridview.GridviewUploader import GridviewUploader

gd = GridviewDownloader(filemanager)
gd.singleDownload(test_file)
```

### 4. upload

```python
from gridview.GridviewUploader import GridviewUploader

gu = GridviewUploader(filemanager)
gu.singleUpload(
    "./dataset.zip",
    "/public/home/user/test/",
    overwrite=False
)
```

## simple usage of CLI:
```shell
# run such command on shell with python env:
$ python ./main.py

# or just run command after install this project as python moudle:
$ gridview
# then type help for help
$ help
```

### tow mode for cli:
- gridview
    - info for cluster
    - つづく

- filemanager
    - download
    - upload
    - つづく

### !!! visit website [https://www.nerdfonts.com/font-downloads](https://www.nerdfonts.com/font-downloads) to download and configure one of nerd font for terminal if some characters could not be displayed correctly under CLI.

## TO DO

+ [x] command handler
+ [ ] account keep alive
+ [ ] file operation
+ [ ] cluster and contianer monitor
+ [ ] container ssh(socket)
+ [ ] tui


