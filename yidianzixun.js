// 一点资讯 5.5.3.0
// frida -U -l yidianzixun.js -f com.hipu.yidian --no-pause
// frida -U -l yidianzixun.js -f com.hipu.yidian --no-pause
Java.perform(function () {

    var SignUtil=Java.use("com.yidian.news.util.sign.SignUtil");
    SignUtil.a.overload('android.content.Context','java.lang.String').implementation=function(arg1,arg2){
        send("list Hook Start...");
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        send(arg2)
        var result= this.a(arg1,arg2)
        send(result)
        return result
    }

    var NewsBaseViewHolder=Java.use("com.yidian.news.ui.newslist.cardWidgets.NewsBaseViewHolder");
    NewsBaseViewHolder.onClick.overload('android.view.View').implementation=function(arg1){
        send("list Hook Start...");
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        this.onClick(arg1)
    }

    NewsBaseViewHolder.d.overload().implementation=function(){
        send("NewsBaseViewHolder d Hook Start...");
        console.log(this.e.value)
        console.log(this.e.value.getClass().getName())
        this.d()
    }

    // var cyd=Java.use("cyd");
    // cyd.a.overload('java.lang.String', 'java.lang.String', 'java.lang.String', 'int', 'int', 'boolean').implementation=function(arg1,arg2,arg3,arg4,arg5,arg6){
    //     send("cyd Hook Start...");
    //     console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
    //     var reslut =  this.a(arg1,arg2,arg3,arg4,arg5,arg6)
    //     send("param"+arg3)
    //     return reslut
    // }

    var cup=Java.use("cup");
    cup.d.overload("java.lang.String","java.lang.String").implementation=function(arg1,arg2){
        send("cpu d Hook Start...");
        console.log(arg1)
        console.log(arg2)
        
        var reslut =  this.d(arg1,arg2)
        return reslut
    }
    cup.f.overload().implementation=function(){
        send("cpu f Hook Start...");
        console.log(this.m.value)
        var reslut =  this.f()
        console.log(reslut)
        return reslut
    }
    // var igt=Java.use("igt");
    // igt.d.overload("java.lang.String","java.lang.String").implementation=function(arg1,arg2){
    //     send("logger--------------------- Hook Start...");
    //     console.log(arg1)
    //     console.log(arg2)
    //     send("logger--------------------- Hook Start...");

    //     var reslut =  this.d(arg1,arg2)
    //     return reslut
    // }

    var BaseVideoLiveCard=Java.use("com.yidian.news.ui.newslist.data.BaseVideoLiveCard");
    BaseVideoLiveCard.parseCardFields.overload('org.json.JSONObject', 'com.yidian.news.ui.newslist.data.BaseVideoLiveCard').implementation=function(arg1,arg2){
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        send("logger--------------------- Hook Start...");
        console.log(arg1)
        console.log(arg2)
        send("logger--------------------- Hook Start...");
        var reslut =  this.parseCardFields(arg1,arg2)
        return reslut
    }

    var FullContentNaviItem=Java.use("com.yidian.news.ui.newslist.data.FullContentNaviItem");
    FullContentNaviItem.fromJson.overload('org.json.JSONObject').implementation=function(arg1){
        send("logger--------------------- FullContentNaviItem Hook Start...");
        console.log(arg1.toString())
        var reslut =  this.fromJson(arg1)
        return reslut
    }

});