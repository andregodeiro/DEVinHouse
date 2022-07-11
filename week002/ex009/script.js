let exibeNumero = document.getElementById("exibeNumero");

let numero = 0;

function tirar() {
  numero--;
  exibeNumero.innerHTML = numero;
}

function botar() {
  numero++;
  exibeNumero.innerHTML = numero;
}
