/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "importeFinal"*/
function mostrardescuento()
{
	 let importe;
	 let importeFinal;
     let descuento;

	 importe = parseFloat(document.getElementById("txtIdSueldo").value);
	
	 descuento = importe * 25 / 100;


	 importeFinal = importe - descuento;

	 importeFinal = document.getElementById("txtIdResultado").value;


}
