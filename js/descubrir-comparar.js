function descubrir() {
    var descubiertas;
    var tarjetasPendientes;
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    if (totalDescubiertas.length > 1) {
        return;
    }

    this.classList.add("descubierta");
    document
    .querySelector("#sonido-carta")
    .cloneNode()
    .play();

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");

    if (descubiertas.length < 2) {
        return;
    }

   comparar(descubiertas);

   actualizaContador();
   tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");

   if (tarjetasPendientes.length === 0) {
    console.log(finalizar);
    setTimeout(finalizar, 1000);
   }
}

function comparar(tarjetasAcomparar) {

if (tarjetasAcomparar[0].dataset.valor === tarjetasAcomparar[1].dataset.valor) {
        acierto(tarjetasAcomparar);
    }else {
       error(tarjetasAcomparar); 
    }

}
