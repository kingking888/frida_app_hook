// 一点资讯
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

    var eys=Java.use("eys");
    eys.a.overload('com.yidian.news.ui.newslist.data.BaseVideoLiveCard', 'eoo', 'int', 'boolean').implementation=function(arg1,arg2,arg3,arg4){
        send("g Hook Start...");
        send(arg1.isSpecialSize())
        send(arg3)
        send(arg4)
        this.a(arg1,arg2,arg3,arg4)
    }

    var exg=Java.use("exg");
    exg.a.overload('com.yidian.news.data.card.Card', 'android.widget.ImageView', 'boolean').implementation=function(arg1,arg2,arg3){
        send("gg Hook Start...");
        return null;
        this.a(arg1,arg2,arg3)
    }


    var hxi=Java.use("hxi");
    hxi.e.overload('long').implementation=function(arg1){
        send("e Hook Start...");
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var reslut =  this.e(arg1)
        send(reslut)
        return reslut
    }


});