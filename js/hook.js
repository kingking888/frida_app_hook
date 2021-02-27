'use strict';

// SCChat sendText:
function findHookMethod(clsname,mtdname){
  if(ObjC.available) {
     for(var className in ObjC.classes) {
         if (ObjC.classes.hasOwnProperty(className)) {
            if(className == clsname) {
               return ObjC.classes[className][mtdname];
            }
         }
     }
  }
  return;
}

var method = findHookMethod('SCChat', '- sendText:');
Interceptor.attach(method.implementation, {
    onEnter:function (args){
        console.log('-[SCChat sendText:] onEnter...');
        console.log('argv1:' + args[1]);

        var SCText = ObjC.Object(args[2]);
        console.log('SCText is:' + SCText.toString());

        var text = SCText['- text']();
        console.log('text is:' + text.toString());
    },
    onLeave:function(retVal){
        console.log('-[SCChat sendText:] onLeave...');
    },
});