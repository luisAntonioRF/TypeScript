class Apocalipsis{
    
    static instancia:Apocalipsis;

    private constructor(public nombre:string){

    }

    static getInstancia(){
        if(!Apocalipsis.instancia){
            Apocalipsis.instancia = new Apocalipsis("soy apocalipsis falso");
        }
        return Apocalipsis.instancia;
    }
    
}

let apocalipsisReal = Apocalipsis.getInstancia();
console.log(apocalipsisReal);
// let apocalipsis =  new Apocalipsis("soy apocalipsis falso");