let nome = document.getElementById("inputNome");
let email = document.getElementById("inputEmail");
let descricao = document.getElementById("inputDescricao");

document.getElementById("botao").addEventListener("click", function (event) {
  event.preventDefault();

  console.log(
    "Formulário de contato:",
    "\nNome: " + nome.value,
    "\nE-mail: " + email.value,
    "\nDescrição: " + descricao.value
  );

  alert("Formulário enviado com sucesso!");
});
