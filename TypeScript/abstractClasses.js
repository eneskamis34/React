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
var KrediBase = /** @class */ (function () {
    function KrediBase() {
    }
    KrediBase.prototype.kaydet = function () {
        console.log("Kaydedildi...");
    };
    return KrediBase;
}());
var TuketiciKredisi = /** @class */ (function (_super) {
    __extends(TuketiciKredisi, _super);
    function TuketiciKredisi() {
        return _super.call(this) || this;
    }
    TuketiciKredisi.prototype.hesapla = function () {
        console.log("Tüketici Kredisi Hesaplandı.");
    };
    return TuketiciKredisi;
}(KrediBase));
var KonutKredisi = /** @class */ (function (_super) {
    __extends(KonutKredisi, _super);
    function KonutKredisi() {
        return _super.call(this) || this;
    }
    KonutKredisi.prototype.hesapla = function () {
        console.log("Konut Kredisi Hesaplandı.");
    };
    return KonutKredisi;
}(KrediBase));
var tuketicikredisi = new TuketiciKredisi();
tuketicikredisi.kaydet();
tuketicikredisi.hesapla();
var konutkredisi = new KonutKredisi();
konutkredisi.hesapla();
konutkredisi.kaydet();
var kredi;
kredi = new TuketiciKredisi();
kredi = new KonutKredisi();
