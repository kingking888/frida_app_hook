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
rpc.exports = {
    loadurl: function (url) {
        return new Promise(function(resolve, reject) {
            console.log("123")
            Java.perform(function () {
                var OkHttpClient=Java.use("okhttp3.OkHttpClient");
                var Builder=Java.use("okhttp3.Request$Builder");
                var client = OkHttpClient.$new()
                var request = Builder.$new().get().url(url).build()
                var response = client.newCall(request).execute()
                resolve(response.body().string())
            });
        });
    }
};
"""

device = frida.get_device_manager().enumerate_devices()[-1]
pid = device.spawn(["com.xingin.xhs"])
session = device.attach(pid)
print("[*] Attach Application id:",pid)
device.resume(pid)
print("[*] Application onResume")
script = session.create_script(jscode)
script.on('message', on_message)
print('[*] Running CTF')
script.load()

command = ""
while 1 == 1:
    command = input("Enter command:\n1: Exit\n2: Call secret function\nchoice:")
    if command == "1":
        break
    elif command == "2":
        url = 'https://www.xiaohongshu.com/api/sns/v2/note/user/5bbdfc68a9baac0001c1098f?page=1&page_size=10&sub_tag_id=&platform=Android&deviceId=e45ea788-06f6-3d2f-bf6c-03f68152c851&device_fingerprint=2020113017502087b8779cc6128a65eebd7ad984d6994801bf8ba1b5e84b9a&device_fingerprint1=2020113017502087b8779cc6128a65eebd7ad984d6994801bf8ba1b5e84b9a&versionName=5.26.2&channel=GooglePlay&sid=session.1608285820762256226298&lang=zh-Hans&t=1608694428&sign=90db8f0e423a4fcae2d75be686284fdb';
        body = script.exports.loadurl(url)
        print(body)




