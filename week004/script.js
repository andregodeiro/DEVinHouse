let contasClientes = [
  {
    id: 1,
    nome: "Cliente 01",
    saldo: 500,
  },
  {
    id: 2,
    nome: "Cliente 02",
    saldo: 3000,
  },
  {
    id: 3,
    nome: "Cliente 03",
    saldo: 5000,
  },
];

const selectConta = document.getElementById("conta");
const body = document.body;

const adicionaOpcao = (value, text) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  selectConta.appendChild(option);
};

const populaSelect = () => {
  selectConta.innerHTML = "";
  adicionaOpcao("0", "(Selecione)");

  contasClientes.forEach((conta) => {
    adicionaOpcao(conta.id, conta.nome);
  });
};

body.onload = populaSelect;
