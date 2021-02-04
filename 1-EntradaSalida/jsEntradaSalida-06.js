/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el Resultadoo por medio de "ALERT"*/
function sumar()
{
	

      var numero1;
	  var numero2;
	  var Resultado;

	  
	  
	  numero1 = document.getElementById("txtIdNumeroUno").value;

	  numero1 = parseInt(numero1);

	  numero2 = document.getElementById("txtIdNumeroDos").value;
	  
	  numero2 = parseInt(numero2);

	  Resultado = numero1 + numero2;

	  alert("El Resultado es " + Resultado);


}

/*
             Notas.
	   parseInt() : Es para convertir un tipo de dato que no es numero a numero.
	 Castear: Es convertir un tipo de dato numerico en otro dato de tipo numerico  
     EJEMPLO: Si yo quiero convertir un entero en un flotante, los casteo. Son dos tipos de datos numericos.


	Ejemplo


		var x = "20";
        var y = "10";		
        var z;

		x = parseInt(x);                         cuando hay un igual primero 
	    y=  parseInt(y);                      se ejecuta lo que esta a la derecha	

		z = z + y;
		
		alert(z);






*/




// Mauro Delle chiaie