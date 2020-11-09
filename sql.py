#!/usr/bin/env python3
# -*- coding:utf-8 -*- 
# author：yuanlang 
# creat_time: 2020/11/6 下午2:03
# file: sql.py

import os

base = "/Users/yuanlang/work/db"
files = os.listdir(base)
for f in files:
    parent = base+"/" + f
    _files = os.listdir(parent)
    for _f in _files:
        print("source " + parent + "/" + _f + ";")
