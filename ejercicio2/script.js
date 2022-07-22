//clase Persona con 3 datos

class Persona {
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        //Masculino = 1 | Femenino = 0 
        this.sexo = sexo;
    }
}
//array visible publico para almacenar
var lista = new Array();
// He entendido que deberia ser aleatoria la lectura para no hacer escribir a mano 50 personas.
function leerPersonas(){
    for(var i = 0; i<50 ; i++){
        var nombre = "Persona"+i
        //Random number 0-99 for age asign
        
        var edad = Math.floor(Math.random() * 100)
        //Random number 0/1 for sex assign
        var sexo = Math.floor(Math.random() * 2)
        
        
        var p  = new Persona(nombre,edad,sexo)
        lista.push(new Persona(nombre,edad,sexo));
    }
}

//hacemos calculos de numero de gente por cada peticion 
function getData(){
    var mayoresEdad=0,menoresEdad=0,mMayoresEdad=0,fMenoresEdad=0,porcMayoresEdad=0,porcMujeres=0,mujeres = 0

    for(var i = 0 ; i<lista.length; i++){
        if(lista[i].edad >= 18){
            mayoresEdad++
            if(lista[i].sexo == 1){
                mMayoresEdad++
            }
        }else{
            menoresEdad++
            if(lista[i].sexo == 0){
                fMenoresEdad++
            }
        }

        if(lista[i].sexo == 0){
            mujeres++
        }


    }

    porcMayoresEdad = (mayoresEdad/50)*100
    porcMujeres = (mujeres/50)*100

    console.log("Numero de mayores de edad "+mayoresEdad)
    console.log("Numero de menores de edad "+menoresEdad)
    console.log("Numero de Hombres mayores de edad "+mMayoresEdad)
    console.log("Numero de Mujeres menores de edad "+fMenoresEdad)
    console.log("% de Mayores de edad "+porcMayoresEdad)
    console.log("% de Mujeres "+porcMujeres)
}

leerPersonas()
getData()