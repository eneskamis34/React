function sayHello(name:string)
{
    return "Hello " + name
}

let message = sayHello("enes");

console.log(message);

let sayi: number;
sayi = 10
sayi = 10.4

let sehir: string
sehir = "istanbul"

let dogruMu: boolean
dogruMu = false
dogruMu = true

let sayilarArray: number[] = [1,2,3];

let sayilarrArray2 : Array<number> = [1,2,3]

let dizi : [number,string]= [1,"Enes"]
dizi[0] //number
dizi[1] //string

enum Renk {kirmizi=1,siyah,mavi};
let renk : Renk = Renk.kirmizi;

//veri tipi ne olacağı belli değilse any kullanılır.

let deger : any = "Ankara"
deger = 1
deger = {}


//void kullanarak fonksiyonun bir şey döndrmeyeceğini garanti altına layırouz.
let deger2 : void = undefined
function selamver():void{
    console.log("merhaba")
    //return 4;
}

//undefined null
let yas: number; //undefined 

class Musteri{
    //direkt ulasmaya calısırsan null olur. ulaşmamış olur.
}
