/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//txtIdNombre

	var nombreDelEmpleado;

	nombreDelEmpleado = prompt("Ingrese El Nombre");

	txtIdNombre.value = nombreDelEmpleado;

}




/*
Entradas: prompt, id.value o document.getElementById("...").value
Procesos: concatenar (+)
Salidas: alert, console.log, document.write

*/
