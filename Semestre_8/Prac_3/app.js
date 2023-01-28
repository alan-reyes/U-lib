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

    $('#Precio1Subtotal').val((cantidad1 * precio1).toString());
    $('#Precio2Subtotal').val((cantidad2 * precio2).toString());
    $('#Precio3Subtotal').val((cantidad3 * precio3).toString());
    $('#Precio4Subtotal').val((cantidad4 * precio4).toString());
    $('#Precio5Subtotal').val((cantidad5 * precio5).toString());

    CalcularTotal();

}

function CalcularTotal() {
    var subtotal1 = document.getElementById('Precio1Subtotal');
}