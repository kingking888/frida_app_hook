// 小红书 6.68.1.6d8d24a
// frida -U -l xiaohongshu.js -f com.xingin.xhs --no-pause
// frida -U -l xiaohongshu_export.js  -f com.xingin.xhs --no-pause
Java.perform(function () {

    var aj=Java.use("com.xingin.utils.core.aj");
//    aj.a.overload('java.lang.String','java.lang.String').implementation=function(arg1,arg2){
//        console.log("lcom.xingin.utils.core.aj a");
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        console.log(arg1)
//        console.log(arg2)
//        var result= this.a(arg1,arg2)
//        console.log(result)
//        return result
//    }

    var c=Java.use("com.xingin.login.utils.c");
    c.a.overload('java.lang.String','java.lang.String').implementation=function(arg1,arg2){
        console.log(arg1)
        console.log(arg2)
        var result= this.a(arg1,arg2)
        return result
    }
    c.a.overload('java.lang.String').implementation=function(arg1){
        console.log(arg1)
        var result= this.a(arg1)
        return result
    }

    var lang_b=Java.use("com.xingin.login.g.b");
    var w=Java.use("com.uber.autodispose.w");
    var cc=Java.use("com.uber.autodispose.c");
    var ff=Java.use("com.xingin.register.d.a$f");
    var FindFriendInXhsPresenter=Java.use("com.xingin.register.d.a");
    ff.a.overload('java.lang.Object').implementation=function(){
        console.log(" ------   C0651f     ------")
    }

    var AuthWebViewClient=Java.use("com.sina.weibo.sdk.web.client.AuthWebViewClient");
    AuthWebViewClient.needOverLoad.overload('android.webkit.WebView', 'java.lang.String').implementation=function(arg1,arg2){
        console.log(" ------   needOverLoad     ------")
//        lang_b.d("weibo").a(cc.a(w.b_.value)).a(ff.$new(FindFriendInXhsPresenter.$new(null,null)))
        console.log(arg2)
        return this.needOverLoad(arg1,arg2)
    }
    AuthWebViewClient.onPageFinished.overload('android.webkit.WebView', 'java.lang.String').implementation=function(arg1,arg2){
        console.log(" ------   onPageFinished     ------")
        console.log(arg2)
        return this.onPageFinished(arg1,arg2)
    }

       // ****************************************** 获取拦截器的
//    var OkHttpClient=Java.use("okhttp3.OkHttpClient");
//    OkHttpClient.interceptors.overload().implementation=function(){
//        console.log(" ------   interceptors     ------")
//        var ints = this.interceptors()
//        for (var i=0;i<ints.size();i++){
//            console.log(ints.get(i))
//        }
//        return ints;
//    }
//    OkHttpClient.networkInterceptors.overload().implementation=function(){
//        console.log(" ------   networkInterceptors     ------")
//        var ints = this.networkInterceptors()
//        for (var i=0;i<ints.size();i++){
//            console.log(ints.get(i))
//        }
//        return ints;
//    }

//    var Builder=Java.use("okhttp3.Request$Builder");
//    Builder.addHeader.overload('java.lang.String', 'java.lang.String').implementation=function(arg1,arg2){
//        if(arg1 != "User-Agent"){
//            console.log(arg1)
//            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        }
////        console.log(arg2)
//        return this.addHeader(arg1,arg2);
//    }


//    var XhsHttpInterceptor=Java.use("com.xingin.shield.http.XhsHttpInterceptor");
//    XhsHttpInterceptor.intercept.overload('okhttp3.Interceptor$Chain').implementation=function(chain){
//        var request = chain.request()
//
//        return this.intercept(arg1);
//    }
//

    var wc=Java.use("com.xingin.login.manager.UploadContactService$c");
    wc.accept.overload('java.lang.Object').implementation=function(arg1){
        console.log(" ------   上传朋友    ------")
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(arg1)
        return this.accept(arg1)
    }

    var ab=Java.use("com.xingin.utils.core.ab");
    ab.a.overload('java.lang.String', 'int').implementation=function(arg1,arg2){
        console.log(" ------   上传朋友2    ------")
        console.log(arg1)
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var result =  this.a(arg1,arg2)
        console.log(result)
        return 0
    }

    var b=Java.use("com.xingin.login.g.b");
    b.d.overload('java.lang.String').implementation=function(arg1){
        console.log(" ------   下拉朋友     ------")
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(arg1)
        return this.d(arg1)
    }

    var f=Java.use("com.xingin.register.d.a$f");
    f.a.overload('java.lang.Object').implementation=function(arg1){
        console.log(" ------   回调接口了     ------")
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        return this.a(arg1)
    }

    var f=Java.use("com.xingin.utils.core.j");
    f.a.overload('android.content.Context').implementation=function(arg1){
        console.log(" ------   收集通讯录    ------")
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        return this.a(arg1)
    }

    var hook=Java.use("com.xingin.register.d.a");
    hook.$init.overload('com.xingin.login.j.a', 'com.xingin.register.d.c').implementation=function(arg1, arg2){
        console.log(" ------   $init    ------")
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        return this.$init(arg1,arg2)
    }

    var a=Java.use("com.xingin.skynet.utils.a");
    a.a.overload('okhttp3.Request', 'com.xingin.skynet.b.a', 'boolean').implementation=function(arg1,arg2,arg3){
        console.log("request >>>>>: "+arg1.url())
        var result= this.a(arg1,arg2,arg3)
        return result
    }

    var _b=Java.use("com.xingin.login.j.b");
    _b.a.overload('com.xingin.xhstheme.arch.a').implementation=function(arg1){
        console.log("request >>>>>: service ")
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var result= this.a(arg1)
        return result
    }

    var $a=Java.use("com.jakewharton.rxbinding3.d.c$a");
    $a.onClick.overload('android.view.View').implementation=function(arg1){
        console.log("request >>>>>: android.view.View ")
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var result= this.onClick(arg1)
    }

    var PhoneFriendRepo=Java.use("com.xingin.matrix.v2.profile.phonefriendv2.repo.a");
    PhoneFriendRepo.a.overload('com.xingin.matrix.v2.profile.phonefriendv2.repo.a', 'java.lang.String', 'boolean', 'boolean', 'int').implementation=function(arg1,arg2,arg3,arg4,arg5){
        console.log("request >>>>>: android.view.View ")
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var result= this.a(arg1,arg2,arg3,arg4,arg5)
        return result
    }

    var mb12=Java.use("com.xingin.matrix.v2.profile.phonefriendv2.repo.a$h");
    mb12.apply.overload('java.lang.Object').implementation=function(arg1){
        console.log("request >>>>>: setUserid2")
        console.log(arg1.toString())
        var result= this.apply(arg1)
        return result
    }

//    // 寻找搜索框
//    var EditText=Java.use("android.widget.EditText");
//    EditText.addTextChangedListener.overload('android.text.TextWatcher').implementation=function(arg1){
//        console.log("addTextChangedListener")
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        var result= this.addTextChangedListener(arg1)
//        return result
//    }

    // 寻找搜索框
    var TextWatcher=Java.use("com.xingin.matrix.profile.view.ClearableEditText$a");
    TextWatcher.onTextChanged.overload('java.lang.CharSequence', 'int', 'int', 'int').implementation=function(arg1,arg2,arg3,arg4){
        console.log("addTextChangedListener")
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(arg1.toString())
        console.log(arg2)
        console.log(arg3)
        console.log(arg4)
        var result= this.onTextChanged(arg1,arg2,arg3,arg4)
        return result
    }

    var XhsHttpInterceptor=Java.use("com.xingin.shield.http.XhsHttpInterceptor");
    XhsHttpInterceptor.$init.overload('java.lang.String', 'com.xingin.shield.http.a').implementation=function(arg1,arg2){
        console.log("XhsHttpInterceptor")
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var result= this.$init(arg1,arg2)
        return result
    }
});
