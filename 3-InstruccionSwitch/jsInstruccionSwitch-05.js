

/*1-con if
pedir a una persoan que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace*/



function mostrar()
{

	var hora
	
	hora = parseInt(document.getElementById("txtIdHora").value);
	
	switch (hora) 
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");	
			break;
		default:
			alert("No es de mañana");
			break;
	}


	


}