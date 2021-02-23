/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingresa un numero");
		numeroIngresado = parseInt (numeroIngresado);
		if(banderaDelPrimero == "es el primer numero"){

			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "no es el primer numero"
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}

		}

		respuesta = prompt ("¿Queres ingresar otro numero?");

	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN