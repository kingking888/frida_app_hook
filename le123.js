//
//Interceptor.attach(Module.findExportByName(null, "fopen"), {
//    onEnter: function(args) {
////        console.log("fopen Interceptor attached onEnter...");
////        console.log("fopen param0>>>>>>>" +  args[0].readCString());
//    },
//    onLeave: function(args) {
////        console.log("fopen Interceptor attached onLeave...");
//    }
//})
//
//var is_find_frida = false
//Interceptor.attach(Module.findExportByName(null, "strstr"), {
//    onEnter: function(args) {
////        console.log("strstr Interceptor attached onEnter...");
//        console.log("strstr param0>>>>>>>" +  args[0].readCString());
//        console.log("strstr param1>>>>>>>" +  args[1].readCString());
//        if (args[1].readCString() !=null && args[1].readCString().indexOf("frida")){
//            is_find_frida = true
//        }else{
//            is_find_frida = false
//        }
//    },
//    onLeave: function(retval) {
////        console.log("strstr Interceptor attached onLeave..." + retval);
//        if (is_find_frida){
//            retval.replace(ptr("0x0"))
//        }
//    }
//})

Java.perform(function () {

var OkHttpClient = Java.use("okhttp3.OkHttpClient");
OkHttpClient.newCall.implementation = function (request) {
    var result = this.newCall(request);
    console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
    console.log(request.toString());
    return result;
}

})
