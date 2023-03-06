
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

function CalcularRombo() {
    var DiagonalUnoRombo = document.getElementById('DiagonalUnoRombo');
    var DIagonalDosRombo = document.getElementById('DiagonalDosRombo');        

    var DiagonalUnoRombo = DiagonalUnoRombo.value;
    var DiagonalUnoRombo = DIagonalDosRombo.value;

    if (DiagonalUnoRombo == '' || DIagonalDosRombo == '') {
        return false;
    } else {
        if (parseInt(DiagonalUnoRombo) <= 0 || parseInt(DIagonalDosRombo) <= 0) {
            alert('No se permiten números negativos');
            LimpiarRombo();
        } else {
            var perimetro = baseRombo * 3;
            var area = (baseRombo * alturaRombo) / 2;
            var perimetroRombo = document.getElementById('perimetroRombo');
            perimetroRombo.value = perimetro.toString();
            var areaRombo = document.getElementById('areaRombo');
            areaRombo.value = area.toString();
        }
    }                

}

function LimpiarRombo() {
    var DiagonalUnoRombo = document.getElementById('DiagonalUnoRombo');
    var DIagonalDosRombo = document.getElementById('DiagonalDosRombo');         
    var perimetroRombo = document.getElementById('perimetroRombo');
    var areaRombo = document.getElementById('areaRombo');
    DiagonalUnoRombo.value = '';
    DIagonalDosRombo.value = '';
    perimetroRombo.value = '';
    areaRombo.value = '';
}

function CalcularPentagono() {
    var ladoPentagonoElement = document.getElementById('ladoPentagono');
    var ladoPentagono = ladoPentagonoElement.value;
    var apotemaPentagono = document.getElementById('apotemaPentagono').value;

    if (ladoPentagono == '' || ladoPentagono == '') {
        return false;
    } else {
        if (parseInt(ladoPentagono) <= 0 || parseInt(apotemaPentagono) <= 0) {
            alert('No se permiten números negativos');
            LimpiarPentagono();
        } else {
            var perimetro = ladoPentagono * 5;
            var area = (perimetro * apotemaPentagono) / 2;
            var perimetroPentagono = document.getElementById('perimetroPentagono');
            perimetroPentagono.value = perimetro.toString();
            var areaPentagono = document.getElementById('areaPentagono');
            areaPentagono.value = area.toString();
        }
    }                

}

function LimpiarPentagono() {
    var ladoPentagono = document.getElementById('ladoPentagono');
    var ApotemaPentagono = document.getElementById('ApotemaPentagono');
    var perimetroPentagono = document.getElementById('perimetroPentagono');
    var areaPentagono = document.getElementById('areaPentagono');
    ladoPentagono.value = '';
    ApotemaPentagono.value = '';
    perimetroPentagono.value = '';
    areaPentagono.value = '';
}

function CalcularHexagono() {
    var ladoHexagonoElement = document.getElementById('ladoHexagono');
    var ladoHexagono = ladoHexagonoElement.value;
    var ApotemaHexagono = document.getElementById('apotemaHexagono').value;

    if (ladoHexagono == '' || ladoHexagono == '') {
        return false;
    } else {
        if (parseInt(ladoHexagono) <= 0 || parseInt(ApotemaHexagono) <= 0) {
            alert('No se permiten números negativos');
            LimpiarHexagono();
        } else {
            var perimetro = ladoHexagono * 6;
            var area = (perimetro * ApotemaHexagono) / 2;
            var perimetroHexagono = document.getElementById('perimetroHexagono');
            perimetroHexagono.value = perimetro.toString();
            var areaHexagono = document.getElementById('areaHexagono');
            areaHexagono.value = area.toString();
        }
    }                

}

function LimpiarHexagono() {
    var ladoHexagono = document.getElementById('ladoHexagono');
    var apotemaHexagono = document.getElementById('apotemaHexagono');
    var perimetroHexagono = document.getElementById('perimetroHexagono');
    var areaHexagono = document.getElementById('areaHexagono');
    ladoHexagono.value = '';
    apotemaHexagono.value = '';
    perimetroHexagono.value = '';
    areaHexagono.value = '';
}

function CalcularCirculo() {
    var radioCirculoElement = document.getElementById('radioCirculo');
    var radioCirculo = radioCirculoElement.value;    

    if (radioCirculo == '' || radioCirculo == '') {
        return false;
    } else {
        if (parseInt(radioCirculo) <= 0) {
            alert('No se permiten números negativos');
            LimpiarCirculo();
        } else {
            var perimetro = (2 * 3.1416 * radioCirculo);
            var area = (3.1416 * radioCirculo) * (3.1416 * radioCirculo);
            var perimetroCirculo = document.getElementById('perimetroCirculo');
            perimetroCirculo.value = perimetro.toString();
            var areaCirculo = document.getElementById('areaCirculo');
            areaCirculo.value = area.toString();
        }
    }                

}

function LimpiarCirculo() {
    var ladoCirculo = document.getElementById('ladoCirculo');    
    var perimetroCirculo = document.getElementById('perimetroCirculo');
    var areaCirculo = document.getElementById('areaCirculo');
    ladoCirculo.value = '';    
    perimetroCirculo.value = '';
    areaCirculo.value = '';
}

