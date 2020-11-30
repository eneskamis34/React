function fonksiyon<T>(x:T) : T {

    return x;
}

let sayi1 = fonksiyon<number>(2);
let sehir1 = fonksiyon<String>("İstanbul");


class GenericClass<T>
{
    degisken: T;
    fonks(parametre: T) : T {
        return parametre;
    }
}

let sinif = new GenericClass<number>();
sinif.fonks(1);