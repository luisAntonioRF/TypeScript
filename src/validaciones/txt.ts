namespace Validaciones{
    
    export function validarTxt(txt:string):boolean{
        if(txt.length>3){
            return true;
        }else{
            return false;
        }
    }

}