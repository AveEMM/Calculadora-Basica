let a = "";

function mostrarPantalla(valor) {
    document.getElementById("mostrar").innerText = valor;
}

function escribir(n) {
    a = a + n;
    mostrarPantalla(a);
}

function libra() {
    valor = Number(a);
    resultado =
    "lb= " + (valor) + "\n" +
    "oz= " + (valor * 16);
    mostrarPantalla(resultado);
}

function onza() {
    valor = Number(a);
    resultado =
    "oz= " + (valor) + "\n" +
    "lb= " + (valor / 16);
    mostrarPantalla(resultado);
}

function t() {
    valor = Number(a);
    resultado =
    "T= " + (valor) + "\n" +
    "Kg = " + (valor * 1000) + "\n" +
    "g= " + (valor * 1000000);
    mostrarPantalla(resultado);
}

function kg() {
    valor = Number(a);
    resultado = 
    "kg= " + (valor) + "\n" +
    "g= " + (valor * 1000) + "\n" +
    "mg= " + (valor * 1000000);
    mostrarPantalla(resultado);
}

function g() {
    valor = Number(a);
    resultado = 
    "g= " + (valor) + "\n" +
    "kg= " + (valor / 1000) + "\n" +
    "mg= " + (valor * 1000);
    mostrarPantalla(resultado);
}

function mg() {
    valor = Number(a);
    resultado = 
    "mg= " + (valor) + "\n" +
    "kg= " + (valor * 1000000) + "\n" +
    "g= " + (valor / 1000);
    mostrarPantalla(resultado);
}

function libraSI() {
    valor = Number(a);
    resultado = 
    "lb= " + (valor) + "\n" +
    "kg= " + (valor / 2.205) + "\n" +
    "g= " + (valor * 453.6) + "\n" +
    "mg= " + (valor * 453600);
    mostrarPantalla(valor);
}

function onzaSI() {
    valor = Number(a);
    resultado = 
    "oz= " + (valor) + "\n" +
    "kg= " + (valor / 35.274) + "\n" +
    "g= " + (valor * 28.35) + "\n" +
    "mg= " + (valor * 28350);
    mostrarPantalla(resultado);
}

function kgImp() {
    valor = Number(a);
    resultado = 
    "kg= " + (valor) + "\n" +
    "lb= " + (valor * 2.20462262) + "\n" +
    "oz= " + (valor * 35.273919);
    mostrarPantalla(resultado);
}

function gImp() {
    valor = Number(a);
    resultado = 
    "g= " + (valor) + "\n" +
    "lb= " + (valor * 0.00220462) + "\n" +
    "oz= " + (valor * 0.03527396);
    mostrarPantalla(resultado);
}

function mgImp() {
    valor = Number(a);
    resultado = 
    "mg= " + (valor) + "\n" +
    "lb= " + (valor * 0.00000220462) + "\n" +
    "oz= " + (valor * 0.00003527396);
    mostrarPantalla(resultado);
}