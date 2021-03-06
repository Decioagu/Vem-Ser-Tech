/**
 * Crie uma ou mais classe para represpostaentar um app de banco
 * 
 * - Deverá ter diferenciação de cliente PJ e PF
 * 
 * Pense no que deve ou não ser tratado como herança
 * Pense no que deve ou não ser privado
 * Pense em outras coisas que façam sentido
 * Pense em Pense em outras coisas que façam sentido 
 * para um app de banco e que faça consiga implementar
 */


//PARTE 2
/**
 * No cliente pessoa física, criar um método
onde retorna os dados de rg e cpf.
No cliente pessoa juridica, criar um método
onde retorna os dados do cnpj
Utilize o conceito de Polimorfismo para execução da solicitação acima
Crie uma Objeto Lançamentos 
e para cada operação de saque ou depósito
Insira os seguintes registros nessa classe:
  - Nome do Cliente
  - Tipo da Operação (se foi saque ou se foi depósito)
  - Valor
  - Horario da Transação
Considerando o conceito de encapsulamento
deixe o saldo bancário do cliente inacessível fora do escopo de conta.
Lembre-se apenas o escopo de conta poderá movimentar o saldo bancário.
Crie um método que calcule o juros de atraso 
de um determinado pgto, onde tenha as seguintes regras: 
- Atraso de 1 dia juros de 1%
- Atraso de 2 dias juros 2.5 % 
- Atraso de 3 dias ou mais, juros composto 2.5%
 */

const lancamentos = [];


class Conta {
    #saldo
    constructor() {
        this.conta = parseInt(Math.random()*100000),
        this.agencia = '1234'
        this.#saldo = 0
    }

    get saldo () {
        return this.#saldo;
    }

    geraDados (nomeop, tipoop,valorop) {
        const tra1 = {
            nome: nomeop,
            tipo: tipoop,
            valor: valorop,
            horario: new Date
        }
        return tra1;
    }
     

    depositar (valor) {
        this.#saldo += valor;
        console.log(`${this.nome} Você depositou ${valor} e seu saldo atual é ${this.#saldo}`);

        let transacao = this.geraDados(this.nome, "Depósito", valor)

        lancamentos.push(transacao);

    }

    sacar (valor) {
        if(valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`${this.nome} Você sacou ${valor} e seu saldo atual é ${this.#saldo}!`);

            let transacao = this.geraDados(this.nome, "Saque", valor)

            lancamentos.push(transacao);


        } else {
            console.log(`Saldo insuficiente, saque não efetuado!`)
        }

    }

    transferir (valor, Conta) {
        if(this.#saldo >= valor){
            this.sacar(valor);
            Conta.depositar(valor);

            let transacao = this.geraDados(this.nome, "Transferência", valor)

            lancamentos.push(transacao);

        } else {
            console.log(`Saldo insuficiente, transferencia não efetuada!`)
        }

    }
    
    pagar (valor, dataVencimento) {

        console.log("Cheguei no pagar")

        const taxa1dia = 0.01;
        const taxa2dia = 0.025;
        const taxa3dia = 0.025;
        const nDias = 0 - dataVencimento;
//        const nDias = new Date - dataVencimento;
        if(this.#saldo >= valor){
            if(nDias == 1){
                valor += valor * taxa2dia;
                this.#saldo -= valor;
                console.log(`Vc pagou ${valor} com juros de 1 dia`)
            } else if (nDias == 2) {
                valor += valor * taxa2dia;
                this.#saldo -= valor;
                console.log(`Vc pagou ${valor} com juros de 2 dias`)
            } else if (nDias >= 3) {

                for (let cont = 1; cont <= nDias; cont++) {
                    valor += valor *taxa3dia;
                    console.log(`Valor: ${valor}`)
                }
                console.log(`Vc pagou ${valor} com juros compostos de 3 dias ou mais`)
                //valor += valor * taxa1dia;
                //valor += valor * taxa2dia;
                //valor += valor * taxa1dia;
                this.#saldo -= valor;
            } else {
                this.#saldo -= valor;
                console.log(`Vc pagou ${valor} SEM juros!`)
            }

        }
    }
}

class Cliente extends Conta{
    #telefone
    #rua
    #bairro
    #cidade
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade) {
        super(),
        this.nome = nome,
        this.#telefone = telefone,
        this.#rua = enderecoRua,
        this.#bairro = enderecoBairro,
        this.#cidade = enderecoCidade
    }

    get telefone () {
        return this.#telefone
    }
}

class pF extends Cliente {
    #cpf
    #rg
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cpf, rg) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade),
        this.#cpf = cpf,
        this.#rg = rg
    }

    dados () {
        return `
        Nome: ${this.nome} 
        CPF: ${this.#cpf}
        RG: ${this.#rg}
        Conta: ${this.conta}
        Agência: ${this.agencia}`
    }


}

class pJ extends Cliente {
    #cnpj
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cnpj) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade),
        this.#cnpj = cnpj
    }

    dados () {
        return `
        Nome: ${this.nome}
        CPNJ: ${this.#cnpj}
        Conta: ${this.conta}
        Agência: ${this.agencia}`
    }

}

const conta1 = new pF("Marlon", "11 951363201", "Avenida Perimetral, 598", "São Luiz Gonzaga", "Passo Fundo", "000.000.000-00", "12345678910");
console.log(conta1);

conta1.depositar(100);
console.log(conta1.saldo);

conta1.sacar(200);
conta1.sacar(90);
console.log(conta1.saldo);
conta1.depositar(1000);
console.log(conta1.saldo);

const conta2 = new pF("Chico", "11 984458554", "Avenida Bsandeirantes, 158", "Centro", "São Paulo", "00045580000", "12765438910");
conta2.depositar(800);

console.log("Antes do Transferir")
console.log(conta1.saldo);
console.log(conta2.saldo)

conta1.transferir(1500, conta2);
console.log("Depois do Transferir");
console.log(conta1.saldo);
console.log(conta2.saldo);

console.log(conta1.dados());

console.log(lancamentos);

conta1.pagar(200, -3);
console.log(conta1.saldo);

conta1.pagar(200, -2);
console.log(conta1.saldo);

conta1.pagar(200, -1);
console.log(conta1.saldo);

conta1.pagar(200, 0);
console.log(conta1.saldo);

conta1.pagar(200, -10);
console.log(conta1.saldo);

conta1.pagar(200, 5);
console.log(conta1.saldo);
