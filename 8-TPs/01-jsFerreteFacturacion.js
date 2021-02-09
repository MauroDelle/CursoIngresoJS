/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


// Mauro Delle chiaie.

function Sumar () 
{


var numero1;
var numero2;
var numero3;
var suma;

numero1 = document.getElementById("txtIdPrecioUno").value;
    
numero1 = parseFloat(numero1);

numero2 = document.getElementById("txtIdPrecioDos").value;

numero2 = parseFloat(numero2);

numero3 = document.getElementById("txtIdPrecioTres").value;

numero3 = parseFloat(numero3);

suma = numero1 + numero2 + numero3;

alert("La suma es " + suma);


}
function Promedio () 
{

var numero1;
var numero2;
var numero3;
var suma;
var Promedio;


numero1 = document.getElementById("txtIdPrecioUno").value;
    
numero1 = parseFloat(numero1);

numero2 = document.getElementById("txtIdPrecioDos").value;

numero2 = parseFloat(numero2);

numero3 = document.getElementById("txtIdPrecioTres").value;

numero3 = parseFloat(numero3);

suma = numero1 + numero2 + numero3;

Promedio = suma / 3;

alert("El promedio es " + Promedio);


}
function PrecioFinal () 
{


var numero1;
var numero2;
var numero3;
var suma;
var Promedio;
var iva;
var importeFinal;

numero1 = document.getElementById("txtIdPrecioUno").value;
    
numero1 = parseFloat(numero1);

numero2 = document.getElementById("txtIdPrecioDos").value;

numero2 = parseFloat(numero2);

numero3 = document.getElementById("txtIdPrecioTres").value;

numero3 = parseFloat(numero3);

suma = numero1 + numero2 + numero3;


Promedio = suma / 3;


iva = suma *  21/100 ;

importeFinal = suma + iva;


alert("El precio final es " + importeFinal);



}