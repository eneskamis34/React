class Ev 
{
    odaSayisi:number;
    pencereSayisi:number;
    kat:number;

    constructor(odaSayisi:number,pencereSayisi:number,kat:number)
    {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }   

    yemekYe()
    {
        console.log(this.kat+" katlı evde "+" Yemek yeniliyor..");
    }
}

let ev = new Ev(3,4,5);
ev.yemekYe();
console.log(ev.kat);


class Kisi 
{
    private _mesaj : string;

    get mesaj():string{
        return "Bu mesaj içeriği: "+ this._mesaj;
    }

    set mesaj(icerik:string){
        this._mesaj = icerik;
    }

    protected isim: string;
    private tcno:number;
    kaydet()
    {
        console.log("Kaydet");
    }
}

class Musteriler extends Kisi 
{
    satisYap()
    {
        this.isim;
        //this.tcNo  --GELMEZ
        console.log("Satis Yap");
    }
}

class Personel extends Kisi
{
    maasAl()
    {
        console.log("Maas Al");
    }
}

let musteri = new Musteriler();
musteri.mesaj = "Deneme mesajı";
console.log(musteri.mesaj);

musteri.kaydet();
musteri.satisYap();

let personel = new Personel();
personel.kaydet();
personel.maasAl();
