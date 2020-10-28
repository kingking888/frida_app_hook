# !/usr/bin/env python2
# -*- coding: utf-8 -*-
# http://blog.sina.com.cn/s/blog_a3f364920102x2df.html

import sys
import frida
import codecs
import threading

global session

finished = threading.Event()

APP_JS = './js/app.js'
UI_JS = './js/ui.js'
HOOK_JS = './js/hook.js'


# 系统标准输出，支持grep
def outWrite(text):
    sys.stdout.write(text + '\n')


#带颜色打印输出
def colorPrint(color, s):
    return "%s[31;%dm%s%s[0m" % (chr(27), color, s , chr(27))


# 从JS接受信息
def on_message(message, data):
    if "payload" in message:
        payload = message['payload']
        if isinstance(payload, dict):
            deal_message(payload)
        else:
            print(payload)


# 处理JS调用后返回的信息
def deal_message(payload):
    # 基本信息输出
    if "mes" in payload:
        print(payload['mes'])

    # 安装app信息
    if "app" in payload:
        app = payload['app']
        lines = app.split('\n')
        for line in lines:
            if len(line):
                arr = line.split('\t')
                if len(arr) == 3:
                    outWrite('%-40s\t%-70s\t%-80s' % (arr[0], arr[1], arr[2]))

    if "ui" in payload:
        print(colorPrint(31, payload["ui"]))

    # 处理完成事件
    if "finished" in payload:
        finished.set()


# 获取设备信息
def get_usb_iphone():
    dManager = frida.get_device_manager();
    changed = threading.Event()

    def on_changed():
        changed.set()

    dManager.on('changed', on_changed)

    device = None
    while device is None:
        devices = [dev for dev in dManager.enumerate_devices() if dev.type == 'usb']
        if len(devices) == 0:
            print('Waiting for usb device...')
            changed.wait()
        else:
            device = devices[0]

    dManager.off('changed', on_changed)

    return device


# 加载JS文件脚本
def loadJSFile(session, filename):
    source = ''
    with codecs.open(filename, 'r', 'utf-8') as f:
        source = source + f.read()
    script = session.create_script(source)
    script.on('message', on_message)  # 调用JS后返回数据，Python做的回调
    script.load()  # 加载JS脚本
    return script


# 枚举运行进程
def listRunningProcess():
    device = get_usb_iphone()
    processes = device.enumerate_processes()
    processes.sort(key=lambda item: item.pid)
    outWrite('%-10s\t%s' % ('pid', 'name'))
    for process in processes:
        outWrite('%-10s\t%s' % (str(process.pid), process.name))


# 列出程序加载的模块
def listModulesOfProcess(session):
    script = session.create_script("""
        'use strict';
        rpc.exports.enumerateModules = function () {
        return Process.enumerateModulesSync();
        };"""
                                   )
    script.on("message", on_message)
    script.load()
    modules = script.exports.enumerate_modules()
    modules.sort(key=lambda item: item['base'])
    outWrite('%-40s\t%-10s\t%-10s\t%s' % ('module name', 'module base', 'module size', 'module path'))
    for module in modules:
        outWrite('%-40s\t%-10s\t%-10s\t%s' % (module['name'], module['base'], module['size'], module['path']))


def main():
    global session

    print("1. 设备连接信息")
    print("2. 枚举运行的进程")
    print("3. 枚举运行进程的信息")
    print("4. 枚举某个进程的所有模块信息")
    print("5. 显示界面ui")
    print("6. 动态hook")
    device = get_usb_iphone()
    while 1:
        num = int(input("\n输入逆向编码：\n"))
        if num == 1:
            # 设备连接信息
            print('设备信息:' + str(device))
        elif num == 2:
            # 枚举运行的进程
            listRunningProcess()
        elif num == 3:
            #枚举运行进程的信息
            session = device.attach(u'SpringBoard')  # 注入SpringBoard来获取一个session
            script = loadJSFile(session, APP_JS)  # 加载JS脚本
            # script.post({'cmd': 'urlinstalled'})  # 获取所有已安装应用信息
            script.post({'cmd': 'docinstalled'})  # 获取所有已安装应用信息
            finished.wait()
        elif num == 4:
            # 枚举某个进程的所有模块信息
            listModulesOfProcess(session)
        elif num == 5:
            # 显示界面ui
            session = device.attach(u'SekiroIOS')  # 注入SpringBoard来获取一个session
            script = loadJSFile(session, UI_JS)  # 加载JS脚本
            while True:
                line = sys.stdin.readline()
                if not line:
                    break
                script.post(line[:-1])
        elif num == 6:
            # 动态hook
            session = device.attach(u'SekiroIOS')  # 注入SpringBoard来获取一个session
            script = loadJSFile(session, HOOK_JS)  # 加载JS脚本
            sys.stdin.read()


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        if session:
            session.detatch()
        sys.exit()
    else:
        pass
    finally:
        pass
