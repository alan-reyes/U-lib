function TirarDados() {
    var dado1 = document.getElementById('dado1');
    var dado2 = document.getElementById('dado2');
    var dado3 = document.getElementById('dado3');

    dado1.innerHTML = Math.floor(Math.random() * 6 + 1);
    dado2.innerHTML = Math.floor(Math.random() * 6 + 1);
    dado3.innerHTML = Math.floor(Math.random() * 6 + 1);

    checkLuck(dado1.innerHTML, dado2.innerHTML, dado3.innerHTML);
}

function checkLuck(dado1, dado2, dado3) {
    if (dado1 === dado2 && dado1 === dado3) {
        alert("Ganaste!");
    }

}