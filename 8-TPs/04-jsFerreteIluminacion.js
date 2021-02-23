/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{ 
    var marcLamparitas;
    var cantLamparitas;
    var precioLamparitas;
    var precioFinal;
    var descuentoLamp;
    var precioFinalDescuento;



    marcaLamparitas= Marca.value;
    cantLamparitas=txtIdCantidad.value;

    cantLamparitas=parseInt(cantLamparitas);
    precioLamparitas = 35;
    precioFinal = cantLamparitas * precioLamparitas;


    if(cantLamparitas<5)
    {
    
        alert("Usted compro " + cantLamparitas + "Lamparitas, y abona" + precioFinal);

    }
    
    else
    {

        if(cantLamparitas>5)
        {

            descuentoLamp=precioFinal*0.5;
            precioFinalDescuento=precioFinal+ descuentoLamp;

            alert("Usted compro" + cantLamparitas + "Lamparitas. Y tiene un 50% de descuento, por ende abona: " + precioFinalDescuento);



        }
        else
        {
            if(cantLamparitas == 5 && marcaLamparitas == "ArgentinaLuz")
            {
                descuentoLamp=precioFinal*0.4;
                precioFinalDescuento=precioFinal+descuentoLamp;

                alert ("Usted compro" + cantLamparitas + "Lamparitas. Y tiene un descuento del 40%, por ende abona: " + precioFinalDescuento);

            }
            else
            {
                if(cantLamparitas == 5)
                {
                    descuentoLamp=precioFinal*0.3;
                    precioFinalDescuento=precioFinal+descuentoLamp;

                    alert("usted compro " + cantLamparitas + "Lamparitas. Y tiene un descuento del 30%, por ende abona: " + precioFinalDescuento);

                }

            }

        }

    }

}

