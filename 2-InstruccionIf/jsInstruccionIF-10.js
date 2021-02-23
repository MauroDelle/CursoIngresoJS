function mostrar()
{

	var nota;

	nota = Math.round(Math.random() * 9 + 1);

			if (nota >= 9)
		{

			alert("Excelente Nota: " + nota);

		}
		else

			if (nota < 4)

		{

			alert("Vamos la proxima se puede Nota: " + nota);


		}
		else
		{

			alert("Aprobo Nota= " + nota);


		}


}