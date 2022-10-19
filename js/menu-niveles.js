function escribeNiveles() {
    var menuNiveles = document.querySelector(".selecciona-nivel ul");
    niveles.forEach(function(elemento, indice){
        var controlNivel = document.createElement("li");
        controlNivel.innerHTML = 
        "<button class='nivel' data-nivel=" + 
        indice + 
        "> Nivel" + 
        (indice + 1) + 
        "</button>";
        menuNiveles.appendChild(controlNivel); 
    });
}

function cambiaNivel() {
    var nivel = parseInt(this.dataset.nivel);
    nivelActual = nivel;
     actualizaNivel();
     iniciar();
}

function muestraMenuNiveles(evento) {
    evento.stopPropagation();
    document.querySelector(".selecciona-nivel").classList.toggle("visible");
}

function ocultaMenuNiveles(evento) {
    document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickFueraDeMenu(evento) {
    if (evento.target.closet(".selecciona-nivel")) {
        return;
    }
    document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function teclaEscCierraMenu(evento) {
    if(evento.key === "Escape") {
        ocultaMenuNiveles();
    }
}