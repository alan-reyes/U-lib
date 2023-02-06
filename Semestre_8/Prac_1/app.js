
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
    var largoRectanguloElement = document.getElementById('largoRectangulo');        
    var anchoRectanguloElement = document.getElementById('anchoRectangulo');        
    var largoRectangulo = largoRectanguloElement.value;
    var anchoRectangulo = anchoRectanguloElement.value;

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

function CalcularTriangulo() {
    var baseTrianguloElement = document.getElementById('baseTriangulo');        
    var alturaTrianguloElement = document.getElementById('alturaTriangulo');        
    var baseTriangulo = baseTrianguloElement.value;
    var alturaTriangulo = alturaTrianguloElement.value;

    if (baseTriangulo == '' || alturaTriangulo == '') {
        return false;
    } else {
        if (parseInt(baseTriangulo) <= 0 || parseInt(alturaTriangulo) <= 0) {
            alert('No se permiten números negativos');
            LimpiarTriangulo();
        } else {
            var perimetro = baseTriangulo * 3;
            var area = (baseTriangulo * alturaTriangulo) / 2;
            var perimetroTriangulo = document.getElementById('perimetroTriangulo');
            perimetroTriangulo.value = perimetro.toString();
            var areaTriangulo = document.getElementById('areaTriangulo');
            areaTriangulo.value = area.toString();
        }
    }                

}

function LimpiarTriangulo() {
    var baseTriangulo = document.getElementById('baseTriangulo');
    var alturaTriangulo = document.getElementById('alturaTriangulo');
    var perimetroTriangulo = document.getElementById('perimetroTriangulo');
    var areaTriangulo = document.getElementById('areaTriangulo');
    baseTriangulo.value = '';
    alturaTriangulo.value = '';
    perimetroTriangulo.value = '';
    areaTriangulo.value = '';
}



