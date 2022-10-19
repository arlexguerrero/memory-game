//Escribimos los Niveles Dinamicamente
escribeNiveles();

//asignamos los eventos iniciales

document.querySelectorAll(".reiniciar").forEach(function(emoji) {
    emoji.addEventListener("click", reiniciar);
});

document
.querySelector("#juego-normal")
.addEventListener("click", iniciaJuegoNormal);

document
    .querySelector("#juego-relax")
    .addEventListener("click", iniciaJuegoRelax);

document
    .querySelector("#controlNivel")
    .addEventListener("click", muestaMenuNiveles);

document
    .querySelector("#cierraNiveles")
    .addEventListener("click", ocultaMenuNiveles);

document.querySelectorAll(".nivel").forEach(function(elemento){
    elemento.addEventListener("click", cambiaNivel);

});

document.querySelector("#subir").addEventListener("click", cargaNuevoNivel);

document.querySelector("body").addEventListener("click", clickFueraDeMenu);

document.addEventListener("keydown", teclaEscCierraMenu);

//Mostramos pantalla de bienvenida
document.querySelector("#bienida").classList.add("visible");