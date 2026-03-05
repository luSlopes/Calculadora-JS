let valores = [];
let resultadoCalculado = false;
const operations = ["+", "-", "/", "x"];

const digitos = document.querySelector(".digitos");
const digitoAtual = document.querySelector(".digitoAtual");
document.querySelector(".C").addEventListener("click", apagarVisor);

function adicionarCaracter(caracter) {
  if (resultadoCalculado) {
    digitos.innerText = digitoAtual.innerText;
    resultadoCalculado = false;
    if (operations.includes(caracter)) {
      const valor = Number(digitoAtual.innerText);
      valores.push(valor);
      valores.push(caracter);
      digitos.innerText = digitoAtual.innerText + caracter;
      digitoAtual.innerText = "";
    } else {
      digitoAtual.innerText += caracter;
    }
  } else if (operations.includes(caracter)) {
    const valor = Number(digitoAtual.innerText);
    valores.push(valor);
    valores.push(caracter);
    digitos.innerText += digitoAtual.innerText + caracter;
    digitoAtual.innerText = "";
  } else {
    digitoAtual.innerText += caracter;
  }
}

function apagarVisor() {
  digitoAtual.innerText = "";
  digitos.innerText = "";
  resultadoCalculado = false;
  resetaValores();
}

function calcular() {
  valores.push(Number(digitoAtual.innerText));
  digitos.innerText += digitoAtual.innerText;
  console.log(valores);
  let resultado = valores[0],
    valor;
  for (let i = 1; i < valores.length; i += 2) {
    valor = valores[i + 1];
    if (operations.includes(valores[i])) {
      switch (valores[i]) {
        case "+":
          resultado += valor;
          break;
        case "-":
          resultado -= valor;
          break;
        case "/":
          resultado /= valor;
          break;
        case "x":
          resultado *= valor;
          break;
      }
    }
  }
  digitos.innerText += "=";
  digitoAtual.innerText = resultado;
  resetaValores();
  resultadoCalculado = true;
}

function resetaValores() {
  valores = [];
}

function apagaDigito() {
  const caracter = digitoAtual.innerText;
  const novoCaracter = caracter.substring(0, caracter.length - 1);
  digitoAtual.innerText = novoCaracter;
}
