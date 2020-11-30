function sayHello(name) {
    return "Hello " + name;
}
var message = sayHello("enes");
console.log(message);
var sayi;
sayi = 10;
sayi = 10.4;
var sehir;
sehir = "istanbul";
var dogruMu;
dogruMu = false;
dogruMu = true;
var sayilarArray = [1, 2, 3];
var sayilarrArray2 = [1, 2, 3];
//let sayilarArray3 : Array<Customer> = ["Enes","Ahmet"];
var dizi = [1, "Enes"];
dizi[0]; //number
dizi[1]; //string
var Renk;
(function (Renk) {
    Renk[Renk["kirmizi"] = 1] = "kirmizi";
    Renk[Renk["siyah"] = 2] = "siyah";
    Renk[Renk["mavi"] = 3] = "mavi";
})(Renk || (Renk = {}));
;
var renk = Renk.kirmizi;
//veri tipi ne olacağı belli değilse any kullanılır.
var deger = "Ankara";
deger = 1;
deger = {};
//void kullanarak fonksiyonun bir şey döndrmeyeceğini garanti altına layırouz.
var deger2 = undefined;
function selamver() {
    console.log("merhaba");
    //return 4;
}
//undefined null
var yas; //undefined 
var Musteri = /** @class */ (function () {
    function Musteri() {
    }
    return Musteri;
}());
