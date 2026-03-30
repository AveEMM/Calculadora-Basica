let a = "";

function mostrarPantalla(valor) {
    document.getElementById("mostrar").innerText = valor;
}

function escribir(n) {
    a = a + n;
    mostrarPantalla(a);
}

function mxnUsd() {
    mxUsa = Number(a) * 18.03;
    mostrarPantalla("MXN= " + Number(a) + "\n" + "USD= " + mxUsa); 
}

function mxnEur() {
    mxUe = Number(a) / 20.85;
    mostrarPantalla("MXN= " + Number(a) + "\n" + "EUR= " + mxUe);
}

function usdMxn() {
    usaMx = Number(a) / 18.03;
    mostrarPantalla("USD= " + Number(a) + "\n" + "MXN= " + usaMx);
}

function usdEur() {
    usaUe = Number(a) * 0.92;
    mostrarPantalla("USD= " + Number(a) + "\n" + "EUR= " + usaUe);
}

function eurMxn() {
    ueMx = Number(a) * 20.85;
    mostrarPantalla("EUR= " + Number(a) + "\n" + "MXN= " + ueMx);
}

function eurUsd() {
    ueUsd = Number(a) * 1.08;
    mostrarPantalla("EUR= " + Number(a) + "\n" + "USD= " + ueUsd);
}

function borrar() {
    a = "";
    mostrarPantalla(" ");
}