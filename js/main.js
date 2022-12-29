let confirmar = true

do {
    //-----------Suma de productos--------

function sumarTotalDePeliculas (peli1=0,peli2=0,peli3=0){
    return peli1+peli2+peli3
}

//----------Calculo de IVA----------

const calcularIva = productosFinalesSinIva => productosFinalesSinIva*0.21

//--------Formas de pago---------

function tipoDePago (opciones,pagoEfectivo,pagoTarjeta){
    switch (opciones) {
        case "1":
            return  alert(("Los pagos en efectivo tienen un descuento del 15%, su total seria de $")+(pagoEfectivo/1.15))
            
        case "2":
            return alert(("Los pagos con tarjeta de credito tienen un recargo de 15%, su total seria de $")+(pagoTarjeta*1.15))
    
        default: alert("No pudimos procesar tu operacion")
        
        
    }
}

//-----Bienvenido a nuestro sitio web----

do {
    let bienvenida = prompt("Bienvenido a nuestro sitio web .Aqui encontraras todas tus peliculas y al mejor precio , por favor, ingrese su nombre")

if (bienvenida== "") {
    alert("No pudimos registrar el nombre ingresado, por favor, vuelva a ingresar su nombre")
}else { 
    alert("Hola " + bienvenida + " ,esperamos que encuentres todo lo que buscas en nuestro sitio web")
}
} while (confirm("¿Desea reingresarlo?"));

alert ("En esta seccion podra ver los montos totales de su carrito y elegir los medios de pago que prefiera")


//-----Variables de productos------

let pelicula1= Number(prompt("Ingresa el primer valor"))
let pelicula2= Number(prompt("Ingresa el Segundo valor"))
let pelicula3= Number(prompt("Ingresa el Tercer valor"))

let productosFinales = sumarTotalDePeliculas(pelicula1,pelicula2,pelicula3)
alert("El monto total es de $" +productosFinales)

let ivaDeLosProductos = calcularIva(productosFinales)
alert ("El IVA de su compra seria de $" +ivaDeLosProductos)

//-------Suma de IVA al total de productos---------

let productoFinalConIva = sumarTotalDePeliculas(productosFinales,ivaDeLosProductos)
alert("Su total a pagar seria de $" +productoFinalConIva)

//-------Calculo de descuento-----

let calcularDescOInt = prompt ("Ingresa tu forma de pago preferida \n 1 Para pagar en efectivo \n 2 Para pagar con tarjeta de credito")

let precioFinalMasDesc = tipoDePago(calcularDescOInt,productoFinalConIva,productoFinalConIva)
confirm("¿Desea realizar esta compra?")

} while (confirm ("¿Quiere seguir comprando?")){

}

alert("Gracias por visitar nuestro sitio web")

