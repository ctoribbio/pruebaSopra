
//leemos el numero por prompt
function numeroPar(numero) {
    if(numero%2 == 0) {
        for(var i = numero; i>=0; i--) {
            if(i%2 == 0) {
                console.log(i)
            }
    }
}else{
    for(var i = numero; i>=1; i--) {
        if(i%2 != 0) {
            console.log(i)
        }
}
}
}
function leerNumero(){
   var x = prompt("Escriba el numero a trabajar por favor");
   while(isNaN(x)){
    x = prompt("Escriba un numero a trabajar por favor");
   }
   return x;
}

numeroPar(leerNumero());