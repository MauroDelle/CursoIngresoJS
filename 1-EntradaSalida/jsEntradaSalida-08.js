// Mauro Delle chiaie
function SacarResto()
{
	

	  var numero1	
	  var numero2
	  var resultado


	 numero1 = document.getElementById("txtIdNumeroDividendo").value;

	 numero1 = parseInt(numero1);


	 numero2 = document.getElementById("txtIdNumeroDivisor").value;


	 numero2 = parseInt(numero2);


	 resultado = numero1 % numero2;


	 alert("El Resto es " + resultado);


}
