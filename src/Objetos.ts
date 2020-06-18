//Objeto Basico
let person1 = {
    nombre:"Jose",
    edad:24,
    direccion:["av.Reforma","av.Independencia"]
};

//Objeto con un tipo especifico
let personData:{nombre:string,edad:number,direccion:string[]} = {
    nombre:"Jose",
    edad:24,
    direccion:["av.Reforma","av.Independencia"]
};
// metodo dentro de objetos
let personDataMethod:{nombre:string,edad:number,direccion:string[],getNombre:()=>string} = {
    nombre:"Jose",
    edad:24,
    direccion:["av.Reforma","av.Independencia"],

    getNombre(){
        return this.nombre;
    }
};

// Objetos personalizables
type Person={
    nombre:string,
    edad:number,
    direccion:string[]
};

let ObjetoPersonalizado:Person={
    nombre:"Angel",
    edad:23,
    direccion:["dir","dir2"]
}

// Multiples tipos en una variable
let v1:string|number="Angel";
    v1=10;