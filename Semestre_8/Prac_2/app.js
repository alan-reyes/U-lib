function Restar() {
    var Percepciones = document.getElementById('Percepciones');
    var Deducciones = document.getElementById('Deducciones');
    var PercepcionesValue = Percepciones.value;
    var DeduccionesValue = Deducciones.value;

    if (PercepcionesValue == '' || DeduccionesValue == '') {
        return false;
    } else {
        if (parseInt(PercepcionesValue) <= 0 || parseInt(DeduccionesValue) <= 0) {
            alert('No se permiten números negativos');
            Percepciones.value = '';
            Deducciones.value = '';
        } else {
            var resta = PercepcionesValue - DeduccionesValue;
            var SalarioNeto = document.getElementById('SalarioNeto');
            SalarioNeto.value = resta.toString();
        }
    }
}


