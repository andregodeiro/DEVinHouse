var primeiroNumero = window.prompt("Insira o primeiro número: ");
var segundoNumero = window.prompt("Insira o segundo número: ");
var operacao = window.prompt(
  `Qual operação matemática deseja realizar?
  + para Adição
  - para Subtração
  * para Multiplicação
  / para Divisão`
);
var n1 = parseInt(primeiroNumero);
var n2 = parseInt(segundoNumero);

if (operacao == "+") {
  var soma = n1 + n2;
  alert(`A soma entre ${n1} e ${n2} é igual a ${soma}!`);
}

if (operacao == "-") {
  var subtracao = n1 - n2;
  alert(`A subtração entre ${n1} e ${n2} é igual a ${subtracao}!`);
}

if (operacao == "*") {
  var multiplicacao = n1 * n2;
  alert(`A multiplicação entre ${n1} e ${n2} é igual a ${multiplicacao}!`);
}

if (operacao == "/") {
  var divisao = n1 / n2;
  alert(`A divisão entre ${n1} e ${n2} é igual a ${divisao}!`);
}
