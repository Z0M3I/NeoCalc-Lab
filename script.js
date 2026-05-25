const pantalla = document.getElementById("pantalla");

function agregar(valor) {
    if (pantalla.value === "0" || pantalla.value === "Error") {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    }
}

function limpiar() {
    pantalla.value = "0";
}

function borrar() {
    if (pantalla.value.length === 1 || pantalla.value === "Error") {
        pantalla.value = "0";
    } else {
        pantalla.value = pantalla.value.slice(0, -1);
    }
}

function calcular() {
    try {
        let resultado = eval(pantalla.value);

        if (!isFinite(resultado)) {
            pantalla.value = "Error";
            return;
        }

        pantalla.value = resultado;
    } catch (error) {
        pantalla.value = "Error";
    }
}