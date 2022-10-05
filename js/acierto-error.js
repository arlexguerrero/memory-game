
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
