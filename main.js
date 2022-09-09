/* Funcion que aplica el estilo a la opcion seleccionada
    y que quita lo previamente seleccinonado */

function seleccionar (link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // Ocultamos el menu - seleccionando opcion

    var x = document.getElementById('nav');
    x.className = "";
}

// Funcion que muestra el menu responsive

function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === ""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}