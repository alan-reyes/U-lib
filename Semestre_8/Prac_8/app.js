function AgregarCookie() {
    var cookieNombreCompleto = "";
    cookieNombreCompleto = "NombreCompleto" + document.getElementById('NombreCompleto').value + "=" + document.getElementById('NombreCompleto').value;
    var cookieNoControl = "";
    cookieNoControl = "NoControl" + document.getElementById('NoControl').value + "=" + document.getElementById('NoControl').value;
    document.cookie = cookieNombreCompleto;
    document.cookie = cookieNoControl;

    //RefreshSelect();
}

function RefreshSelect() {
    RecuperarCookie();
}

function RecuperarCookie() {
    var cookie = document.cookie;
    var cookies = cookie.split(';');

    var select = document.getElementById('cookiesSelect');

    var cookieNoControl = "";
    // recorremos las cookies
    for (var i = 0; i < cookies.length; i++) {
        if (cookies[i].includes('NoControl')) {
            cookieNoControl = cookies[i].split('=');
            //select.appendChild('<option value="' + cookieNoControl[1] + '">' + cookieNoControl[1] + '</option>')
        } else {
            continue;
        }
    }    
}