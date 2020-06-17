/**
 * Se usa en Errores criticos o en funciones que 
 * nunca llegan al final por Ejemplo una Exception
 */

 function errorCritico(msm:string):never{
    throw  new Error(msm);
 }

 errorCritico("Esto es un Error critico");