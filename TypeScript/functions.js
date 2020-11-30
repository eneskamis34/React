function topla(x, y) {
    return x + y;
}
function toplaType(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(1, 2));
console.log(topla("Enes", 2));
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + " " + digerleri.join(" ");
}
console.log(davetEt("Enes", "Ayşe", "Pınar", "Talha"));
