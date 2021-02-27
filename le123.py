#!/usr/bin/env python3
# -*- coding:utf-8 -*- 
# author：yuanlang 
# creat_time: 2021/1/4 下午5:44
# file: le123.py


import frida, sys


def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


jscode = """
Java.perform(function () {
    console.log("ok")
    var OkHttpClient = Java.use("okhttp3.OkHttpClient");
    OkHttpClient.newCall.implementation = function (request) {
        var result = this.newCall(request);
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(request.toString());
        return result;
    }
    
    var SearchActivity = Java.use("com.elinkway.infinitemovies.ui.activity.SearchActivity");
})
"""

process = frida.get_usb_device().attach('com.le123.ysdq')
script = process.create_script(jscode)
script.on('message', on_message)
script.load()
sys.stdin.read()