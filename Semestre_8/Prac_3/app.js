function CalcularSubtotal() {
    // obtener todas las cantidades
    var cantidad1 = document.getElementById('Producto1Cantidad');
    var cantidad2 = document.getElementById('Producto2Cantidad');
    var cantidad3 = document.getElementById('Producto3Cantidad');
    var cantidad4 = document.getElementById('Producto4Cantidad');
    var cantidad5 = document.getElementById('Producto5Cantidad');

    var precio1 = document.getElementById('Producto1Precio');
    var precio2 = document.getElementById('Producto2Precio');
    var precio3 = document.getElementById('Producto3Precio');
    var precio4 = document.getElementById('Producto4Precio');
    var precio5 = document.getElementById('Producto5Precio');

    var subTotal1 = document.getElementById('Producto1Subtotal');
    subTotal1.value = (cantidad1 * precio1).toString();

    var subTotal2 = document.getElementById('Producto2Subtotal');
    subTotal2.value = (cantidad2 * precio2).toString();

    var subTotal3 = document.getElementById('Producto3Subtotal');
    subTotal3.value = (cantidad3 * precio3).toString();

    var subTotal4 = document.getElementById('Producto4Subtotal');
    subTotal4.value = (cantidad4 * precio4).toString();

    var subTotal5 = document.getElementById('Producto5Subtotal');
    subTotal5.value = (cantidad5 * precio5).toString();

    CalcularTotal();

}

function CalcularTotal() {
    var subtotal1 = document.getElementById('Precio1Subtotal');

}