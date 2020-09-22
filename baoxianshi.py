import frida, sys

def on_message(message, data):
    if message['type'] == 'send':
        print("[*] {0}".format(message['payload']))
    else:
        print(message)


jscode = """


rpc.exports = {
    loadurl: function (body) {
        return new Promise(function(resolve, reject) {
            Java.perform(function x() {
                var self;
                var GeneralWebViewActivityBase=Java.use("com.winbaoxian.wybx.module.web.GeneralWebViewActivityBase");
                GeneralWebViewActivityBase.a.overload('java.lang.String').implementation=function(arg1){
                    send("a Hook Start...");
                    var result= this.a(arg1)
                    self = this;
                    return result
                }
                if(self != null){
                    console.log(self(body))
                }
                
            })
        });
    }
};
"""

# process = frida.get_usb_device().attach('com.winbaoxian.wybx')
# script = process.create_script(jscode)
# script.on('message', on_message)
# script.load()


device = frida.get_device_manager().enumerate_devices()[-1]
pid = device.spawn(["com.winbaoxian.wybx"])
session = device.attach(pid)
print("[*] Attach Application id:",pid)
device.resume(pid)
print("[*] Application onResume")
script = session.create_script(jscode)
script.on('message', on_message)
print('[*] Running CTF')
script.load()
# sys.stdin.read()


while 1:
    s = input("请输入\n")
    if s == "loadurl":
        url = "https://pbf.winbaoxian.com/planBook/planbookInput/pages/common/templatev1/templatev1.html?planbookId=7268"
        script.exports.loadurl(url)
