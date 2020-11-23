#!/usr/bin/env python3
# -*- coding:utf-8 -*- 
# author：yuanlang 
# creat_time: 2020/11/14 下午3:07
# file: xiaohongshu.py


# frida 主动hook so。提供rpc服务
import frida, sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


jscode = """
function soHook(){
    rpc.exports = {
        add: function () {
            return new Promise(function(resolve, reject) {
                console.log('init2')
                Java.perform(function () {
                    var a=Java.use("com.xingin.register.d.a");
                    a.$new(null,null).c()
                });
                console.log('init2 done')
            });
        }
    };
}
soHook();
"""

process = frida.get_usb_device().attach('com.xingin.xhs')
script = process.create_script(jscode)
script.on('message', on_message)
script.load()
process.detach()
command = ""
while 1 == 1:
    command = input("Enter command:\n1: Exit\n2: Call secret function\nchoice:")
    if command == "1":
        break
    elif command == "2":
        script.exports.add()




