# Gridview Tools

## simple usage of Python:

### 1. login

```python
from GridviewAccount import GridviewAccount

account = GridviewAccount(
    username="xxx",
    password="xxx",
)
account.getGlobalInfo()
```

### 2. fileManager

```python
filemanager = account.getGridviewFileManager()
    filemanager.getFileManagerInitInfo()
)

test_file = filemanager.getFile("/public/home/lijunjie/test/461.2dab3c1f.js")
print(test_file.name, test_file.size, test_file.isDirectory)
```

### 3. download

```python
gd = filemanager.getDownloader()
gd.singleDownload(test_file)
```

### 4. upload

```python
gu = filemanager.getUploader()
gu.singleUpload(
    "./dataset.zip",
    "/public/home/lijunjie/test/",
    overwrite=False
)
```