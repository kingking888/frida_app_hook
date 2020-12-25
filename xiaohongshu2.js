// 小红书 v5.26.2
// frida -U -l xiaohongshu2.js -f com.xingin.xhs --no-pause
function abc(){
    var base_address=Module.findBaseAddress('libshield.so')
    if (base_address!=null){
        console.log("param:ok");
        var str;
        var signature;
        Java.perform(function () {
            str = Java.use("java.lang.String");
        });
        Interceptor.attach(base_address.add(0x0A4B5), {
            onEnter: function (args) {

                console.log("hook success");
//                // 第一个参数是jnievm  第二个是java Signature  第三个是Signature的hashcode方法
////                console.log("param1>>>>>>>" +  args[1].readCString());
//                console.log("param1>>>>>>>" +  args[1].toInt32());
//                console.log("param2>>>>>>>" +  args[2].toInt32());
//                const num = Java.vm.getEnv().CallIntMethodV(args[1],args[2])
//                console.log(num)
                // console.log("param1>>>>>>>" +  Memory.readUtf16String(args[0]));
                // readAnsiString

//                var s3 = Java.cast(args[3], str);
//                var s5 = Java.cast(args[5], str);
//                console.log("param2>>>>>>>" +  args[2].toInt32());
//                console.log("param3>>>>>>>" +  s3);
//                const length = Java.vm.getEnv().getArrayLength(args[4]);
//                var array=[];
//                for(var i=0;i<length;i++){
//                    var obj=Java.vm.getEnv().getObjectArrayElement (args[4],i)
//                    var result=Java.vm.getEnv().stringFromJni(obj)
//                    array.push(result);
//                }
//                console.log("param4>>>>>>>" + JSON.stringify(array));
//                console.log("param5>>>>>>>" +  s5);
            },
            onLeave: function (retval) {
                console.log("return>>>>>>>" +  retval.toInt32());
            }
        });
    }
}

//abc();
Java.perform(function () {

//    小红书hook
//    var OkHttpClient = Java.use("okhttp3.OkHttpClient");
//    OkHttpClient.newCall.implementation = function (request) {
//        if(request.url().toString().indexOf("/api/sns/v3/user/") != -1){
//            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//            console.log(request);
//            console.log(request.toString());
//            console.log(request.headers().toString());
//            console.log(request.body());
//        }
//        var result = this.newCall(request);
//        return result;
//    }

//    var ProfileDataProvider = Java.use("com.xingin.profile.newprofile.viewmodel.ProfileDataProvider");
//    ProfileDataProvider.a.overload('java.lang.String').implementation = function (uid) {
//        console.log(uid)
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        var result = this.b(uid);
//        return result;
//    }

//    参数拼装
//    var a = Java.use("com.xingin.shield.http.a");
//    a.a.overload('java.util.Map').implementation = function (map) {
//        var result = this.a(map)
//        return result
//    }
//    var StringBuilder = Java.use("java.lang.StringBuilder");
//    StringBuilder.toString.overload().implementation = function () {
//        var result = this.toString()
//        if (result.indexOf("note/user")!=-1){
//            console.log(result)
//        }
//        return result
//    }

//    获取参数
    var RedHttpInterceptor = Java.use("com.xingin.shield.http.RedHttpInterceptor");
    RedHttpInterceptor.sessionId.implementation = function () {
        var result = this.sessionId();
        console.log("sessionId="+result)
        return result;
    }
    RedHttpInterceptor.deviceId.implementation = function () {
        var result = this.deviceId();
        console.log("deviceId="+result)
        return result;
    }
    RedHttpInterceptor.userAgent.implementation = function () {
        var result = this.userAgent();
        console.log("userAgent="+result)
        return result;
    }
    var String = Java.use("java.lang.String");
    RedHttpInterceptor.getBytesOfParams.overload('okhttp3.Request').implementation = function (request) {
        var result = this.getBytesOfParams(request);
        var result2 = String.$new(result)
        console.log("getBytesOfParams="+result2)
        return result;
    }

    // 加密sign打印
//    var i = Java.use("com.xingin.skynet.i");
//    i.a.overload('java.util.Map').implementation = function (arg1) {
//        var result = "";
//        var keyset = arg1.keySet();
//        var it = keyset.iterator();
//        while(it.hasNext()){
//            var keystr = it.next().toString();
//            var valuestr = arg1.get(keystr).toString();
//            var map= keystr+'='+valuestr+'&';
//            result+=map
//        }
//        send(result);
//        var result = this.a(arg1);
//        send("sing:"+result);
//        return result;
//    }
//    var ac = Java.use("com.xingin.common.util.ac");
//    ac.a.overload('java.lang.String','java.lang.String').implementation = function (arg1,arg2) {
//        console.log(arg1)
//        console.log(arg2)
//        var result = this.a(arg1,arg2);
//        console.log(result)
//        return result
//    }

        // 上传手机号加密
//    var w = Java.use("com.xingin.common.util.w");
//    w.a.overload('java.lang.String','java.lang.String').implementation = function (arg1, arg2) {
//        console.log(arg1)
//        console.log(arg2)
//        var result = this.a(arg1,arg2);
//        return result;
//    }
})

