function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño) {
		case "Febrero":
			alert("Este mes no tiene mas de 29 días");							
			break;
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":		
			alert("Este mes tiene 30 o más días");
			break;
	}










	
	
	
	


}//FIN DE LA FUNCIÓN