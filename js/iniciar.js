function iniciar(){

    movimientos = 0;

    reparteTarjetas();
    document.querySelector("#mov").innerText = "00";
    document.querySelector(".feedback").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function (emoji){
    
    emoji.addEventListener("click", descubrir);
    
    });
}

iniciar();

document.querySelector("#reiniciar").addEventListener("click", iniciar);

//iniciarCronometro();