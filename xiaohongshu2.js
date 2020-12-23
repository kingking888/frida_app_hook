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
    var OkHttpClient = Java.use("okhttp3.OkHttpClient");
    OkHttpClient.newCall.implementation = function (request) {
        if(request.url().toString().indexOf("https://www.xiaohongshu.com/api/sns/v2/note/user") != -1){
            console.log(request);
            console.log(request.toString());
            console.log(request.headers().toString());
            console.log(request.body());
        }
        var result = this.newCall(request);
        return result;
    }
})


