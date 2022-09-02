let numberInput = document.getElementById("inputNumber");
const button = document.getElementById("button");
const titulo = document.getElementById("titulo");

const par = () => {
  document.querySelector(
    "#titulo"
  ).innerHTML = `<h3> ${numberInput.value} é par!</h3>`;
};
const impar = () => {
  document.querySelector(
    "#titulo"
  ).innerHTML = ` <h3> ${numberInput.value} é ímpar!</h3>`;
};

function classificar(value) {
  value = numberInput.value;
  if (value.length == 0) {
    alert("Insira um número!");
  } else if (value % 2 == 0) {
    par();
  } else {
    impar();
  }
}
