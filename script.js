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

function funcionCientifica(tipo){
    try{
        let valor = Number(eval(pantalla.value));
        let resiltado;

        switch(tipo){
            case "sin":
                resiltado = Math.sin(valor * Math.PI / 180);
                break;
            case "cos":
                resiltado = Math.cos(valor * Math.PI / 180);
                break;
            case "tan":
                resiltado = Math.tan(valor * Math.PI / 180);
                break;
            case "sqrt":
                resiltado = Math.sqrt(valor);
                break;
            case "log":
                resiltado = Math.log10(valor);
                break;
            case "ln":
                resiltado = Math.log(valor);
                break;
        }
            if(!isFinite(resultado)){
                pantalla.value = "Error";
                return;
            }
            pantalla.value = Number.isInteger(resiltado) ? resiltado : resiltado.toFixed(10);
    }catch(error){
        pantalla.value = "Error";       
    }
}


function cuadrado() {
    try {
        let valor = Number(eval(pantalla.value));
        pantalla.value = valor ** 2;
    } catch (error) {
        pantalla.value = "Error";
    }
}