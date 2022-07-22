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
const strongMensagem = document.getElementById("mensagem");
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

const exibeMensagem = (mensagem, type = "error") => {
  strongMensagem.textContent = mensagem;

  strongMensagem.className = type === "error" ? "error" : "success";
};

const sacar = (conta, valor) => {
  if (isNaN(valor) || valor <= 0) {
    exibeMensagem("Valor inválido");
    return;
  }

  if (valor > conta.saldo) {
    exibeMensagem(`Saldo insuficiente. Saldo atual: ${conta.saldo}`);
    return;
  }

  const novoSaldo = conta.saldo - valor;

  const contasSemContaAtual = contasClientes.filter((c) => c.id !== conta.id);

  const contasAtualizadas = (contasClientes = [
    ...contasSemContaAtual,
    { ...conta, saldo: novoSaldo },
  ]);

  contasClientes = contasAtualizadas;

  exibeMensagem("Saque efetuado com sucesso!", "success");
};

// conta = contaAtual
