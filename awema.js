// 抖音 v12.0.0
// frida -U -l awema.js  -f com.ss.android.ugc.aweme --no-pause
// ACTIVITY com.ss.android.ugc.aweme/.profile.ui.UserProfileActivity 69e5356 pid=5091
Java.perform(function () {
//    var avatarView=Java.use("com.ss.android.ugc.aweme.feed.ui.FeedAvatarView_ViewBinding$1");
//    avatarView.doClick.overload('android.view.View').implementation=function(arg1){
//        send("WebView.loadUrl...");
//        var result =  this.doClick(arg1)
//        return result
//    }
//    var FeedAvatarView=Java.use("com.ss.android.ugc.aweme.feed.ui.FeedAvatarView");
//    FeedAvatarView.onClick.overload('android.view.View').implementation=function(arg1){
//        console.log("FeedAvatarView onClick");
//        var result =  this.onClick(arg1)
//        return result
//    }
//
//    var api_h=Java.use("com.ss.android.ugc.aweme.profile.api.h");
//    api_h.a.overload('boolean').implementation=function(arg1){
//        console.log("get api");
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        var result =  this.a(arg1)
//        return result
//    }
//
//    api_h.b.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int').implementation=function(arg1,arg2,arg3,arg4){
//        console.log("get api b");
//        console.log(arg1+","+arg2+","+arg3+","+arg4);
//        var result =  this.b(arg1,arg2,arg3,arg4)
//        return result
//    }
//
//    var UserProfileActivity=Java.use("com.ss.android.ugc.aweme.profile.ui.UserProfileActivity");
//    UserProfileActivity.onCreate.overload('android.os.Bundle').implementation=function(arg1){
//        console.log("UserProfileActivity.onCreate");
//        var result =  this.onCreate(arg1)
//        return result
//    }

//    var hander_i=Java.use("com.ss.android.ugc.aweme.profile.api.i");
//    var n=Java.use("com.ss.android.ugc.aweme.base.n");
//    hander_i.a.overload('android.os.Handler', 'java.lang.String').implementation=function(arg1,arg2){
//        console.log("hander_i ");
//        console.log(arg2);
//        var result =  this.a(arg1,arg2)
//        return result
//    }
//    var h=Java.use("com.ss.android.ugc.aweme.profile.api.h");
//    h.b.overload('java.lang.String', 'boolean', 'java.lang.String').implementation=function(arg1,arg2,arg3){
//        console.log("UserResponse  Callable");
//        console.log(arg1+","+arg2+","+arg3+",");
//        var result =  this.b(arg1,arg2,arg3)
//        console.log(result.getUser().getNickname());
//        return result
//    }

    var Api=Java.use("com.ss.android.ugc.aweme.app.api.Api");
    Api.a.overload('int', 'java.lang.String', 'java.lang.Class', 'java.lang.String', 'com.ss.android.http.a.b.f').implementation=function(arg1,arg2,arg3,arg4,arg5){
        console.log("UserResponse  Callable >>>>>>>>>>>>>>>>>");
        console.log(arg1+","+arg2+","+arg4+",");
        console.log(arg3.getName())
        console.log(arg4 == null)
        if (arg5 != null){
            console.log(arg5.getClass().getName())
        }
        var result =  this.a(arg1,arg2,arg3,arg4,arg5)
        console.log("UserResponse  Callable <<<<<<<<<<<<<<<<<");
        return result
    }
    Api.a.overload('java.lang.String', 'com.ss.android.ugc.aweme.app.api.Api$c', 'java.lang.String', 'java.lang.String').implementation=function(arg1,arg2,arg3,arg4){
        console.log("UserResponse  json <<<<<<<<<<<<<<<<");
        if(arg4.indexOf("https://aweme.snssdk.com/aweme/v1/aweme/post/") != -1){
            console.log(","+arg3+","+arg4+",");
        }
        var result =  this.a(arg1,arg2,arg3,arg4)
        console.log("UserResponse  json >>>>>>>>>>>>>>>>");
        return result
    }
});