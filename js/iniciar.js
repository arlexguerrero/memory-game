function iniciar(){
    movimientos = 0;
    
    reparteTarjetas();

    document.querySelectorAll(".tarjeta").forEach(function (emoji){
    
    emoji.addEventListener("click", descubrir);
    
    });
}

iniciar();

//iniciarCronometro();