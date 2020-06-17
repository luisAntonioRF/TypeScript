
function suma(x:number,y:number):number{
    return x+y;
}

function saludo_msn():void{
    console.log("Hola!!!!");
}

function mensaje(msn:string):string{
    return msn;
}

let miFunction:(a:number,b:number) => number;
    
miFunction = suma;
console.log(miFunction);