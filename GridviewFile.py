import numpy as np
import pandas as pd


class GridviewFile:
    def __init__(self, data):
        if isinstance(data, pd.Series):
            data = data.values
        if isinstance(data, np.ndarray):
            assert data.shape[0] == 13
            self.owner, self.lastModifiedTime, self.fileKey, \
                self.permission, self.type, self.path, self.size, \
                self.isSymbolicLink, self.name, self.isShare, \
                self.permissionAction, self.isDirectory, \
                self.group = data
        elif isinstance(data, dict):
            keys = data.keys()
            self.attrs = [
                'owner',
                'lastModifiedTime',
                'fileKey',
                'permission',
                'type',
                'path',
                'size',
                'isSymbolicLink',
                'name',
                'isShare',
                'permissionAction',
                'isDirectory',
                'group'
            ]
            for attr in self.attrs:
                if attr in keys:
                    setattr(self, attr, data[attr])
        else:
            raise('init func accept only type: ndarray, dict or Series')
    def get(self, attr):
        assert hasattr(self, attr), '引数"%s"か定義することがありません'
        return getattr(self, attr)
