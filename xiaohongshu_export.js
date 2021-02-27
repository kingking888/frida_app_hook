function abc(){
    var base_address=Module.findBaseAddress('libshield.so')
    if (base_address!=null){
        console.log("param:ok");
        var str;
        Java.perform(function () {
            str = Java.use("java.lang.String");
        });
        Interceptor.attach(base_address.add(0x73B78), {
            onEnter: function (args) {

                console.log("hook success");
            },
            onLeave: function (retval) {
            }
        });
    }
}
abc();