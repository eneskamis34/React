var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this.kat + " katlı evde " + " Yemek yeniliyor..");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev.kat);
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "mesaj", {
        get: function () {
            return "Bu mesaj içeriği: " + this._mesaj;
        },
        set: function (icerik) {
            this._mesaj = icerik;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kaydet");
    };
    return Kisi;
}());
var Musteriler = /** @class */ (function (_super) {
    __extends(Musteriler, _super);
    function Musteriler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Musteriler.prototype.satisYap = function () {
        this.isim;
        //this.tcNo  --GELMEZ
        console.log("Satis Yap");
    };
    return Musteriler;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasAl = function () {
        console.log("Maas Al");
    };
    return Personel;
}(Kisi));
var musteri = new Musteriler();
musteri.mesaj = "Deneme mesajı";
console.log(musteri.mesaj);
musteri.kaydet();
musteri.satisYap();
var personel = new Personel();
personel.kaydet();
personel.maasAl();
