// js hook qq  v8.4.18.4945
// frida -U -l mobileqq.js  -f com.tencent.mobileqq --no-pause
// 这里学到了 相同变量名称用 _ 来调用
Java.perform(function () {

    var bdrk=Java.use("bdrk");
    bdrk.b.overload('int', '[J', 'java.lang.String', 'java.lang.String').implementation=function(arg1,arg2,arg3,arg4){
        console.log("bdrk b");
        return
    }
    bdrk.a.overload('int', '[J', 'java.lang.String', 'java.lang.String').implementation=function(arg1,arg2,arg3,arg4){
        console.log("bdrk a");
        return
    }
    var ActiveEntitySearchFragment=Java.use("com.tencent.mobileqq.search.fragment.ActiveEntitySearchFragment");
//    ActiveEntitySearchFragment.a.overload('int', '[J', 'java.lang.String', 'java.lang.String').implementation=function(arg1,arg2,arg3,arg4){
//        console.log("ActiveEntitySearchFragment a");
//        return this.a(arg1,arg2,arg3,arg4)
//    }
//    ActiveEntitySearchFragment.a.overload('java.lang.String').implementation=function(arg1){
//        console.log("ActiveEntitySearchFragment a");
//        return
//        return this.a(arg1)
//    }
    ActiveEntitySearchFragment.a.overload('java.lang.String', 'java.util.List', '[B', 'double', 'double', 'android.os.Bundle').implementation=function(arg1,arg2,arg3,arg4,arg5,arg6){
        console.log("ActiveEntitySearchFragment a2");
        console.log(arg1);
        console.log(arg2 == null);
        console.log(arg3 == null);
        console.log(arg4);
        console.log(arg5);
        return this.a(arg1,arg2,arg3,arg4,arg5,arg6)
    }
    ActiveEntitySearchFragment.a.overload().implementation=function(){
        console.log("ActiveEntitySearchFragment a3");
        return this.a()
    }

//    var ActiveEntitySearchActivity=Java.use("com.tencent.mobileqq.search.activity.ActiveEntitySearchActivity");
//    ActiveEntitySearchActivity.onEditorAction.overload('android.widget.TextView', 'int', 'android.view.KeyEvent').implementation=function(){
//        console.log("ActiveEntitySearchActivity onEditorAction");
//        var fields = ActiveEntitySearchActivity.class.getFields()
//        for (var i=0;i<fields.length;i++){
//            if(fields[i].getName() == "a"){
//               console.log(fields[i].getName() +" :"+ fields[i].getType())
//               console.log(fields[i])
//            }
//        }
//        return true;
//    }
//    var QLog=Java.use("com.tencent.qphone.base.util.QLog");
//    QLog.d.overload('java.lang.String', 'int', 'java.lang.String').implementation=function(arg1,arg2,arg3){
//        console.log("log ---------------------- a3");
//        console.log(arg1 + arg2 +arg3)
//        return this.d(arg1,arg2,arg3)
//    }
//    QLog.isColorLevel.overload().implementation=function(){
//       return true
//    }
    var amrx=Java.use("amrx");
    amrx.$init.overload('android.content.Context', 'com.tencent.mobileqq.app.QQAppInterface', 'com.tencent.widget.XListView', 'java.util.List').implementation=function(){
        console.log("$init" + arguments[3].toString());
        return this.$init.apply(this, arguments)
    }
    amrx.a.overload('java.util.List', 'java.util.ArrayList', 'boolean').implementation=function(arg1,arg2,arg3){
        console.log("a" + arguments[0].toString());
        for (var i=0;i<arguments[0].size();i++){
            console.log(arg1.get(i).name)
        }
        return this.a.apply(this, arguments)
    }
    amrx.getView.overload('int', 'android.view.View', 'android.view.ViewGroup').implementation=function(arg1,arg2,arg3){
        console.log("getview")
        var result =  this.getView(arg1,arg2,arg3)
        return result;
    }

    var ContactBindedActivity=Java.use("com.tencent.mobileqq.activity.ContactBindedActivity");
    ContactBindedActivity.a.overload('com.tencent.mobileqq.app.QQAppInterface', 'int', 'int', 'android.content.Intent').implementation=function(arg1,arg2,arg3,arg4){
        console.log("ContactBindedActivity a1");
        return this.a(arg1,arg2,arg3,arg4)
    }
    ContactBindedActivity.a.overload('com.tencent.mobileqq.app.QQAppInterface', 'int', 'java.util.ArrayList').implementation=function(arg1,arg2,arg3){
        console.log("ContactBindedActivity a2");
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
        console.log(arg1.getClass().getName())
        console.log(arg2)
        console.log(arg3.size())
        return this.a(arg1,arg2,arg3)
    }
//    var TextView=Java.use("android.widget.TextView");
//    TextView.setText.overload('java.lang.CharSequence').implementation=function(arg1){
//        console.log(arg1);
//        console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//
//        return this.setText(arg1)
//    }
        var ProfileCardMoreInfoView=Java.use("com.tencent.mobileqq.widget.ProfileCardMoreInfoView");
        ProfileCardMoreInfoView.a.overload('android.view.ViewGroup', 'int', 'java.lang.CharSequence', 'int').implementation=function(arg1,arg2,arg3,arg4){
            console.log(arg3);
            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return this.a(arg1,arg2,arg3,arg4)
        }
        ProfileCardMoreInfoView.a.overload('java.util.ArrayList').implementation=function(arg1){
            console.log("java.util.ArrayList");
//            console.log(this.__a.value.getClass().getName())
//            console.log(this.___a.value.getClass().getName())
//            console.log(this.____a.value.getClass().getName())
//            console.log(this._____a.value.getClass().getName())
            console.log(this.______a.value.getClass().getName())
            console.log(this.______a.value.___________a.value.getClass().getName())
            console.log(this.______a.value.___________a.value.nickName.value)
            return this.a(arg1)
        }

        var FriendProfileCardActivity=Java.use("com.tencent.mobileqq.activity.FriendProfileCardActivity");
        FriendProfileCardActivity.a.overload('com.tencent.mobileqq.data.ContactCard', 'boolean').implementation=function(arg1,arg2){
            console.log("FriendProfileCardActivity");
//            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return this.a(arg1,arg2)
        }
        FriendProfileCardActivity.a.overload().implementation=function(){
            console.log("FriendProfileCardActivity aaaaaaaaaaaaa");
            if (this.__________________a.value != null){
                console.log("adbc")
                console.log(this.__________________a.value.getClass().getName())
                console.log(this.__________________a.value._________a.value.getClass().getName())
                console.log(this.__________________a.value._________a.value)
                for(var i=0; i<10;i++){
                    var b = "";
                    for(var j=0;j<i;j++){
                        b = b + "_"
                    }
                    console.log(b)
                    console.log(eval("this.__________________a.value._________a.value."+b+"a.value"));
                }
                console.log(this.__________________a.value._________a.value.______a.value.get(0).a)
                console.log(this.__________________a.value._________a.value.______a.value.get(0).b)
                console.log(this.__________________a.value._________a.value.______a.value.get(0).c)
            }
//            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return this.a()
        }

        var bahj=Java.use("bahj");
//        bahj.cursor2Entity.overload('com.tencent.mobileqq.persistence.Entity', 'android.database.Cursor', 'boolean', 'com.tencent.mobileqq.persistence.NoColumnErrorHandler').implementation=function(arg1,arg2,arg3,arg4){
//            console.log("sql sql sql sql");
////            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
//            var card= this.cursor2Entity(arg1,arg2,arg3,arg4)
//            console.log(card.mobileNo);
//            console.log(card.mobileCode);
//            console.log(card.strContactName);
//            console.log(card.nickName);
//            console.log(card.uin);
//            console.log(card.bSex);
//            console.log(card.nickName);
//            console.log(card == null)
//            return card
//        }
        FriendProfileCardActivity.a.overload('android.content.Intent').implementation=function(arg1){
            console.log("android.content.Intent ===========");
            console.log(arg1.getParcelableExtra("AllInOne") == null)
            return this.a(arg1)
        }
        FriendProfileCardActivity.a.overload('android.content.Intent', 'com.tencent.mobileqq.activity.ProfileActivity$AllInOne').implementation=function(arg1,arg2){
            console.log("FriendProfileCardActivity.a 2 ===========");
            console.log(arg2)
            return this.a(arg1,arg2)
        }
        FriendProfileCardActivity.doOnCreate.overload('android.os.Bundle').implementation=function(arg1){
            console.log("android.os.Bundle ===========");
            return this.doOnCreate(arg1)
        }
        FriendProfileCardActivity.doOnNewIntent.overload('android.content.Intent').implementation=function(arg1){
            console.log("private ProfileActivity.AllInOne a(Intent intent) {");
            console.log(arg1.getParcelableExtra("AllInOne") == null)
            return this.doOnNewIntent(arg1)
        }

        var Intent=Java.use("android.content.Intent");
        Intent.getParcelableExtra.overload('java.lang.String').implementation=function(arg1){
            var b = false;
            if ("AllInOne" == arg1){
                console.log("okkjjjjjj")
                console.log(arg1)
                b = true
                console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));

            }
            var result =  this.getParcelableExtra(arg1)
            if (b){
                console.log(result == null)
                if (result != null){
                    console.log(result)
                    console.log(result.___h)
                }
            }
            return result
        }

        var CardContactInfo=Java.use("com.tencent.mobileqq.activity.ProfileActivity$CardContactInfo");
        CardContactInfo.$init.overload('java.lang.String', 'java.lang.String', 'java.lang.String').implementation=function(arg1,arg2,arg3){
            console.log(arg1+arg2+arg3);
//            console.log(Java.use("android.util.Log").getStackTraceString(Java.use("java.lang.Exception").$new()));
            return this.$init(arg1,arg2,arg3)
        }

})