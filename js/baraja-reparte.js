
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
