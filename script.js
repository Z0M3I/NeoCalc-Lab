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

    pantalla.value = Number.isInteger(resultado)
      ? resultado
      : parseFloat(resultado.toFixed(10));

  } catch (error) {
    pantalla.value = "Error";
  }
}

function funcionCientifica(tipo) {
  try {
    let valor = Number(eval(pantalla.value));
    let resultado;

    switch (tipo) {
      case "sin":
        resultado = Math.sin(valor * Math.PI / 180);
        break;

      case "cos":
        resultado = Math.cos(valor * Math.PI / 180);
        break;

      case "tan":
        resultado = Math.tan(valor * Math.PI / 180);
        break;

      case "sqrt":
        resultado = Math.sqrt(valor);
        break;

      case "log":
        resultado = Math.log10(valor);
        break;

      case "ln":
        resultado = Math.log(valor);
        break;
    }

    if (!isFinite(resultado)) {
      pantalla.value = "Error";
      return;
    }

    pantalla.value = Number.isInteger(resultado)
      ? resultado
      : parseFloat(resultado.toFixed(10));

  } catch (error) {
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