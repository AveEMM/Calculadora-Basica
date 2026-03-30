let a = " ";
let b = " ";
const agua = 4186
const hielo = 2100
const vapor = 2000
const aluminio = 900
const cobre = 385
const hierro = 450
const plomo = 128
const vidrio = 840
const madera = 1700
const arena = 830

function mostrarPantalla(valor) {
    document.getElementById("mostrar").innerText = valor;
}

function escribir(n) {
    a = a + n;
    mostrarPantalla(a);
}

function hielo(hielo) {
    let opH = 1 * hielo * 1;
    mostrarPantalla(opH += "J por Kg");
}

function vapor(vapor) {
    let opV = 1 * vapor *1;
    mostrarPantalla(opV += "J por Kg");
}

function aluminio(aluminio) {
    let opAl = 1 * aluminio * 1;
    mostrarPantalla(opAl += "J por Kg");
}

function cobre(cobre) {
    let opC = 1 * cobre * 1;
    mostrarPantalla(opC += "J por Kg");
}

function hierro(hierro) {
    let opHi = 1 * hierro * 1;
    mostrarPantalla(opHi += "J por Kg");
}

function plomo(plomo) {
    let opP = 1 * plomo * 1;
    mostrarPantalla(opP += "J por Kg");
}

function vidrio(vidrio) {
    let opVi = 1 * vidrio * 1;
    mostrarPantalla(opVi += "J por Kg");
}

function madera(madera) {
    let opM = 1 * madera * 1;
    mostrarPantalla(opM += "J por Kg");
}

function arena(arena) {
    let opAr = 1 * arena * 1;
    mostrarPantalla(opAr += "J por Kg");
}

function borrar() {
    a = "";
    mostrarPantalla(" ");
}