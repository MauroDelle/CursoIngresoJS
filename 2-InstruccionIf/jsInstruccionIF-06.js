function mostrar()
{
	
	var edad1


	edad1 = txtIdEdad.value;
	edad1 = parseInt(edad1);

	if( edad1 > 17)
	{
	alert("Sos mayor de edad");

	}
	else

		if( edad1 >12 && edad1 < 18 )
		{

			alert("Es Adolescente");
		
		}
		else
		{

			alert("Es un niño");


		}
		




}