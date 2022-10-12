
    function acierto(lasTarjetas) {
        lasTarjetas.forEach(function(emoji){
            emoji.classList.add("acertada");
        });

        document.querySelector("#sonido-acierto").play();
    }

    function error(lasTarjetas) {
          lasTarjetas.forEach(function(emoji){
            emoji.classList.add("error");
        });

        document.querySelector("#sonido-error").play();

        setTimeout(
            function()  {
                lasTarjetas.forEach(function(emoji){
                    emoji.classList.remove("descubierta");
                    emoji.classList.remove("error");
                });
            }, 1000);

       
    }
