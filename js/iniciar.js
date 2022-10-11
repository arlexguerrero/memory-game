function iniciar(){

    movimientos = 0;

    reparteTarjetas(grupoTarjetas[0]);
    document.querySelector("#mov").innerText = "00";
    document.querySelector("#endGame").classList.remove("visible");
    document.querySelector("#gameOver").classList.remove("visible");
    document.querySelector("#subeNivel").classList.remove("visible");

    document.querySelectorAll(".tarjeta").forEach(function (emoji){
    
    emoji.addEventListener("click", descubrir);
    
    });
}

iniciar();

document.querySelectorAll(".reiniciar").forEach(function(emoji){
    emoji.addEventListener("click", iniciar);
});


//iniciarCronometro();