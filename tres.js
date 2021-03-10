


/*Ferrete lamparas 2.0 El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente,
cantidad de lamparas ,
marca (FelipeLamparas - ArgentinaLuz -Illuminatis),
precio por unidad,
precio total de esa compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)*/





function mostrar()
{
	let nombre;
	let cantidadlamparas;
	let marca;
	let preciounitario;
	let preciofinal;
	let preciototalsindescontar;
	let perdidafelipe;
	let preciofelipe;
	let acumfelipe=0;
	let contfelipe=0;
	let precioargentina;
	let perdidaargentina;
	let acumargentina=0;
	let contargentina=0;
	let precioiluminatis;
	let acumilu=0;
	let contilu=0;
	let respuesta;
	let perdidatotal;
	let promfelipe=0;
	let promargentina=0;
	let promilu=0;
	let masventas;

	
	

	do{
		nombre=prompt("Ingrese el nombre");

		cantidadlamparas = parseInt(prompt("Ingrese cantidad de lamparas a comprar"));
        while (isNaN(cantidadlamparas) || cantidadlamparas >= 0) {
            cantidadlamparas = parseInt(prompt("Error. Ingrese cantidad de lamparas a comprar"));
        }


		marca = prompt("Ingrese marca: FelipeLamparas/ArgentinaLuz/Illuminatis")
		while(marca !== "FelipeLamparas" && marca !== "ArgentinaLuz" && marca !== "Illuminatis" ){
			marca = prompt("Error. Ingrese marca: FelipeLamparas/ArgentinaLuz/Illuminatis");
		}


		preciounitario = parseInt(prompt("Ingrese el precio unitario"));
		while (isNaN(preciounitario) || preciounitario <= 0) {
		  preciounitario = parseInt(prompt("Error. Ingrese el precio unitario"));
		}


		preciototalsindescontar=cantidadlamparas*preciounitario;


//Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, 
//se aplica un descuento del 10% sobre la compra
//Si la marca es ArgentinaLuz y compra 3 o mas unidades, 
//el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:


//---------------a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
//---------------b) Cuanto "perdio" la empresa en concepto de descuentos.
//---------------c) El promedio de la cantidad de lamparas vendidas de cada marca.


		switch(marca){
				case "FelipeLamparas":
				if(cantidadlamparas>5){
					preciofelipe = preciototalsindescontar*0.9;
					perdidafelipe = preciototalsindescontar*0.1;
				} 
				acumfelipe+=cantidadlamparas;
				contfelipe++;
			break;

			case "ArgentinaLuz":

				if(cantidadlamparas>=3){
					precioargentina = preciototalsindescontar*0.95;
					perdidaargentina = preciototalsindescontar*0.05;
				} 
				acumargentina += cantidadlamparas;
				contargentina++;
			break;

			case "Illuminatis":
			precioiluminatis= preciototalsindescontar;
			acumilu += cantidadDeLamparas;
			contilu ++;

			break;
		}


		respuesta = prompt('Si desea ingresar otra persona ingrese "s"');
} while (respuesta == "s");
//-----------------------------FIN DO WHILE

//---------------------A
preciofinal=preciofelipe+precioargentina+precioiluminatis;

console.log("a) La empresa recauda: $"+preciofinal);

//-------------------B

perdidatotal=perdidaargentina+perdidafelipe;

console.log("b) La empresa perdio en descuentos: $"+perdidatotal);

//-------------------C


if (acumfelipe!=0){
	promfelipe=acumfelipe/contfelipe;
}else{
	promfelipe=0;
}
if (acumargentina!=0){
	promargentina=acumargentina/contargentina;
}else{
	promargentina=0;
}
if (acumilu!=0){
	promilu=acumilu/contilu;
}else{
	promilu=0;
}

console.log("c) Los promedios de cantidad de lamparas vendidas por marca son: FelipeLamparas; "+promfelipe+", ArgentinaLuz; "+promargentina+", e Illuminatis "+promilu);

//-----------------------D

if (contfelipe>contargentina&&contfelipe>contilu){
	masventas='FelipeLamparas';
		}else if(contargentina>=contfelipe&&contargentina>contilu)
		masventas="ArgentinaLuz";
		else{
			masventas="Illuminatis";
		}

console.log("d) La marca que mas ventas realizo es "+masventas);




}