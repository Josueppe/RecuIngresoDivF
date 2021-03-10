/*Enunciado:
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
Curso de ingreso UTN FRA*/


//Josue Suarez

function mostrar()
{
   
    let nombre;
    let carrera;
    let sexo;
    let cantidadmaterias;
    let notapromedio;
    let edad;
    let i;
    let mejorpromfisica;
    let nombremejorpromfisica;
    let flagpromediofisica = 1;
    let nombrealumnajoven;
    let flagalumnajoven = 1;
    let edadalumnajoven;
    let contfis = 0;
    let contquim = 0;
    let contsis = 0;
    let contalumnostotales = 0;
    let flagestudiantemascursa = 1;
    let edadestudiantemayormaterias;
    let mayormateriascursando;
    let nombreestudiantemayormaterias;
    let porcentajesis;
    let porcentajequim;
    let porcentajefis;




    for (i = 0; i < 500; i++) {


        nombre = prompt("Ingrese nombre");


        carrera = prompt('Ingrese carrera: "Quimica", "Fisica", "Sistemas"');
        while (carrera != "Quimica" && carrera != "Fisica" && carrera != "Sistemas") {
            carrera = prompt('Error. Ingrese carrera: "Quimica", "Fisica", "Sistemas"');
        }


        sexo = prompt("Ingrese sexo masculino, femenino, no binario");
        while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
            sexo = prompt("Error. Ingrese sexo masculino, femenino, no binario");

        cantidadmaterias = parseInt(prompt("Ingrese cantidad de materias (entre 1 y 5)"));
        while (isNaN(cantidadmaterias) || (cantidadmaterias < 1 || cantidadmaterias > 5)) {
            cantidadmaterias = parseInt(prompt("Error. Ingrese cantidad de materias (entre 1 y 5)"));
        }



        notapromedio = parseFloat(prompt("Ingrese nota promedio (entre 0 y 10)"));
        while (isNaN(notapromedio) && (notapromedio < 0 || notapromedio > 10 ) ) {
            notapromedio = parseFloat(prompt("Error. Ingrese nota promedio (entre 0 y 10)"));
        }

        edad = parseInt(prompt("Ingrese su edad"));
        while (isNaN(edad)||edad <= 0) {
            edad = parseInt(prompt("Error. Ingrese su edad"));
        }

//-----------a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).

        if (carrera == "Fisica" && (flagpromediofisica || notapromedio > mejorpromfisica)) {
            mejorpromfisica = notapromedio;
            nombremejorpromfisica = nombre;
            flagpromediofisica = 0;
        }

        //------------------------------------- b) El nombre de la alumna mas joven.

        
            if (sexo == "f"&&(flagalumnajoven || edad < edadalumnajoven)) {
                edadalumnajoven = edad;
                nombrealumnajoven = nombre;
                flagMujerJoven = 0;
            }
        

        //--------------------c) Porcentaje de estudiantes que estudia cada carrera.

        if (carrera == "Fisica") {
            contfis++;
        } else if (carrera == "Quimica") {
            contquim++;
        } else {
            contsis++;
        }

        contalumnostotales++;


//-------------------d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.

        if (carrera != "Quimica" && (flagestudiantemascursa || cantidadmaterias > mayormateriascursando)) {
            nombreestudiantemayormaterias = nombre;
            mayormateriascursando = cantidadmaterias;
            edadestudiantemayormaterias = edad;

            flagestudiantemascursa = 0;

        }

    } //----------------FIN FOR


    //-------------------------------A
    if (flagpromediofisica == 0) {
        console.log("a) El nombre del mejor promedio de los alumnos que estudian Fisica es :"+nombremejorpromfisica);
    } else {
        console.log("No se ingresaron alumnos que estudien fisica");
    }


    //--------------------------------------- B
    if (flagalumnajoven == 0) {
        console.log("b) El nombre de la alumna mas joven es : "+nombrealumnajoven);
    } else {
        console.log("No se ingresaron alumnas mujeres");
    }

    //----------------------------------C

    if (contfis!=0){
    porcentajefis = (contfis * 100) / contalumnostotales
    }else{
        porcentajefis=0;
    }

    if (contquim!=0){
    porcentajequim = (contquim * 100) / contalumnostotales;
    }else{
        porcentajequim=0;
    }

    if (contsis!=0){
    porcentajesis = (contsis * 100) / contalumnostotales;
    }else{
        porcentajesis=0;
    }


    console.log("c) Los porcentajes de los que estudian son;  Fisica" + porcentajefis+", Quimica "+porcentajequim+" y  Sistemas "+porcentajesis);


    //--------------------------D
    if (flagestudiantemascursa == 0) {
        console.log("d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica son: "+nombreestudiantemayormaterias+", "+edadestudiantemayormaterias+" años");
    } else{
        console.log("d) Los estudiantes ingresados solo estudian quimica");

    }    




}
