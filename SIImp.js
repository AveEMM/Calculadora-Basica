let a = "";

function mostrarPantalla(valor) {
    document.getElementById("mostrar").innerText = valor;
}

function escribir(n) {
    a = a + n
    mostrarPantalla(a);
}

function kilometro() {
    let valor = Number(a);
    let resultado = 
    "km= " + (valor) + "\n" +
    "m= " + (valor * 1000) + "\n" +
    "cm= " + (valor * 100000) + "\n" +
    "mm= " + (valor * 1000000);
    mostrarPantalla(resultado);
}

function metro() {
    let valor = Number(a);
    let resultado = 
    "m= " + (valor) + "\n" +
    "km= " + (valor / 1000) + "\n" +
    "cm= " + (valor * 100) + "\n" +
    "mm= " + (valor * 1000);
    mostrarPantalla(resultado);
}

function centimetro() {
    let valor = Number(a);
    let resultado =
    "cm= " + (valor) + "\n" +
    "km= " + (valor / 1000000) + "\n" +
    "m= " + (valor / 100) + "\n" +
    "mm= " + (valor * 10);
    mostrarPantalla(resultado);
}

function milimetro() {
    let valor = Number(a);
    let resultado = 
    "mm= " + (valor) + "\n" +
    "km= " + (valor / 1000000) + "\n" +
    "m= " + (valor / 1000) + "\n" +
    "cm= " + (valor / 10);
    mostrarPantalla(resultado);
}

function milla() {
    let valor = Number(a);
    let resultado = 
    "mi= " + (valor) + "\n" +
    "yd= " + (valor * 1760) + "\n" +
    "ft= " + (valor * 5280) + "\n" +
    "in= " + (valor * 63360);
    mostrarPantalla(resultado);
}

function yarda() {
    let valor = Number(a);
    let resultado = 
    "yd= " + (valor) + "\n" +
    "mi= " + (valor / 1760) + "\n" +
    "ft= " + (valor * 3) + "\n" +
    "in= " + (valor * 36);
    mostrarPantalla(resultado);
}

function pie() {
    let valor = Number(a);
    let resultado =
    "ft= " + (valor) + "\n" +
    "mi= " + (valor / 5280) + "\n" +
    "yd= " + (valor / 3) + "\n" +
    "in= " + (valor * 12);
    mostrarPantalla(resultado);
}

function pulgada() {
    let valor = Number(a);
    let resultado = 
    "in= " + (valor) + "\n" +
    "mi= " + (valor / 63360) + "\n" +
    "yd= " + (valor / 36) + "\n" +
    "ft= " + (valor / 12);
    mostrarPantalla(resultado);
}

function kmImp() {
    let valor = Number(a);
    let resultado =
    "km= " + (valor) + "\n" +
    "mi= " + (valor / 1.609344) + "\n" +
    "yd= " + (valor * 1093.61) + "\n" +
    "ft= " + (valor * 3280.84) + "\n" +
    "in= " + (valor * 39370.07);
    mostrarPantalla(resultado);
}

function mImp() {
    let valor = Number(a);
    let resultado =
    "m= " + (valor) + "\n" +
    "mi= " + (valor / 1609.344) + "\n" +
    "yd= " + (valor * 1.09361) + "\n" +
    "ft= " + (valor * 3.28084) + "\n" +
    "in= " + (valor * 39.37);
    mostrarPantalla(resultado);
}

function cmImp() {
    let valor = Number(a);
    let resultado =
    "cm= " + (valor) + "\n" +
    "mi= " + (valor / 160934.4) + "\n" +
    "yd= " + (valor / 91.44) + "\n" +
    "ft= " + (valor / 30.48) + "\n" +
    "in= " + (valor / 2.54);
    mostrarPantalla(resultado);
}

function mmImp() {
    let valor = Number(a);
    let resultado =
    "mm= " + (valor) + "\n" +
    "mi= " + (valor / 1609.344) + "\n" +
    "yd= " + (valor / 914.4) + "\n" +
    "ft= " + (valor / 304.8) + "\n" +
    "in= " + (valor / 25.4);
    mostrarPantalla(resultado);
}

function millaSI() {
    let valor = Number(a);
    let resultado = 
    "mi= " + (valor) + "\n" +
    "km= " + (valor * 1.609344) + "\n" +
    "m= " + (valor * 1609.344) + "\n" +
    "cm= " + (valor * 160934.4) + "\n" +
    "mm= " + (valor * 1609344);
    mostrarPantalla(resultado);
}

function yardaSI() {
    let valor = Number(a);
    let resultado = 
    "yd= " + (valor) + "\n" +
    "km= " + (valor / 1093.61) + "\n" +
    "m= " + (valor / 1.09361) + "\n" +
    "cm= " + (valor * 914.4) + "\n" +
    "mm= " + (valor * 914.4);
    mostrarPantalla(resultado);
}

function pieSI() {
    let valor = Number(a);
    let resultado = 
    "ft= " + (valor) + "\n" +
    "km= " + (valor / 3280.84) + "\n" +
    "m= " + (valor / 3.28084) + "\n" +
    "cm= " + (valor * 30.48) + "\n" +
    "mm= " + (valor * 304.8);
    mostrarPantalla(resultado);
}

function pulgadaSI() {
    let valor = Number(a);
    let resultado = 
    "in= " + (valor) + "\n" +
    "km= " + (valor / 39370.07) + "\n" +
    "m= " + (valor / 39.37) + "\n" +
    "cm= " + (valor * 2.54) + "\n" +
    "mm= " + (valor * 25.4);
    mostrarPantalla(resultado);
}

function borrar() {
    a = "";
    mostrarPantalla(" ");
}