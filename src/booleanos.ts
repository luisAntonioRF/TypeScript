
//declarar variale 
let isSuperman:boolean=true; //forma 1
let isBatman:boolean;   //forma 2
let isAcuaman=true;     //forma 3

if(isSuperman){
    console.log("Estamos Salvados!!")
}else{
    console.log("Problemas!!");
}

isSuperman=convertirClark();

if(isSuperman){
    console.log("Estamos Salvados!!")
}else{
    console.log("Problemas!!");
}

function convertirClark(){
    return false;
}