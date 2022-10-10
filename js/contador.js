function actualizaContador() {
    var movimientosTexto;
    movimientos++;
    movimientosTexto = movimientos;

    if (movimientosTexto < 10) {
        movimientosTexto = "0" + movimientos;

    }

    document.querySelector("#mov").innerText = movimientosTexto;
}