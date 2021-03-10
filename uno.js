/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/


//Josue Suarez


function mostrar()
{

let nombre;
let sexo;
let puesto;
let sueldo;
let sexomayorsueldo;
let mayorsueldo;
let flagmayorsueldo=1;
let nombremujermayorsueldo;
let mujermayorsueldo;
let flagmujermayorsueldo=1;
let cantidadprogramadoresnobin=0;
let flagnobin=1;
let respuesta;
let acumprog=0;
let acuman=0;
let acumqa=0;
let contprog=0;
let contan=0;
let contqa=0;
let promprog=0;
let proman=0;
let promqa=0;


do{
	nombre = prompt("Ingrese el nombre");

	edad = parseInt(prompt("Ingrese edad"));
	while (isNaN(edad) || edad <= 0) {
	  edad = parseInt(prompt("Error. Ingrese edad"));
	}

	sexo = prompt(  "Ingrese sexo: masculino - femenino - no binario"  );
	while (  sexo != "masculino" &&  sexo != "femenino" &&  sexo != "no binario") {
	  sexo = prompt("Error. Ingrese sexo: masculino - femenino - no binario" );
	}

	  puesto = prompt("Ingrese su puesto: programador - analista - Qa");
	  while (obrasocial != "programador" && obrasocial != "analista" && obrasocial != "Qa") {
		obrasocial = prompt( "Error. Ingrese su puesto: programador - analista - Qa"  );
	  }

	sueldo = parseFloat(prompt("Ingrese sueldo entre 15000 y 70000"));
	while (isNaN(sueldo) || (sueldo < 15000 && sueldo>70000) ) {
	  sueldo = parseInt(prompt("Error. Ingrese sueldo entre 15000 y 70000"));
	}


	//-----------a) promedio de sueldos para cada puesto


	switch (puesto) {
		case "programador":
			acumprog+=sueldo;
			contprog++;
		  break;
		case "analista":
			acuman+=sueldo;
			contan++;
		  break;
		case "Qa":
			acumqa+=sueldo;
			contqa++;
		  break;
	  }



	//----------b) el sexo del que percibe el mayor sueldo

	if((flagmayorsueldo || sueldo>mayorsueldo)){
		sexomayorsueldo=sexo;
		mayorsueldo=sueldo;
		flagmayorsueldo=0
	}

//-------------c) el nombre del empleado femenino con mas sueldo
if(sexo=='femenino'&&(flagmujermayorsueldo || sueldo>mujermayorsueldo)){
	nombremujermayorsueldo=nombre;
	mujermayorsueldo=sueldo;
	flagmujermayorsueldo=0
}

//---------d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/
if(sexo=="no binario"&&(flagnobin ||(sueldo>=20000&&sueldo<=50000))){
cantidadprogramadoresnobin++;
flagnobin=0;
}





respuesta = prompt('Si desea ingresar otra persona ingrese "s"');
} while (respuesta == "s");
//-----------FIN WHILE


//---------------A
if (acumprog!=0){
	promprog=acumprog/contprog;
}else{
	promprog=0;
}
if (acuman!=0){
	proman=acuman/contan;
}else{
	proman=0;
}
if (acumqa!=0){
	promqa=acumqa/contqa;
}else{
	acumqa=0;
}
console.log ("A- Los promedios son; programador: $"+promprog+", analista; $"+proman+" y Qa; $"+ promqa);

//--------------B

console.log ("b- el sexo del que tiene mas sueldo es"+sexomayorsueldo);

//--------------C
if (flagmujermayorsueldo==0){
console.log ("c- el sexo de la mujer que tiene mas sueldo es"+nombremujermayorsueldo);
}else{
	console.log ("c- no se ingresaron mujeres");

}

//-----------------D
if (flagnobin==0){
	console.log ("d- La cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000 es:" + cantidadprogramadoresnobin);
	}else{
		console.log ("b- no se ingresaron personas no binarias");
	
	}















}