var grupoTarjetas = ["🦄", "🤡", "🤬", "🥵", "🤖", "🎃", "🐸"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

    function barajarTarjetas() {

        var resultado;

        

        resultado = totalTarjetas.sort(function() {
             return 0.5 - Math.random();
            });

        console.log(resultado);

        return resultado;
        
    }


    function reparteTarjetas() {

        var mesa = document.querySelector("#mesa");
        var tarjetasBarajadas = barajarTarjetas();

       mesa.innerHTML = " ";



       tarjetasBarajadas.forEach(function(emoji) {

            var tarjeta = document.createElement("div");

            tarjeta.innerHTML = 
            
            "<div class='tarjeta' data-valor= " + 
            emoji +
            ">" +
                "<div class='tarjeta__contenido'>" +
                emoji +
                "</div>" +
            "</div>";

            mesa.appendChild(tarjeta);
        
            });
    }


function descubrir() {
        var descubiertas;
        var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

        if (totalDescubiertas.length > 1) {
            return;
        }

        this.classList.add("descubierta");


        descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

        if (descubiertas.length < 2) {
            return;
        }

       
comparar(descubiertas);
    }

    function comparar(tarjetasAcomparar) {

 if (tarjetasAcomparar[0].dataset.valor === tarjetasAcomparar[1].dataset.valor) {
            acierto(tarjetasAcomparar);
        }else {
           error(tarjetasAcomparar); 
        }

    }

    function acierto(lasTarjetas) {
        lasTarjetas.forEach(function(emoji){
            emoji.classList.add("acertada");
        });
    }

    function error(lasTarjetas) {

        lasTarjetas.forEach(function(emoji){
            emoji.classList.remove("descubierta");
        });
    }


    reparteTarjetas();

    document.querySelectorAll(".tarjeta").forEach(function (emoji){

    emoji.addEventListener("click", descubrir);

    });

/*
var grupoTarjetas1 = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

var grupoTarjetas2 = ["🦄", "😺", "🎃", "🤖", "👽", "☠", "💀", "💩"];

var grupoTarjetas3 = ["🥓", "🍔", "🍟", "🌭", "🍕", "🍝", "🥪", "🌮"] ;

var totalTarjetas = grupoTarjetas1.concat(grupoTarjetas2, grupoTarjetas3);

var nuevoTotalTarjetas = totalTarjetas.push("test");

console.log(nuevoTotalTarjetas);

var arrayAnidado = [
    ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"],
    ["🦄", "😺", "🎃", "🤖", "👽", "☠", "💀", "💩"],
    ["🥓", "🍔", "🍟", "🌭", "🍕", "🍝", "🥪", "🌮"]
]

console.log(arrayAnidado[2] [5]);*/


// EJERCICIO: concatena grupoTarjetas consigo misma para duplicar
// los valores

// EJERCICIO: recorre el array de tarjetasBarajadas y para cada
// elemento, crea un div (cárgalo en una variable) y declara que su
// innerHTML es el div con la clase "tarjeta" y en el interior
// del mismo, un div con la clase "tarjeta__contenido".
// Añade además el valor del elemento como contenido de la tarjeta

// EJERCICIO: una vez has creado la tarjeta, y todavía dentro del
// loop, añade la tarjeta generada como "child" del nodo mesa.

// BONUS: podrías hacer que las tarjetas solo se repartieran cuando
// se apriete un botón que ponga "repartir cartas"