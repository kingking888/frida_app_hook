// 航旅纵横 6.0.6 加密等位到 UmeJni.sub_0515
// frida -U -l hangluzhonghen.js -f com.umetrip.android.msky.app --no-pause

function javaHook(){
    Java.perform(function () {
        var XlogUtil=Java.use("com.umetrip.android.msky.lib_xlog.XlogUtil");
        XlogUtil.a.overload('java.lang.String', 'int', 'java.lang.String', '[Ljava.lang.Object;').implementation=function(arg1,arg2,arg3,arg4){
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            console.log(arg1)
            console.log(arg2)
            console.log(arg3)
            this.a(arg1,arg2,arg3,arg4)
        }
        send("Success!")
        var UmeRequestManager = Java.use('com.umetrip.android.umehttp.utils.UmeRequestManager');
        UmeRequestManager.a.overload('android.app.Application', 'java.lang.String', 'com.umetrip.android.umehttp.listener.ILoadingProvider', 'com.umetrip.android.umehttp.listener.IErrorHandler').implementation = function (arg1,arg2,arg3,arg4) {
            send("Hook show Start..  ffff.");
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return this.a(arg1,arg2,arg3,arg4);
        }
        var RequestBodyBuilder = Java.use('com.umetrip.android.umehttp.RequestBodyBuilder');
        RequestBodyBuilder.a.overload('java.lang.Object', 'java.lang.String', 'java.lang.String', 'java.lang.String').implementation = function (arg1,arg2,arg3,arg4) {
            send("Hook onCreate Start..  ffff.");
            var info = this.f.value.getPackageManager().getPackageInfo("com.umetrip.android.msky.app",0x00000040).signatures.value
            console.log(info[0].toCharsString())
            return this.a(arg1,arg2,arg3,arg4);
        }

    });
}
javaHook();
function soHook(){
    var base_address=Module.findBaseAddress('libumejni.so');
    if (base_address!=null){
        console.log("soHook start");
        var str;
        Java.perform(function () {
            str = Java.use("java.lang.String");
        });
        Interceptor.attach(base_address.add(0xc445), {
            onEnter: function (args) {
                console.log("hook onEnter")
                // console.log("param1>>>>>>>" +  args[0].readCString());
                // console.log("param1>>>>>>>" +  Memory.readUtf16String(args[0]));
                // readAnsiString
            },
            onLeave: function (retval) {
                console.log("hook onLeave")
            }
        });
        Interceptor.attach(base_address.add(0xc534), {
            onEnter: function (args) {
                console.log("hook 0xc534 onEnter")
                // console.log("param1>>>>>>>" +  args[0].readCString());
                // console.log("param1>>>>>>>" +  Memory.readUtf16String(args[0]));
                // readAnsiString
            },
            onLeave: function (retval) {
                console.log("hook 0xc534 onLeave")
            }
        });
    }
}
// soHook();
/*
[RegisterNatives] java_class: com.umetrip.android.umehttp.security.UmeJni name: sub_0515 sig: (Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/String; fnPtr: 0x9df52445 module_name: libumejni.so module_base: 0x9df46000 offset: 0xc445
[RegisterNatives] java_class: com.umetrip.android.umehttp.security.UmeJni name: sub_0516 sig: (Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/String; fnPtr: 0x9df5243d module_name: libumejni.so module_base: 0x9df46000 offset: 0xc43d
[RegisterNatives] java_class: com.umetrip.android.umehttp.security.UmeJni name: sub_0517 sig: (Ljava/lang/Object;Ljava/lang/String;)Ljava/lang/String; fnPtr: 0x9df5c331 module_name: libumejni.so module_base: 0x9df46000 offset: 0x16331
*/
