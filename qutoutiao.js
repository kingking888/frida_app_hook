// 趣头条 5.4.1版本 破解so加密，动态调试chrome
// frida -U -l qutoutiao.js -f com.jifen.qukan --no-pause
// 一种是h5搜索加密破解，一种是获取列表的qdata破解
Java.perform(function () {

    var ContentWebView=Java.use("com.jifen.qukan.content.web.view.ContentWebView");
    ContentWebView.getWeb.overload().implementation=function(){
        console.log("getWeb Hook Start...");
        var result =  this.getWeb()
        result.setWebContentsDebuggingEnabled(true)
        return result
    }

    var QWrapScrollWebView=Java.use("com.jifen.qkbase.web.view.wrap.QWrapScrollWebView");
    QWrapScrollWebView.loadUrl.overload("java.lang.String").implementation=function(arg1){
        console.log("loadUrl Hook Start 这里已经从java返回数据了...");
        var result =  this.loadUrl(arg1)
        return result
    }


    var f=Java.use("com.jifen.framework.http.napi.ok.f");
    f.a.overload('com.jifen.framework.http.napi.b', 'com.jifen.framework.http.napi.HttpRequest', 'com.jifen.framework.http.napi.HttpRequestHandler').implementation=function(arg1, arg2,arg3){
        // if (arg2.url() == "http://ddd.1sapp.com/report" || arg2.url() == "https://log.1sapp.com/a.gif"){
        //     return null
        // }
        // if(arg2.url() != "https://api.1sapp.com/content/getListV2"){
        //     return null
        // }
        console.log(arg2.url())
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        var result =  this.a(arg1,arg2,arg3)
        return result
    }


    var InnerJavascriptInterface=Java.use("com.jifen.qu.open.web.bridge.basic.InnerJavascriptInterface");
    InnerJavascriptInterface.getInnerParameter.overload('java.lang.String','java.lang.String').implementation=function(arg1,arg2){
        // console.log("getInnerParameter Hook Start...");
        // console.log(arg2)
        var result =  this.getInnerParameter(arg1,arg2)
        return result
    }
    // var InnerJavascriptInterface=Java.use("com.jifen.framework.web.bridge.basic.DWebView$InnerJavascriptInterface");
    // InnerJavascriptInterface.call.overload('java.lang.String','java.lang.String').implementation=function(arg1,arg2){
    //     send("call Hook Start...");
    //     send(arg2.url())
    //     var result =  this.call(arg1,arg2)
    //     return result
    // }
    // var InnerJavascriptInterface=Java.use("com.jifen.framework.web.bridge.basic.jspackage.DJsPackage$InnerJavascriptInterface");
    // InnerJavascriptInterface.call.overload('java.lang.String','java.lang.String').implementation=function(arg1,arg2){
    //     send("call Hook Start...");
    //     // send(arg2.url())
    //     send(arg1)
    //     send(arg2)
    //     var result =  this.call(arg1,arg2)
    //     return result
    // }

    // jsbriage
    // var DJsPackage=Java.use("com.jifen.framework.web.bridge.basic.jspackage.DJsPackage");
    // DJsPackage.d.overload('java.lang.String').implementation=function(arg1){
    //     send("d Hook Start...");
    //     send(arg1)
    //     var result =  this.d(arg1)
    //     send(result)
    //     // send(this.f.value)
    //     return result
    // }

    // var aaa=Java.use("com.jifen.framework.core.a.a");
    // aaa.a.overload('java.lang.String','java.lang.String').implementation=function(arg1,arg2){
    //     // send("call Hook Start...");
    //     // send(arg2.url())
    //     // send(arg1)
    //     send(arg2)
    //     var result =  this.a(arg1,arg2)
    //     return result
    // }

    
    var NativeUtils=Java.use("com.jifen.qukan.utils.NativeUtils");
    NativeUtils.getInnoSoInfo.overload("java.lang.String").implementation=function(arg1){
        console.log("getInnoSoInfo1");
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(arg1)
        var result = this.getInnoSoInfo(arg1)
        console.log(result)
        return result
    }

    var f=Java.use("com.jifen.framework.http.napi.ok.f");
    // f.a.overload('com.jifen.framework.http.napi.ok.d').implementation=function(arg1){
    //     send("com.jifen.framework.http.napi.ok.f 1")
    //     return this.a(arg1)
    // }
    // f.a.overload('com.jifen.framework.http.napi.HttpRequest', 'com.jifen.framework.http.napi.HttpRequestHandler').implementation=function(arg1,arg2){
    //     send("com.jifen.framework.http.napi.ok.f 2")
    //     return this.a(arg1,arg2)
    // }
    // f.a.overload('com.jifen.framework.http.napi.ok.f', 'com.jifen.framework.http.napi.HttpRequest').implementation=function(arg1,arg2){
    //     send("com.jifen.framework.http.napi.ok.f 3")
    //     return this.a(arg1,arg2)
    // }
    // f.a.overload('com.jifen.framework.http.napi.b', 'com.jifen.framework.http.napi.HttpRequest', 'com.jifen.framework.http.napi.HttpRequestHandler').implementation=function(arg1,arg2,arg3){
    //     send("com.jifen.framework.http.napi.ok.f 4")
    //     return this.a(arg1,arg2,arg3)
    // }
    // f.a.overload('com.jifen.framework.http.napi.ok.f', 'com.jifen.framework.http.napi.b', 'com.jifen.framework.http.napi.HttpRequest', 'com.jifen.framework.http.napi.HttpRequestHandler').implementation=function(arg1,arg2,arg3,arg4){
    //     send("com.jifen.framework.http.napi.ok.f 5")
    //     return this.a(arg1,arg2,arg3,arg4)
    // }
    // f.a.overload('com.jifen.framework.http.napi.Method', 'java.lang.String', 'java.util.Map', 'java.util.List', 'com.jifen.framework.http.napi.Configure').implementation=function(arg1,arg2,arg3,arg4,arg5){
    //     send("com.jifen.framework.http.napi.ok.f 6")
    //     send(arg2)
    //     return this.a(arg1,arg2,arg3,arg4,arg5)
    // }
    f.a.overload('com.jifen.framework.http.napi.Method', 'java.lang.String', 'java.util.Map', 'java.util.List', 'com.jifen.framework.http.napi.Configure', 'com.jifen.framework.http.napi.HttpRequestHandler').implementation=function(arg1,arg2,arg3,arg4,arg5,arg6){
        // if (arg2 != "https://api.1sapp.com/content/getListV2"){
        //     return null;
        // }
        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log("com.jifen.framework.http.napi.ok.f 7")
        console.log(arg2)
        var result = "";
        var keyset = arg3.keySet();
        var it = keyset.iterator();
        while(it.hasNext()){
            var keystr = it.next().toString();
            var valuestr = arg3.get(keystr).toString();
            var map= keystr+':'+valuestr+' ||';
            result+=map
        }
        console.log(result);
        return this.a(arg1,arg2,arg3,arg4,arg5,arg6)
    }


    // qdata签名
    var d=Java.use("com.jifen.qukan.http.d");
    d.a.overload('java.util.List', 'boolean').implementation=function(arg1,arg2){
        // console.log("qdata sign")
        // console.log(arg1.toString())
        // for(var i=0;i<arg1.size();i++){
        //     console.log(arg1.get(i))
        // }
        var result =  this.a(arg1,arg2)
        console.log(result)
        return result
    }


    // 签名
    var InnoSecureUtils=Java.use("com.inno.innosecure.InnoSecureUtils");
    InnoSecureUtils.secureSo.overload('android.content.Context', 'java.lang.String', 'java.lang.String').implementation=function(arg1,arg2,arg3){
        console.log("com.inno.innosecure.InnoSecureUtils.secureSo")
        console.log(arg2)
        console.log(arg3)
        var result =  this.secureSo(arg1,arg2, arg3)
        console.log(result)
        console.log(this.sCid.value)
        console.log(this.sVerifySign.value)
        return result
    }

    // 取头条获取一张图片
    InnoSecureUtils.getRes.overload('android.content.Context', 'java.lang.String', 'java.lang.String').implementation=function(arg1,arg2,arg3){
        console.log("getRes")
        console.log(arg2)
        console.log(arg3)
        var result =  this.getRes(arg1,arg2, arg3)
        return result
    }

    // 趣头条的签名
    InnoSecureUtils.getSign.overload('android.content.Context').implementation=function(arg1){
        console.log("getSign")
        var result =  this.getSign(arg1)
        console.log(result)
        return result
    }



});

// 健康
// {"cid":"42","op":"2","content_type":"1,2,4,3,12","page":"1","p_n":"content","p_v":"0.2.5","preload_type":"3","max_time":"0","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600831969741","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 热点
// {"cid":"1","op":"2","content_type":"1,2,4,3,12","page":"2","p_n":"content","p_v":"0.2.5","preload_type":"3","max_time":"1600827985000","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832015846","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 推荐
// {"cid":"255","op":"2","content_type":"1,2,4,3,12","page":"2","p_n":"content","p_v":"0.2.5","preload_type":"3","max_time":"1600828025000","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832090867","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 抗议
// {"cid":"100","op":"2","content_type":"1,2,4,3,12","page":"2","p_n":"content","p_v":"0.2.5","preload_type":"3","max_time":"1600825944000","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832254856","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 视频
// {"cid":"37","op":"2","content_type":"3","page":"2","p_n":"content","p_v":"0.2.5","max_time":"1600829626000","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832275226","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 小视频
// {"cid":"1001","op":"2","fp":"1","content_type":"13","page":"1","categoryId":"0","configId":"","productId":"0","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832307770","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 娱乐
// {"cid":"6","op":"2","content_type":"1,2,4,3,12","page":"2","p_n":"content","p_v":"0.2.5","preload_type":"3","max_time":"1600827954000","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832370637","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 科技
// {"cid":"7","op":"2","content_type":"1,2,4,3,12","page":"1","p_n":"content","p_v":"0.2.5","preload_type":"3","max_time":"0","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832402460","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 财经
// {"cid":"10","op":"2","content_type":"1,2,4,3,12","page":"1","p_n":"content","p_v":"0.2.5","preload_type":"3","max_time":"0","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832419136","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 体育
// {"cid":"13","op":"2","content_type":"1,2,4,3,12","page":"1","p_n":"content","p_v":"0.2.5","preload_type":"3","max_time":"0","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832450370","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}

// 军事
// {"cid":"15","op":"2","content_type":"1,2,4,3,12","page":"1","p_n":"content","p_v":"0.2.5","preload_type":"3","max_time":"0","can_play_live":"1","categoryId":"0","productId":"0","configId":"","tk":"ACGIF0hnm-fdCsIFPGtEWSa4uaJBVwCt90A0NzUxNDk1MDg5NTIyNQ","tuid":"iBdIZ5vn3QrCBTxrRFkmuA","oaid":"","guid":"b350ade5642605f55f2bbd6ce86.06345012","env":"qukan_prod","distinct_id":"26332057d592614a","device_code":"865479022819932","traceId":"a7fdd2ef29e1dbfa41b20831df6bda21","deviceCode":"865479022819932","version":"30996000","OSVersion":"5.1","dtu":"012","lat":"39.9987","lon":"116.387651","network":"wifi","time":"1600832469400","uuid":"691deca6eebb48cc8dd76ba547def4ea","versionName":"3.9.96.000.0916.2151"}