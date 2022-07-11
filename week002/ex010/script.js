let alteraTitulo = document.getElementById("alteraTitulo");
let titulo = document.getElementById("titulo");

document.getElementById("botao").addEventListener("click", function () {
  alteraTitulo.innerHTML = titulo.value;
});
