
class Picture{

    id:number;
    title :string;

    constructor(id:number, title:string){
        this.id=id;
        this.title=title;
    }
}

const data1:Picture = new Picture(1,"herencia1");

console.log(data1);