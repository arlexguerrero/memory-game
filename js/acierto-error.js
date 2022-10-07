
    function acierto(lasTarjetas) {
        lasTarjetas.forEach(function(emoji){
            emoji.classList.add("acertada");
        });
    }

    function error(lasTarjetas) {
          lasTarjetas.forEach(function(emoji){
            emoji.classList.add("error");
        });

        setTimeout(
            function()  {
                lasTarjetas.forEach(function(emoji){
                    emoji.classList.remove("descubierta");
                    emoji.classList.remove("error");
                });
            }, 1000);

       
    }
