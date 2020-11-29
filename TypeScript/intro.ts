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
let sayilarArray3 : Array<Customer> = ["Enes","Ahmet"];

let dizi : [number,string]= [1,"Enes"]
dizi[0] //number
dizi[1] //string

enum Renk {kirmizi,siyah,mavi};
