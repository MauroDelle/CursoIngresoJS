function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	

	switch (mesDelAño) {
		case "Febrero":
				alert("Este mes tiene 28 dias, o 29 si es bisiesto");		
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 dias");
		break;
			default:
				alert("este mes tiene 31 dias");

			break;
	}


	
	



}//FIN DE LA FUNCIÓN