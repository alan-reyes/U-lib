function Agregar() {
    var cookieNombre = "";
    cookieNombre = "Nombre" + "=" + document.getElementById('Nombre').value;
    var cookieApellidos = "";
    cookieApellidos = "Apellidos" + "=" + document.getElementById('Apellidos').value;
    var cookieEdad = "";
    cookieEdad = "Edad" + "=" + document.getElementById('Edad').value;
    document.cookie = cookieNombre;
    document.cookie = cookieApellidos;
    document.cookie = cookieEdad;
}

function Recuperar() {
    var cookie = document.cookie;
    var cookies = cookie.split(';');
    var cookieNombre = cookies[0].split('=');
    var valorNombre = cookieNombre[1];
    document.getElementById('NombreShow').value = valorNombre;

    var cookieApellidos = cookies[1].split('=');
    var valorApellidos = cookieApellidos[1];
    document.getElementById('ApellidosShow').value = valorApellidos;

    var cookieEdad = cookies[2].split('=');
    var valorEdad = cookieEdad[1];
    document.getElementById('EdadShow').value = valorEdad;
}

function Borrar() {
    document.getElementById('Nombre').value = '';
    document.getElementById('Apellidos').value = '';
    document.getElementById('Edad').value = '';
    document.getElementById('NombreShow').value = '';
    document.getElementById('ApellidosShow').value = '';
    document.getElementById('EdadShow').value = '';

    document.cookie = '';
    document.cookie = 'Nombre=; expires=SUN, 01 Jan 2023 00:00:00 UTC';
    document.cookie = 'Apellidos=; expires=SUN, 01 Jan 2023 00:00:00 UTC';
    document.cookie = 'Edad=; expires=SUN, 01 Jan 2023 00:00:00 UTC';
    //document.cookie = 'path=; expires=SUN, 01 Jan 2023 00:00:00 UTC';
}