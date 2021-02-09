/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "importeFinal"*/
function mostrarDescuento()
{

	var importe;
	var resultado;
	var descuento;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	//valorDescuento = importe * 25/100;
	valorDescuento = importe * 0.25;

	resultado = importe - valorDescuento;

	txtIdResultado.value = resultado;








}





/*txtIdImporte
txtIdResultado
*/