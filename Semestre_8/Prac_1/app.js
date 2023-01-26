
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

function CalcularRectangulo() {
    var largoRectanguloE = document.getElementById('largoRectangulo');        
    var anchoRectanguloE = document.getElementById('anchoRectangulo');        
    var largoRectangulo = largoRectanguloE.value;
    var anchoRectangulo = anchoRectanguloE.value;

    if (largoRectangulo == '' || anchoRectangulo == '') {
        return false;
    } else {
        if (parseInt(largoRectangulo) <= 0 || parseInt(anchoRectangulo) <= 0) {
            alert('No se permiten números negativos');
            LimpiarRectangulo();
        } else {
            var perimetro = (largoRectangulo * 2) + (anchoRectangulo * 2);        
            var area = largoRectangulo * anchoRectangulo;
            var perimetroRectangulo = document.getElementById('perimetroRectangulo');
            perimetroRectangulo.value = perimetro.toString();
            var areaRectangulo = document.getElementById('areaRectangulo');
            areaRectangulo.value = area.toString();
        }
    }                

}

function LimpiarRectangulo() {
    var largoRectangulo = document.getElementById('largoRectangulo');
    var anchoRectangulo = document.getElementById('anchoRectangulo');
    var perimetroRectangulo = document.getElementById('perimetroRectangulo');
    var areaRectangulo = document.getElementById('areaRectangulo');
    largoRectangulo.value = '';
    anchoRectangulo.value = '';
    perimetroRectangulo.value = '';
    areaRectangulo.value = '';
}



