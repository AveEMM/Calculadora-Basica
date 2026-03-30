let a = "";

function mostrarPantalla(valor) {
    document.getElementById("mostrar").textContent = valor;
}

function escribir(n) {
    a = a + n;
    mostrarPantalla(a);
}

function resultf() {
    let operacionf = (Number(a) * 1.8) + 32;
    mostrarPantalla("°F= " + operacionf);
}

function resultc() {
    let operacionc = (Number(a) - 32) / 1.8;
    mostrarPantalla("°C= " + operacionc);
}

function resultk() {
    let operacionk = Number(a) + 273;
    alert("Recuerda que solo puedes transformar °C a °K, escribe los grados en °C y despues transformalos a °K")
    mostrarPantalla("°K= " + operacionk);
}

function borrar() {
    a = "";
    mostrarPantalla(" ");
}
