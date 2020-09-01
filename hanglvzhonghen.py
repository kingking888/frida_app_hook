# frida 主动hook so。提供rpc服务
import frida, sys

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)

jscode = """
function soHook(){
    var base_address=Module.findBaseAddress('libumejni.so');
    if (base_address!=null){
        console.log("soHook start");
        var str;
        Java.perform(function () {
            str = Java.use("java.lang.String");
        });
        
    }

    rpc.exports = {

        add: function (body) {
            return new Promise(function(resolve, reject) {
                console.log('init2')
                Java.perform(function () {
                    var application = Java.use("android.app.ActivityThread").currentApplication();
                    var context = application.getApplicationContext();
                    var UmeJni = Java.use('com.umetrip.android.umehttp.security.UmeJni');
                    var result =  UmeJni.sub_0515(context,body);
                    resolve(result)
                });
                console.log('init2 done')
            });
        }
        
    };



}
soHook();
"""

process = frida.get_usb_device().attach('com.umetrip.android.msky.app')
script = process.create_script(jscode)
script.on('message', on_message)
script.load()
body = '{"requestBody"2:[10,7,117,109,101,116,114,105,112,18,32,101,48,52,50,102,102,97,53,53,52,99,56,52,50,101,48,97,54,48,99,53,99,48,56,101,102,50,101,52,57,54,99],"lastReqTime":"239","lastTransactionID":"5059e10000051598850174015","latitude":"39.999055","longitude":"116.387829","netType":"1","pageId":"","rchannel":"10000025","rcuuid":"5059e27947d22496994daeaf3ce6f5028","rcver":"AND_a01_06.06.0731","rkey":"2020-08-31 13:02:54 8000","rpid":"1081001","rpver":"5.0","rsid":"","transactionID":"5059e10810011598850174340"}'
process.detach()
command = ""
while 1 == 1:
    command = input("Enter command:\n1: Exit\n2: Call secret function\nchoice:")
    if command == "1":
        break
    elif command == "2":
        script.exports.add(body)

        


