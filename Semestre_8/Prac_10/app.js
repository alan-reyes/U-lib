function MarcarBorde() {
    var tablita = document.getElementById('miTablita');
    tablita.style.border = 'solid 1px red';
    
    var tbody = tablita.childNodes[1];
    // border para cada td
    for (var i = 0; i < tbody.children.length; i++) { // recorre los tr
        for (var j = 0; j < tbody.children[i].children.length; j++) { // recorre los td
            tbody.children[i].children[j].style.border = 'solid 1px red';
        }   
    }

}