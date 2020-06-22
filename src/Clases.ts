// clase basica

class Avenger{
   public   nombre:string="";
   private  equipos:string="";
   protected nombreReal:string="";
    pelear:boolean=true;

    constructor(nombre:string,equipos:string,nombreReal:string,pelear:boolean){
        this.nombre=nombre;
        this.equipos=equipos;
        this.nombreReal=nombreReal;
        this.pelear=pelear;
    }
}

let antman =new Avenger("AntMan","Justicia","Jhon Call",true);

console.log(antman);

