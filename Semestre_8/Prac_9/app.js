function Proceso1() {
    // obtiene todos los parrafos en el doc
    var parrafos = document.getElementsByTagName('p');
    // solicita y guarda en index el numero proporcionado por el usuario entre 1 y el numero de parrafos
    var index = eval(prompt('Ver un nodo.\nDame un número entre 1 y ' + parrafos.length))
    index--;
    // validar si el usuario dio un numero en el rango correcto
    if (index >= 0 && index < parrafos.length) {
        PresentarParrafo(parrafos[index]);
    } else {
        alert('Tiene que colocar un número entre 1 y ' + parrafos.length);
    }
}

function Proceso2() {
    // obtiene todos los parrafos en el doc
    var parrafos = document.getElementsByTagName('p');
    // mostrar todos
    var parrafosString = "";
    for (var i = 0; i < parrafos.length; i++) {
        parrafosString += "nodeName: " + parrafos[i].nodeName + '\n' + 'innerHTML: \n' + parrafos[i].innerHTML + '\n';
    }
    alert(parrafosString);
}

function Proceso3() {
    // obtiene todos los parrafos en el doc
    var parrafos = document.getElementsByTagName('p');
    // mostrar todos
    for (var i = 0; i < parrafos.length; i++) {
        alert("nodeName: " + parrafos[i].nodeName + '\n' + 'innerHTML: \n' + parrafos[i].innerHTML + '\n');
    }
}

function Proceso4() {
    // obtener el valor proporcionado por el usuario
    var texto = prompt('Hola! Escribe un texto:', 'Aquí va el texto');
    if (texto != null && texto != "") {
        var parrafoNuevo = document.createElement('p');
        parrafoNuevo.innerHTML = texto;
        parrafoNuevo.style.color= 'red';
        document.body.appendChild(parrafoNuevo);
    }
}

function Proceso5() {
    // obtiene todos los parrafos en el doc
    var parrafos = document.getElementsByTagName('p');
    // obtener el valor proporcionado por el usuario
    var texto = prompt('Hola! Escribe un texto:', 'Aquí va el texto');
    if (texto != null && texto != "") {
        var parrafoNuevo = document.createElement('p');
        parrafoNuevo.innerHTML = texto;
        parrafoNuevo.style.color= 'red';
        var ultimoParrafo = parrafos[parrafos.length - 1];
        ultimoParrafo.parentNode.insertBefore(parrafoNuevo, ultimoParrafo.nextSibling)
    }
}

function PresentarParrafo(miParrafo) {
    alert('nodeName:' + miParrafo.nodeName + '\n' + 'innerHTML: \n' + miParrafo.innerHTML);
}