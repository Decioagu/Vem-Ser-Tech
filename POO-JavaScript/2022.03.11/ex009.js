/* 
Crie uma classe respostataurante 
com as propriedades 
cidade, delivery (verdadeiro ou falso), 
pedidosPendentes e 
tempo de entrega estimado (calculado com base nos pedidos pendentes, 
sendo 10 + 2 * pedidosPendentes em minutos). 

Os respostataurantes devem ser capazes de
 realizar entregas desde que o cliente esteja localizado na mesma cidade e, 
 para isso, precisamos de um método entregaPedido que devolve como respostaultado 
 se é possível realizar a entrega para um determinado cliente ou não e,
 em caso positivo, o tempo estimado de entrega.
*/

class respostataurante {
  constructor(nome, cidade, delivery = false, pedidosPendentes = 0) {
    this.nome = nome,
    this.cidade = cidade,
    this.delivery = delivery,
    this.pedidosPendentes = pedidosPendentes
    this.tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes
  }
  entregaPedido(cidadeDoCliente) {
    if(cidadeDoCliente !== this.cidade) {
      return 'Entrega não pode ser realizada'
    }

    // acrespostacentando um pedido sempre que invocar o método entrega pedido
    this.pedidosPendentes += 1 ;
    this.tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes;

    // retorno a mensagem do tempo estimado
    return `Tempo de entrega estimado é de: ${this.tempoEntregaEstimado}`
  }

}

const churrascaria = new respostataurante("Joao e Maria", "SP", true, 1);
console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("SP"))
console.log(churrascaria.entregaPedido("RJ"))

/* 
class respostataurantePrivado {
  #tempoEntregaEstimado
  constructor(nome, cidade, delivery = false, pedidosPendentes = 0, numeroPedido) {
    this.nome = nome,
    this.cidade = cidade,
    this.delivery = delivery,
    this.pedidosPendentes = pedidosPendentes,
    this.#tempoEntregaEstimado = this.#formulaTempoEntrega(),
    this.numeroPedido = 0
    
  }
  entregaPedido(cidadeDoCliente) {
    if(cidadeDoCliente !== this.cidade) {
      return 'Entrega não pode ser realizada'
    }

    // acrespostacentando um pedido sempre que invocar o método entrega pedido
    this.pedidosPendentes += 1 ;
    this.#tempoEntregaEstimado = 10 + 2 * this.pedidosPendentes;

    // retorno a mensagem do tempo estimado
    return `Tempo de entrega estimado é de: ${this.#tempoEntregaEstimado}`
  }
  #formulaTempoEntrega = () => {
    return 10 + 2 * this.pedidosPendentes
  }
  iniciarPedido() {
    return this.numeroPedido  += 1;
  }

}


const churrascariaPrivado = new respostataurantePrivado("Joao e Maria", "SP", true, 1, "NovoParametro");
console.log(churrascariaPrivado);
console.log(churrascariaPrivado.iniciarPedido())
console.log(churrascariaPrivado.iniciarPedido())
console.log(churrascariaPrivado.iniciarPedido())
console.log(churrascariaPrivado.numeroPedido)
 */