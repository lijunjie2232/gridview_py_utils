import configparser
import os

def getConfig(confPath='./config/globalConfig.conf')->configparser:
    config = configparser.ConfigParser()
    if not os.path.isfile(confPath):
        print('user config file not found')
        config.write(open(confPath,'w'))
    config.read(confPath,encoding='utf-8')
    # for section in config.sections():
    #     for option in config.options(section):
    #         print('%s: %s'%(option, config.get(section,option)))
    return config

if __name__ == "__main__":
    config = configparser.ConfigParser()
    userConfigPath = './config/globalConfig.conf'
    assert os.path.isfile(userConfigPath), 'config file not found'
    config.read(userConfigPath,encoding='utf-8')
    # for section in config.sections():
    #     for option in config.options(section):
    #         print(section, option, config.get(section,option))
    print(config['global']['tmp_dir'])

