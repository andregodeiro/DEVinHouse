let anoDigitado = prompt("Digite um ano: ");

let anoAtual = new Date().getFullYear();

let diferencaAnos = anoDigitado - anoAtual;

if (diferencaAnos < 0) {
  diferencaAnos = diferencaAnos * -1;
}

alert(
  `A Diferença de anos entre ${anoDigitado} e o ano atual ${anoAtual} é de ${diferencaAnos} anos.`
);
