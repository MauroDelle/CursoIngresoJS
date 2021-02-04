/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Sunombre
	var Suedad 
	var Suapellido
	



    Suapellido = prompt("Ingrese su Apellido");
	Sunombre = document.getElementById('txtIdNombre').value;
	Suedad   = document.getElementById("txtIdEdad").value;
    txtIdNombre.value = Suapellido;



	 alert("Tu nombre es " + Sunombre  + Suapellido + " y tenes " + Suedad  + "años" );



}

