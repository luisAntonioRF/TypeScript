/**
 * Todo lo que venga por param juntalo en un arreglo
 */

 function restParam(name:string, ...param:string[]):string{
    return name+" "+param.join(" ");
 }

 let superman:string = restParam("Clark","Joseph","Kimpin");
 let ironMan:string = restParam("Edward","Anton","Stark");

 console.log(superman);
 console.log(ironMan);