let a = "";

function mostrarPantalla(valor) {
    document.getElementById("mostrar").innerText = valor;
}

function escribir(n) {
    a = a + n;
    mostrarPantalla(a);
}

function m3() {
    valor = Number(a);
    resultado = 
    "m³= " + (valor) + "\n" +
    "l= " + (valor * 1000) + "\n" +
    "ml= " + (valor * 1000000);
    mostrarPantalla(resultado);
}

function l() {
    valor = Number(a);
    resultado =
    "l= " + (valor) + "\n" +
    "m³= " + (valor / 1000) + "\n" +
    "ml= " + (valor / 1000000);
    mostrarPantalla(resultado);
}

function ml() {
    valor = Number(a);
    resultado = 
    "ml= " + (valor) + "\n" +
    "m³= " + (valor / 1000000) + "\n" +
    "l= " + (valor / 1000);
    mostrarPantalla(resultado);
}

function gal() {
    valor = Number(a);
    resultado = 
    "gal= " + (valor) + "\n" +
    "qt= " + (valor * 4) + "\n" +
    "fl oz= " + (valor * 160) + "\n" +
    "ft³= " + (valor / 6.229)
    "in³= " + (valor * 277.419);
    mostrarPantalla(resultado);
}

function qt() {
    valor = Number(a);
    resultado = 
    "qt= " + (valor) + "\n" +
    "gal= " + (valor / 4) + "\n" +
    "fl oz= " + (valor * 40) + "\n" +
    "ft³= " + (valor / 24.915)
    "in³= " + (valor * 69.355);
    mostrarPantalla(resultado);
}

function floz() {
    valor = Number(a);
    resultado = 
    "fl oz= " + (valor) + "\n" +
    "gal= " + (valor / 160) + "\n" +
    "qt= " + (valor / 40) + "\n" +
    "ft³= " + (valor / 996.6) + "\n" +
    "in³= " + (valor * 1.734);
    mostrarPantalla(resultado);
}

function ft3() {
    valor = Number(a);
    resultado = 
    "ft³= " + (valor) + "\n" +
    "gal= " + (valor * 6.229) + "\n" +
    "qt= " + (valor * 24.915) + "\n" +
    "fl oz= " + (valor * 996.6) + "\n" +
    "in³= " + (valor * 1728);
    mostrarPantalla(resultado);
}

function in3() {
    valor = Number(a);
    resultado = 
    "in³= " + (valor) + "\n" +
    "gal= " + (valor / 277.4) + "\n" +
    "qt= " + (valor / 69.355) + "\n" +
    "fl oz= " + (valor / 1.734) + "\n" +
    "ft³= " + (valor / 1728);
    mostrarPantalla(resultado);
}

function m3Imp() {
    valor = Number(a);
    resultado =
    "m³= " + (valor) + "\n" + 
    "gal= " + (valor * 220) + "\n" +
    "qt= " + (valor * 879.9) + "\n" +
    "fl oz= " + (valor * 35200) + "\n" +
    "ft³= " + (valor * 35.315)
    "in³= " + (valor * 61020);
    mostrarPantalla(resultado);
}

function lImp() {
    valor = Number(a);
    resultado =
    "l= " + (valor) + "\n" + 
    "gal= " + (valor / 4.546) + "\n" +
    "qt= " + (valor / 1.136) + "\n" +
    "fl oz= " + (valor * 35.195) + "\n" +
    "ft³= " + (valor * 28.317)
    "in³= " + (valor * 61.024);
    mostrarPantalla(resultado);
}

function mlImp() {
    valor = Number(a);
    resultado =
    "ml= " + (valor) + "\n" + 
    "gal= " + (valor / 4546) + "\n" +
    "qt= " + (valor / 1137) + "\n" +
    "fl oz= " + (valor / 28.413) + "\n" +
    "ft³= " + (valor / 28320)
    "in³= " + (valor / 16.387);
    mostrarPantalla(resultado);
}

function galSI() {
    valor = Number(a);
    resultado = 
    "gal= " + (valor) + "\n" +
    "m³= " + (valor / 220) + "\n" +
    "l= " + (valor * 4.546) + "\n" +
    "ml= " + (valor * 4546);
    mostrarPantalla(resultado);
}

function qtSI() {
    valor = Number(a);
    resultado = 
    "qt= " + (valor) + "\n" +
    "m³= " + (valor / 879.9) + "\n" +
    "l= " + (valor * 1.137) + "\n" +
    "ml= " + (valor * 1137);
    mostrarPantalla(resultado);
}

function flozSI() {
    valor = Number(a);
    resultado = 
    "fl oz= " + (valor) + "\n" +
    "m³= " + (valor / 35200) + "\n" +
    "l= " + (valor / 35.195) + "\n" +
    "ml= " + (valor * 28.413);
    mostrarPantalla(resultado);
}

function ft3SI() {
    valor = Number(a);
    resultado = 
    "ft³= " + (valor) + "\n" +
    "m³= " + (valor / 35.315) + "\n" +
    "l= " + (valor * 28.317) + "\n" +
    "ml= " + (valor * 28320);
    mostrarPantalla(resultado);
}

function in3SI() {
    valor = Number(a);
    resultado = 
    "in³= " + (valor) + "\n" +
    "m³= " + (valor / 61020) + "\n" +
    "l= " + (valor / 61.024) + "\n" +
    "ml= " + (valor * 16.387);
    mostrarPantalla(resultado);
}

function borrar() {
    a = "";
    mostrarPantalla(" ");
}