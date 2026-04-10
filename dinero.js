let a = "";

function mostrarPantalla(valor) {
    document.getElementById("mostrar").innerText = valor;
}

function escribir(n) {
    a = a + n;
    mostrarPantalla(a);
}

function mxnUsd() {
    mxUsa = Number(a) * 17.36;
    mostrarPantalla("MXN= " + Number(a) + "\n" + "USD= " + mxUsa); 
}

function mxnEur() {
    mxUe = Number(a) / 20.30;
    mostrarPantalla("MXN= " + Number(a) + "\n" + "EUR= " + mxUe);
}

function usdMxn() {
    usaMx = Number(a) / 17.36;
    mostrarPantalla("USD= " + Number(a) + "\n" + "MXN= " + usaMx);
}

function usdEur() {
    usaUe = Number(a) * 0.86;
    mostrarPantalla("USD= " + Number(a) + "\n" + "EUR= " + usaUe);
}

function eurMxn() {
    ueMx = Number(a) * 20.31;
    mostrarPantalla("EUR= " + Number(a) + "\n" + "MXN= " + ueMx);
}

function eurUsd() {
    ueUsd = Number(a) * 1.16;
    mostrarPantalla("EUR= " + Number(a) + "\n" + "USD= " + ueUsd);
}

function borrar() {
    a = "";
    mostrarPantalla(" ");
}
