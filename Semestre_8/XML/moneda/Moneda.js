/* Se obtiene toda la colecci6n de objetos del documento. */
var MisDivs = document.getElementsByTagName("div");
/* Recorremos a cada uno de los objetos <div> obtenidos. Lo que se realiza
* dentro del ciclo for se aplica para cada uno de los objetos <div> de la
* coleccion.*/
for (i = 0; i < MisDivs.length; i++) {
    /* Se obtiene una version en texto del contenido del <div> como se trata
    * de un numero, se le aplica Ia separacion de millares con el simbolo
    * de coma ( , ). */
    var MiNum = Number(MisDivs[i].innerHTML).toLocaleString('en');
    /* Localizamos la posicion del punto decimal. */
    var PosPunto = MiNum.indexOf(".");
    /* Si no hay un punto decimal en Ia cifra, le agregamos uno junto con Ia
    * cifra de centavos correspondientes. */
    if (PosPunto === -1) {
        MiNum += ".00";
    }
    /* Si solo existe un decimal para los centavos, agregamos un cero
    * para representar a los centavos con dos decimales. */
    else if (MiNum.substring(PosPunto).length === 2) {
        MiNum += "0";
    }
    /* Se revisa si la conversion numerica del contenido del <div> actual es menor a cero */
    if (Number(MisDivs[i].innerHTML) < 0) {
        MiNum = MiNum.replace('-', '');
        MisDivs[i].classList.add('negMoney');
    } else {
        MisDivs[i].classList.add('enMoney');
    }
    MisDivs[i].innerHTML = MiNum;
}

