//leemos las horas trabajadas por prompt
//idem para el salario


function leerHoras(){
    var x = prompt("Escriba el numero de horas a trabajar por favor");
    while(isNaN(x)){
     x = prompt("Escriba un numero de horas a trabajar por favor");
    }
    return x;
}

function leerTarifa(){
    var x = prompt("Escriba el precio por horas a trabajar por favor");
    while(isNaN(x)){
     x = prompt("Escriba un precio por horas a trabajar por favor");
    }
    return x;
}
//si las horas es inferior a 40 solo multiplicamos 
//si es superior multiplicamos tarifa x 40 y agregamos el resto de horas con la tarifa extra
//imprimimos por pantalla los datos
function calcularSalario(horas,tarifa) {
    var salario = 0
    if(horas<40){
        salario = horas * tarifa
    }else{
        salario = 40 * tarifa + ((horas-40) * (tarifa*1.5))
    }
    console.log("El salario es igual a "+salario+" €")
}

calcularSalario(leerHoras(),leerTarifa())