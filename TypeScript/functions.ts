function topla(x,y){
    return x+y;
}

function toplaType(x:number, y:number)
{
    return x+y;
}

let topla3 = function(x:number, y: number): number {
    return x+y;
}

console.log(topla(1,2));
console.log(topla("Enes",2));


//rest parametre
function davetEt(ilkDavetli:string, ...digerleri: string[]):string{
    return ilkDavetli + " " + digerleri.join(" ");
}

console.log(davetEt("Enes","Ayşe","Pınar","Talha"));