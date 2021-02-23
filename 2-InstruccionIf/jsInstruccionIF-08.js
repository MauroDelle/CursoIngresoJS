function mostrar()

{

        var edad;
        var estado;
    
    
        edad = txtIdEdad.value;
        edad = parseInt(edad);
        estado = document.getElementById("estadoCivil").value;
    
        
    
        if ( ! (edad < 18 || estado != "Soltero") )
        {
        
            alert("Es soltero y no es menor");
    
    
    
        }
    
	


}