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

    const calcularTotal = function calcularPedido() {
      let total = this.listaProdutos.reduce((anterior, atual) => {
        return anterior + atual.preco * atual.quantidade;
      }, 0);
      return total;
    };
  }

  adicionarProduto(produto) {
    const validaProduto = produto instanceof Produto;
    if (validaProduto) {
      this.listaProdutos.push(produto);
    }
  }
}
