
function CalcularIMC() {
    var masa = document.getElementById("Masa").value;
    var Estatura = document.getElementById("Estatura").value;
    if (masa > 0 && Estatura > 0) {
        var masa = document.getElementById("Masa").value;
        var Estatura = document.getElementById("Estatura").value;
        var IMC = (masa / ((Estatura / 100) * (Estatura / 100))).toFixed(2);
        document.getElementById("IMC").value = IMC;
        if (IMC < 16) {
            document.getElementById("Riesgos").value = "Infrapeso: Dolencias pulmonares, anorexia nerviosa, desnutrición, etc...";
            document.getElementById("media").src = "imagenes/flaco.jpg";
        }
        else if (IMC < 18.5) {
            document.getElementById("Riesgos").value = "Delgadez: Sin Riesgo, pero con la preocupación de no adelgazar más";
            document.getElementById("media").src = "imagenes/delgado.jpg";

        }
        else if (IMC < 25) {
            document.getElementById("Riesgos").value = "Normal: Estado saludable";
            document.getElementById("media").src = "imagenes/normal.jpg";

        }
        else if (IMC < 26) {
            document.getElementById("Riesgos").value = "Sobrepeso: Sin riesgo, pero con precaución de no engordar más";
            document.getElementById("media").src = "imagenes/sobrepeso.jpg";
        }
        else if (IMC < 30) {
            document.getElementById("Riesgos").value = "Obesidad Tipo I: Sobrecarga de articulaciones, cansancio y un cierto riesgo de enfermedades cardiovasculares";
            document.getElementById("media").src = "imagenes/obesidad1.jpg";

        }
        else if (IMC < 35) {
            document.getElementById("Riesgos").value = "Obesidad tipo II: Problemas cardíacos, diabetes, hipertensión, enfermedades de vesícula y algunos canceres";
            document.getElementById("media").src = "imagenes/obesidad2.jpg";
        }
        else if (IMC < 40) {
            document.getElementById("Riesgos").value = "Obesidad tipo III: Serios riesgos para la salud, disminución de la calidad de vida. Visita a tu medico";
            document.getElementById("media").src = "imagenes/obesidad3.jpg";
        }
        else {
            document.getElementById("Riesgos").value = "Obesidad Mórbida: Riesgo inmediato. Precisara, siempre bajo control medico, tratamiento farmacológico o quirúrgico";
            document.getElementById("media").src = "imagenes/obesidadm.jpg";
        }
    }
    else {
        document.getElementById("IMC").value = null;

    }
}
