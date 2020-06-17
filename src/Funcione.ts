//****************Funcion Basica******************
let personaje:string="Superman";

function imprime_persona():string{
    return personaje;
}

//asignar una funcion a una variable
let activarDato = function data_use():string{
    return "datos Activados!!!";
}

// console.log(imprime_persona());
// console.log(activarDato());
//****************Funcion Con Parametro Obligatorios ******************

function fullName(nombre:string,app:string):string{
    return `Nombre:${nombre},App:${app}`;
}

let nombre_completo = fullName("Jose","Martinez");
// console.log(nombre_completo);
//****************Funcion Con Parametro Opcionales ******************
function fullName2(nombre:string,app?:string):string{
    return `Nombre:${nombre},App:${app}`;
}

 nombre_completo = fullName2("Akon");
// console.log(nombre_completo);

//****************Funcion Con Parametro Por Defecto ******************
function fullName3(nombre:string,app:string,capitaliazado:boolean=false):string{
    if(capitaliazado){
       return capitalizar(nombre) + capitalizar(app);
    }else{
        return `Nombre:${nombre},App:${app}`;
    }
    
}

function capitalizar(palabra:string):string{
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}

console.log(fullName3("angel","lopez"));