
function CalcularCuadrado() {
    var inputCuadrado = document.getElementById('ladoCuadrado');
    var lado = inputCuadrado.value;
    // if (lado == '') {
    //     alert('Debe ingresar un dato');
    // }
    if (parseInt(lado) <= 0) {
        alert('No se permiten números negativos');
    }
    var perimetro = lado * 4;
    var area = lado * lado;
    var perimetroCuadrado = document.getElementById('perimetroCuadrado');
    perimetroCuadrado.value = perimetro.toString();
    var areaCuadrado = document.getElementById('areaCuadrado');
    areaCuadrado.value = area.toString();

}

function LimpiarCuadrado() {
    var inputCuadrado = document.getElementById('ladoCuadrado');
    var perimetroCuadrado = document.getElementById('perimetroCuadrado');
    var areaCuadrado = document.getElementById('areaCuadrado');
    inputCuadrado.value = '';
    perimetroCuadrado.value = '';
    areaCuadrado.value = '';
}

