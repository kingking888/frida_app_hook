'use strict';

// SCChat sendText:
function findHookMethod(clsname,mtdname){
  if(ObjC.available) {
     for(var className in ObjC.classes) {
         if (ObjC.classes.hasOwnProperty(className)) {
            if(className == clsname) {
               console.log("ObjC.classes["+className+"]["+mtdname+"]")
               return ObjC.classes[className][mtdname];
            }
         }
     }
  }
  return;
}

var className = "TIMOConversation";
var funcName = "+ createConversationWithOtherParticipants:";

try{
    var className = "TIMOConversation";
    var methods = eval('ObjC.classes.' + className + '.$methods');
    for (var i = 0; i < methods.length; i++){
        try{
            console.log("[-] "+methods[i]);
        }catch(err)
        {
            console.log("[!] Exception1: " + err.message);
        }
    }
}catch(err){
        console.log("[!] Exception2: " + err.message);
}

try{
    Interceptor.attach(ObjC.classes["TIMOConversation"]['+ createConversationWithOtherParticipants:type:inInbox:completion:'].implementation, {
        onEnter:function (args){
            console.log('-[SCChat sendText:] onEnter...');
        },
        onLeave:function(retVal){
            console.log('-[SCChat sendText:] onLeave...');
        },
    });

    Interceptor.attach(ObjC.classes["TIMOConversation"]['- sendMessage:error:'].implementation, {
        onEnter:function (args){
            console.log(' sendMessage onEnter...');
            console.log('\tBacktrace:\n\t' + Thread.backtrace(this.context,Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join('\n\t'));
        },
        onLeave:function(retVal){
            console.log('sendMessage  onLeave...');
            console.lo("return=(" + ObjC.Object(retval) + ")");
        },
    });
}catch(err){
    console.log("[!] Exception2: " + err.message);
}


//Backtrace:
//0x10240d800 Aweme!0x1d51800   -[AWEIMSendMessageController newSDK_sendMessage:conversation:]:
//0x10240d620 Aweme!0x1d51620   -[AWEIMSendMessageController sendMessage:conversation:forwardMessage:mentionUsers:]:
//0x1023d6310 Aweme!0x1d1a310   -[AWEIMNewMessageDataController sendMessage:mentionUsers:]:
//0x1023d7098 Aweme!0x1d1b098
//0x1023d627c Aweme!0x1d1a27c
//0x1023a23e0 Aweme!0x1ce63e0
//0x1023a2e38 Aweme!0x1ce6e38
//0x1023a2240 Aweme!0x1ce6240
//0x102376ce0 Aweme!0x1cbace0
//0x102374788 Aweme!0x1cb8788
//0x1036cd444 Aweme!0x3011444
//0x1cdd29ecc UIKitCore!-[UITextView keyboardInput:shouldInsertText:isMarkedText:]
//0x1cd833c14 UIKitCore!-[UIKeyboardImpl callShouldInsertText:]
//0x1cd8433e0 UIKitCore!-[UIKeyboardImpl addWordTerminator:afterSpace:afterAcceptingCandidate:elapsedTime:executionContext:]
//0x1cd841a20 UIKitCore!__81-[UIKeyboardImpl addInputString:withFlags:withInputManagerHint:executionContext:]_block_invoke
//0x1cd87282c UIKitCore!-[UIKeyboardTaskExecutionContext returnExecutionToParentWithInfo:]



