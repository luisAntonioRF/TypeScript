interface Xmen{
    nombre:string;
    nombreReal:string;
    regenerar1(nombreReal:string):void;
}

class Mutantes implements Xmen{

    nombre:string="";
    nombreReal:string="";

    regenerar1(nombreReal:string):void{
        console.log("regenerar"+nombreReal);
    }
}