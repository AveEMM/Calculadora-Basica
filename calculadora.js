let acumulado = 0;
let numeroActual = "";
let operacionPendiente = "";

function actualizarPantalla(x) {
    let texto = x === "" ? "0" : x;
    document.getElementById("pantalla").innerText = "R= " + texto;
}

function escribir(n) {
    numeroActual += n;
    actualizarPantalla(numeroActual);
}

function operacion(simbolo) {
    if (numeroActual !== "") {
        acumulado = Number(numeroActual);
        numeroActual = "";
    }
    operacionPendiente = simbolo;
    console.log("R= " + simbolo + "" + acumulado);
}

function resultadoFinal() {
    let segundoNumero = Number(numeroActual);

    if (operacionPendiente === "+") acumulado += segundoNumero;
    if (operacionPendiente === "-") acumulado -= segundoNumero;
    if (operacionPendiente === "*") acumulado *= segundoNumero;
    if (operacionPendiente === "/") {
        if (segundoNumero !== 0) acumulado /= segundoNumero;
        else alert("NO SE PUEDE DIVIDIR ENTRE CERO");
    }

    numeroActual = acumulado.toString();
    actualizarPantalla(acumulado);
    numeroActual = "";
}

function borrar() {
    acumulado = 0;
    numeroActual = "";
    operacionPendiente = "";
    actualizarPantalla(0);
}