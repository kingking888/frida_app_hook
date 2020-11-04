// wechat com.tencent.mm 7.0.19
// frida -U -l android_wechat.js -f com.tencent.mm --no-pause
// 微信抓取用户信息，通过查找好友的方式
Java.perform(function () {
    var FTSAddFriendUI=Java.use("com.tencent.mm.plugin.fts.ui.FTSAddFriendUI");
//    FTSAddFriendUI.a.overload('com.tencent.mm.plugin.fts.a.d.a.a', 'boolean').implementation=function(arg1, arg2){
//        console.log("FTSAddFriendUI a Hook Start...");
//        var result= this.a(arg1,arg2)
//        return result
//    }
//    FTSAddFriendUI.cVU.overload().implementation=function(){
//        console.log("FTSAddFriendUI cVU Hook Start...");
//        var result= this.cVU()
//        return result
//    }
    FTSAddFriendUI.alH.overload('java.lang.String').implementation=function(arg1){
        console.log("FTSAddFriendUI alH Hook Start...");
        console.log(arg1)
        var result= this.alH(arg1)
        return result
    }
    var f=Java.use("com.tencent.mm.plugin.fts.ui.FTSAddFriendUI$5");
    f.onSceneEnd.overload('int', 'int', 'java.lang.String', 'com.tencent.mm.ak.n').implementation=function(arg1,arg2,arg3,arg4){
        console.log("f.onSceneEnd Hook Start...");
        console.log(arg1)
        console.log(arg2)
        console.log(arg3)
        var result= this.onSceneEnd(arg1,arg2,arg3,arg4)
        return result
    }

//    //com.tencent.mm.plugin.profile.ui.ContactInfoUI 页面捕获。打印传递过来的bundle
//    var ContactInfoUI=Java.use("com.tencent.mm.plugin.profile.ui.ContactInfoUI");
//    ContactInfoUI.getIdentString.overload().implementation=function(arg1){
//        var result =  this.getIdentString()
//        console.log("get---------"+result)
//        return result
//    }
//    ContactInfoUI.onCreate.overload("android.os.Bundle").implementation=function(arg1){
//        console.log("ContactSearchResultUI.onCreate");
//        var bundle = this.getIntent().getExtras()
//        var result = "{";
//        var keyset = bundle.keySet();
//        var it = keyset.iterator();
//        while(it.hasNext()){
//            var keystr = it.next().toString();
//            var valuestr = bundle.getString(keystr);
//            var map= "\""+keystr+"\":\""+valuestr+"\",";
//            result+=map
//        }
//        console.log(result);
//        var result= this.onCreate(arg1)
//        return result
//    }

//    // 根据user_id 查询头像
//    var g=Java.use("com.tencent.mm.al.g");
//    g.eX.overload("java.lang.String").implementation=function(arg1){
//        console.log("g.eX");
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        console.log(arg1);
//        var result= this.eX(arg1)
//        return result
//    }

//    var g=Java.use("com.tencent.mm.al.g");
    var k=Java.use("com.tencent.mm.model.k");
    k.a.overload('android.content.Intent', 'com.tencent.mm.protocal.protobuf.cyw', 'int').implementation=function(arg1,arg2,arg3){
        // 获取其他信息
        var rel =  this.a(arg1,arg2,arg3)
        var bundle = arg1.getExtras()
        var result = "{";
        var keyset = bundle.keySet();
        var it = keyset.iterator();
        while(it.hasNext()){
            var keystr = it.next().toString();
            var valuestr = bundle.getString(keystr);
            var map= "\""+keystr+"\":\""+valuestr+"\",";
            result+=map
        }
        console.log(result);
        return rel
    }

//    //日志函数
//    var ae=Java.use("com.tencent.mm.sdk.platformtools.ae");
//    ae.i.overload('java.lang.String', 'java.lang.String', '[Ljava.lang.Object;').implementation=function(arg1,arg2,arg3){
//        if (arg1 == "MicroMsg.NetSceneSearchContact"){
//            if (arg3 == null){
//                console.log(arg1 + ">>>" +arg2 )
//            }else{
//                console.log(arg1 + ">>>" +arg2 + ">>>" +arg3)
//            }
//        }
//
//        this.i(arg1,arg2,arg3)
//    }

//    var d=Java.use("com.tencent.mm.aj.d");
//    d.b.overload('java.lang.String', 'boolean', 'int', 'com.tencent.mm.aj.b').implementation=function(arg1,arg2,arg3,arg4){
//        send(arg1)
//        send(arg2)
//        send(arg3)
//        var result= this.b(arg1,arg2,arg3,arg4)
//        console.log(result == null)
//        console.log("已经返回")
//        return result
//    }

//    var e=Java.use("com.tencent.mm.aj.e");
//    e.DA.overload("java.lang.String").implementation=function(arg1){
//        console.log(this.hPt.value.hOQ.value.getClass().getName())
//        var result= this.DA(arg1)
//        return result
//    }

       //捕捉设置的图片
//    var ah=Java.use("com.tencent.mm.sdk.platformtools.ah");
//    ah.put.overload('java.lang.Object', 'java.lang.Object').implementation=function(arg1,arg2){
//        console.log("map put")
//        console.log(arg1.toString())
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//        var result= this.put(arg1,arg2)
//        return result
//    }

    var j=Java.use("com.tencent.mm.aj.j");
    j.b.overload('com.tencent.mm.aj.i').implementation=function(arg1){
        // 小图和大图
        console.log(arg1.aEG())
        console.log(arg1.aEH())
        var result= this.b(arg1)
        return result
    }
});