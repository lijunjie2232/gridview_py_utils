from setuptools import setup
from gridview import info
setup(
    name='gridview',
    version=info.__version__,
    py_modules=['gridview'],
    entry_points={
        'console_scripts':[
            'gridview = main:gridview'
        ]
    }
)