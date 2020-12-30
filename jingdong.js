// js hook jingdong  v9.3.0
// frida -U -l jingdong.js  -f com.jingdong.app.mall --no-pause
// 这里学到了 相同变量名称用 _ 来调用
// 采用frida-inject 完成对某东函数调用，文件 jingdong_frida_rpc_http.js frida-inject***arm64两个。自提
// 启动方式 ./frida-inject-12.8.2-android-arm64 -n com.jingdong.app.mall -s agent.js --runtime=v8
Interceptor.attach(Module.findExportByName(null, "fopen"), {
    onEnter: function(args) {
//        console.log("fopen Interceptor attached onEnter...");
//        console.log("fopen param0>>>>>>>" +  args[0].readCString());
    },
    onLeave: function(args) {
//        console.log("fopen Interceptor attached onLeave...");
    }
})

var is_find_frida = false
Interceptor.attach(Module.findExportByName(null, "strstr"), {
    onEnter: function(args) {
//        console.log("strstr Interceptor attached onEnter...");
//        console.log("strstr param0>>>>>>>" +  args[0].readCString());
//        console.log("strstr param1>>>>>>>" +  args[1].readCString());
        if (args[1].readCString().indexOf("frida")){
            is_find_frida = true
        }else{
            is_find_frida = false
        }
    },
    onLeave: function(retval) {
//        console.log("strstr Interceptor attached onLeave..." + retval);
        if (is_find_frida){
            retval.replace(ptr("0x0"))
        }
    }
})

Java.perform(function () {

    // 日志
    var LogUtil=Java.use("com.jingdong.jdma.common.utils.LogUtil");
//    LogUtil.isDebug.overload().implementation=function(){
//        return true;
//    }
//    LogUtil.d.overload('java.lang.String', 'java.lang.String').implementation=function(arg1,arg2){
//        console.log(arg1 +">>>>" + arg2)
//    }
//    LogUtil.d.overload('java.lang.String').implementation=function(arg1){
//        console.log(arg1)
//    }

    // 底层用的的网络框架
    var OkHttpClient = Java.use("okhttp3.OkHttpClient");
    OkHttpClient.newCall.implementation = function (request) {
        var result = this.newCall(request);
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(request.toString());
        return result;
    }

    // 第三方整合网络框架
    var k = Java.use("com.jingdong.jdsdk.network.toolbox.k");
    k.b.overload('com.jingdong.jdsdk.network.toolbox.HttpSetting').implementation = function (HttpSetting) {
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(HttpSetting);
        console.log(HttpSetting.getUrl());
        var result = this.b(HttpSetting);
        return result;
    }
    var aaa = Java.use("com.jingdong.jdsdk.network.a");
    k.b.overload('com.jingdong.jdsdk.network.toolbox.HttpSetting','java.lang.String','java.lang.String').implementation = function (arg1,arg2,arg3) {
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(arg2+"::::"+arg3)
        console.log(aaa.RW().Sd().getClass().getName())
        var result = this.b(arg1,arg2,arg3);
    }

    // 内部网络框架整合
    var HttpGroupAdapter = Java.use("com.jingdong.jdsdk.network.toolbox.HttpGroupAdapter");
    HttpGroupAdapter.add.implementation = function (httpSetting) {
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(httpSetting.getJsonParamsString());
        console.log(httpSetting.getUrl());
        var result = this.add(httpSetting);
        return result;
    }
    var HttpGroupAdapter = Java.use("com.jingdong.jdsdk.network.toolbox.HttpGroupAdapter");
    HttpGroupAdapter.execute.implementation = function (httpSetting) {
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(httpSetting);
        var result = this.execute(httpSetting);
        return result;
    }

//    # 开始查找好友
//    var k = Java.use("com.jd.lib.jdfriend.view.activity.k");
//    k.$init.overload('com.jd.lib.jdfriend.view.activity.ContactsFriendActivity').implementation = function (contacts) {
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        console.log(contacts);
//        var result = this.$init(contacts);
//        return result;
//    }
    var k = Java.use("com.jd.lib.jdfriend.view.activity.k");
    k.$init.overload('com.jd.lib.jdfriend.view.activity.ContactsFriendActivity').implementation = function (contacts) {
        var result = this.$init(contacts);
        return result;
    }

    k.call.overload('java.lang.Object').implementation = function (contacts) {
        console.log("上传拉去通讯录");
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(contacts);
        var result = this.call(contacts);
        return result;
    }
    var ContactsFriendParam = Java.use("com.jd.lib.jdfriend.model.param.ContactsFriendParam");
    ContactsFriendParam.getPhoneNums.overload().implementation = function () {
        console.log("getPhoneNums");
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var result = this.getPhoneNums();
        return result;
    }

    var HttpSetting = Java.use("com.jingdong.jdsdk.network.toolbox.HttpSetting");
    HttpSetting.getMd5.overload().implementation = function () {
        console.log("jDRequest.setCacheKey(httpSetting.getMd5()); >>>>getMd5");
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var result = this.getMd5();
        console.log(this.getUrl());
        console.log(result);
        return result;
    }
    HttpSetting.setUrl.overload("java.lang.String").implementation = function (url) {
        console.log("setUrl");
        console.log(url)
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var result = this.setUrl(url);
    }


    var AnonymousClass3 = Java.use("com.jingdong.common.network.JDNetworkDependencyFactory$3");
    AnonymousClass3.signature.overload('android.content.Context', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (arg1,arg2,arg3,arg4,arg5,arg6) {
        console.log("接口的sign 加密");
        console.log("param2: "+arg2);
        console.log("param3: "+arg3);
        console.log("param4: "+arg4);
        console.log("param5: "+arg5);
        console.log("param6: "+arg6);
        var result = this.signature(arg1,arg2,arg3,arg4,arg5,arg6);
        console.log(result);
        return result;
    }
})

//  手机号加密 PersonalDesCommonUtils.commonEncrypt(str, 2); {"enc":2,"phoneNums":"V9z4yyiL9d22gNpXaJebKA==","plugin_version":90300}
//  手机参数读取 http://api.m.jd.com/client.action?functionId=fetchFriendsByMobileNums&clientVersion=9.3.0&build=85799&client=android&d_brand=Huawei&d_model=Nexus6P&osVersion=6.0.1&screen=2392*1440&partner=jlhdqj07&aid=2c073570754fc654&oaid=&eid=eidA041d81231cs8RSD9dgg5SumgLHsixDjoBkUg/uxX7zrn6ZCG691b3mu03EgXjsXMZWV0pm4W/r/xGqyUzD8UCWAJi7YmhSzy8pbgwkqpSTcNCTdF&sdkVersion=23&lang=zh_CN&uuid=867686021141286-009acdb84517&area=1_72_55652_0&networkType=wifi&wifiBssid=a783446d32cd1f06b9f7c456f3e32de9&uts=zrHR4oLv7fO8bj08KaWkuJrGiAm%2FG6al3p01S3QPkHjEe70KB7DMBc8FOxFBZ%2FdriHT21FwFBB%2Fn8liBRMhVTQj0YijJyfnszm32Ql%2F%2FSJpegfvvb9QLeICKxgEhY%2B6cMbm2iFb8208AjQqro84eCjuI1CILL946
//             http://api.m.jd.com/client.action?functionId=fetchFriendsByMobileNums&clientVersion=9.3.0&build=85799&client=android&d_brand=Huawei&d_model=Nexus6P&osVersion=6.0.1&screen=2392*1440&partner=jlhdqj07&aid=2c073570754fc654&oaid=&eid=eidA041d81231cs8RSD9dgg5SumgLHsixDjoBkUg/uxX7zrn6ZCG691b3mu03EgXjsXMZWV0pm4W/r/xGqyUzD8UCWAJi7YmhSzy8pbgwkqpSTcNCTdF&sdkVersion=23&lang=zh_CN&uuid=867686021141286-009acdb84517&area=1_72_55652_0&networkType=wifi&wifiBssid=2f1bae9e13e2b099302282278c64e22e&uts=zrHR4oLv7fO8bj08KaWkuJrGiAm%2FG6al3p01S3QPkHjEe70KB7DMBc8FOxFBZ%2FdriHT21FwFBB%2Fn8liBRMhVTQj0YijJyfnszm32Ql%2F%2FSJpegfvvb9QLeICKxgEhY%2B6cMbm2iFb8208AjQqro84eCjuI1CILL946

// com.jingdong.jdsdk.network.toolbox.k sign生成  String signature = a.RW().Sd().signature(a.RW().getApplicationContext(), functionId, str, str2, property, versionName);
// 京东 sign JDNetworkDependencyFactory
//    public String signature(Context context, String str, String str2, String str3, String str4, String str5) {
//         return BitmapkitUtils.getSignFromJni(context, str, str2, str3, str4, str5);
//    }