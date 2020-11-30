abstract class KrediBase {
    constructor()
    {

    }

    kaydet() : void
    {
        console.log("Kaydedildi...");
    }

    abstract hesapla() : void;
}

class TuketiciKredisi extends KrediBase {
    constructor()
    {
        super();
    }

    hesapla(): void {
        console.log("Tüketici Kredisi Hesaplandı.");
    }

}

class KonutKredisi extends KrediBase {
    constructor()
    {
        super();
    }

    hesapla() : void {
        console.log("Konut Kredisi Hesaplandı.");
    }
}


let tuketicikredisi = new TuketiciKredisi();
tuketicikredisi.kaydet();
tuketicikredisi.hesapla();

let konutkredisi = new KonutKredisi();
konutkredisi.hesapla();
konutkredisi.kaydet();

let kredi : KrediBase
kredi = new TuketiciKredisi();
kredi = new KonutKredisi();