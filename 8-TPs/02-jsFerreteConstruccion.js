/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


// Mauro Delle chiaie 1H
function Rectangulo () 
{



    var ancho;
    var largo;
    var perimetro;
    var alambre;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho =parseInt(document.getElementById("txtIdAncho").value);
    perimetro = (ancho + largo) * 2;

    alambre = perimetro * 3;


    alert("Necesitas " + alambre + "metros");




}
function Circulo () 
{
    var perimetro;
    var radio;
    var alambre;
    const PI = 3.14;

    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * PI * radio;

    alambre = perimetro * 3;

    alert("Tiene que comprar" + alambre + " metros de alambre");
}
function Materiales () 
{
    
    var ancho;
    var largo;
    var area;
    var cemento = 2;
    var cal = 3;
    const cementopormetro = 2;
    const calpormetro = 3;

    largo = parseInt(document.getElementById("txtidLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);


    area = largo * ancho;

    cemento = area * 2;
    cal = area * 3; 

    alert("para un contrapiso de " + area + "m2 necesito comprar " + cemento + "cemento y " + cal + "bolsas de cal ");





}