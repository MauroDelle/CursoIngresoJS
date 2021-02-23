
/*una agencia de viajes debe sacar las tarifas de los viajes ,
 se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para
  vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un 
aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */


function mostrar()
{

	var estacion;
	var destino;
	var aumento;
	var descuento;
	var precioBase = 15000;
	var precioFinal;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;


	switch (estacion) 
	{
		case "Invierno":
				if( destino == "Bariloche")
				{

					aumento = (precioBase * 20) /100;
					precioFinal = precioBase + aumento;
				}
				else if( destino == "Mar del plata")
				{

					descuento = (precioBase * 20) / 100;
					precioFinal = precioBase + descuento;
				}
				else{

					descuento = (precioBase * 10) /100;
					precioFinal = precioBase + descuento;

				}
			//break;
		case "Verano":
				if( destino == "Bariloche")
				{

					descuento = (precioBase * 20) / 100;
					precioFinal = precioBase + descuento; 

				}
				else if( destino == "Mar del plata")
				{

					aumento = (precioBase * 20) / 100;
					precioFinal = precioBase + aumento;

				}
				else{

					aumento = (precioBase * 10) / 100;
					precioFinal = precioBase + aumento;

				}				
			//break;
		case "Otoño":
		case "Primavera":
			if(

				destino == "Bariloche" ||
				destino == "Cataratas" ||
				destino == "Mar del Plata"
				
			  ){

				aumento = (precioBase * 10) / 100;
				precioFinal = precioBase + aumento;


			  }
			  else{

				precioFinal = precioBase;

			  }
			//break;

			alert(" El precio final es $ " + precioFinal);

	}



}