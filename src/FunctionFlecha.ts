
function sumaNum(a:number,b:number):number{
    return a+b;
}

//flecha 
let sumar= (a:number,b:number) => a+b; 

console.log(sumar(2,3));

function orden_hulk(orden:string):string{
    return `ORDEN ${orden}`;
}

let orden_hulk2 = (orden:string) => `La orden es: ${orden}`;