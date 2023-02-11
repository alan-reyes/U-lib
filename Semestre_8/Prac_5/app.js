function crearTabla() {
    var valor = parseInt(prompt("Ingrese un número:"));
    var body = document.getElementById('body');

    for (var i = 1; i < 11; i++) {
        body.innerHTML += ' ' + valor + ' x ' + i + ' = ' + (valor * i) + '</p>';
    }
}

