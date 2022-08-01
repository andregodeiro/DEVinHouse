class Produto {
  nome;
  preco;
  emEstoque;
  quatidade;
  constructo(nome, preco, emEstoque, quantiade) {
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;
    this.quantidade = quantidade;
  }
}

class Pedido {
  numeroPedido;
  dataPedido;
  estaPago;
  listaProdutos;
  nomeCliente;

  constructor(numPedido, nomeCliente) {
    this.numeroPedido = numPedido;
    this.nomeCliente = nomeCliente;
    this.dataPedido = new Date().toLocaleDateString();
    this.estaPago = false;
    this.listaProdutos = [];
  }
}
