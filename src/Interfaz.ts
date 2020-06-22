// Interfaz Basica
interface Xmen1{
    nombre:string,
    poder?:string //con el signo ? la propiedad es opcional
    //metodos en las interfaces
    regenerarse(nombreRal:string):void;
}

let wolverine:Xmen1 = {
    nombre:"Logan",
    poder:"Garras",
    regenerarse(x:string):void{
        console.log(x);
    }
}

function enviarXmen(xmen:Xmen1):void{
    console.log(`${xmen.nombre},${xmen.poder}`);
    xmen.regenerarse("logan1");
}

enviarXmen(wolverine);