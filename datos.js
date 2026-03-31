let a = "";

function mostrarPantalla(valor) {
    document.getElementById("mostrar").innerText = valor;
}

function escribir(n) {
    a = a + n;
    mostrarPantalla(a);
}

function byte() {
    valor = Number(a);
    resultado = 
    "B= " + (valor) + "\n" +
    "KB= " + (valor / 1000) + "\n" +
    "MB= " + (valor / 1000000) + "\n" +
    "GB= " + (valor / 1000000000)
    mostrarPantalla(resultado);
}

function kilobyte() {
    valor = Number(a);
    resultado = 
    "KB= " + (valor) + "\n" +
    "B= " + (valor * 1000) + "\n" +
    "MB= " + (valor / 1000) + "\n" +
    "GB= " + (valor / 1000000);
    mostrarPantalla(resultado);
}

function megabyte() {
    valor = Number(a);
    resultado =
    "MB= " + (valor) + "\n" +
    "B= " + (valor * 1000000) + "\n" +
    "KB= " + (valor * 1000) + "\n" +
    "GB= " + (valor / 1000);
    mostrarPantalla(resultado);
}

function gigabyte() {
    valor = Number(a);
    resultado =
    "GB= " + (valor) + "\n" +
    "KB= " + (valor * 1000000) + "\n" +
    "MB= " + (valor * 1000) + "\n" +
    "TB= " + (valor / 1000);
    mostrarPantalla(resultado);
}

function terabyte() {
    valor = Number(a);
    resultado = 
    "TB= " + (valor) + "\n" +
    "MB= " + (valor * 1000000) + "\n" +
    "GB= " + (valor * 1000) + "\n" +
    "PB= " + (valor / 1000);
    mostrarPantalla(resultado);
}

function petabyte() {
    valor = Number(a);
    resultado = 
    "PB= " + (valor) + "\n" +
    "TB= " + (valor * 100) + "\n" +
    "GB= " + (valor * 1000000) + "\n" +
    "MB= " + (valor * 1000000000);
    mostrarPantalla(resultado)
}