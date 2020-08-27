// bate 理财师 com.betawm.baw 7.14
// frida -U -l batelicaishi.js -f com.betawm.baw --no-pause
Java.perform(function () {

    var ApiClient=Java.use("com.betawm.baw.api.ApiClient");
    ApiClient._post.overload('com.betawm.baw.AppContext', 'java.lang.String', 'java.util.Map', 'java.util.Map').implementation=function(arg1,arg2,arg3,arg4){
        send("a3 Hook Start...");
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

        if(arg4!=null){
            var result = "";
            var keyset = arg4.keySet();
            var it = keyset.iterator();
            while(it.hasNext()){
                var keystr = it.next().toString();
                var valuestr = arg4.get(keystr).toString();
                var map= keystr+':'+valuestr+' ||';
                result+=map
            }
            console.log(result);
        }
        var result= this._post(arg1,arg2,arg3,arg4)
        return result
    }

    ApiClient.login.overload('java.lang.String', 'java.lang.String', 'boolean', 'boolean').implementation=function(arg1,arg2,arg3,arg4){
        send("a2 Hook Start...");
        console.log(arg1)
        console.log(arg2)
        console.log(arg3)
        console.log(arg4)
        var result= this.login(arg1,arg2,arg3,arg4)
        return result
    }
    var Login=Java.use("com.betawm.baw.ui.Login");
    Login.doLogin.overload('java.lang.String', 'java.lang.String', 'boolean', 'boolean').implementation=function(arg1,arg2,arg3,arg4){
        send("a1 Hook Start...");
        console.log(arg1)
        console.log(arg2)
        console.log(arg3)
        console.log(arg4)
        var result= this.doLogin(arg1,arg2,arg3,arg4)
        return result
    }

    var HttpRequestServiceImpl=Java.use("com.betawm.baw.service.impl.HttpRequestServiceImpl");
    HttpRequestServiceImpl.login.overload('android.support.v4.util.ArrayMap').loginimplementation=function(arg1){
        send("a4 Hook Start...");
        var result= this.login(arg1)
        return result
    }

    var LoginPresenter=Java.use("com.betawm.baw.presenter.LoginPresenter");
    LoginPresenter.doLogin.overload('android.support.v4.util.ArrayMap').loginimplementation=function(arg1){
        send("a7 Hook Start...");
        var result= this.login(arg1)
        return result
    }
    var CryptUtils=Java.use("com.betawm.utils.CryptUtils");
    CryptUtils.encryptAES.overload('java.lang.String','java.lang.String').loginimplementation=function(arg1,arg2){
        send("a8 Hook Start...");
        send(arg1)
        send(arg2)
        var result= this.encryptAES(arg1,arg2)
        return result
    }
    CryptUtils.encryptAES.overload('[B','java.lang.String').loginimplementation=function(arg1,arg2){
        send("a9 Hook Start...");
        // send(arg1)
        send(arg2)
        var result= this.encryptAES(arg1,arg2)
        return result
    }
    console.log("ok")
});