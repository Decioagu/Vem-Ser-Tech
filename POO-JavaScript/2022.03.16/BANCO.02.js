/*
 * Crie uma ou mais classe para representar um app de banco
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
/*
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


// "lancamentos" é um Array que armazena os registros de "Depósito", "Saque" e "Transferência"
const lancamentos = [];

// classe "Pai"
class Conta {
    #saldo // propriedade privada

    // função construtora
    constructor() {
        this.conta = parseInt(Math.random()*100000),
        this.agencia = '1234'
        this.#saldo = 0
    }

    // acesso individual a propriedade privada "saldo"
    get saldo () {
        return 'Saldo $R:'+this.#saldo.toFixed(2);
    }

    // método para organizar registros no Array "lancamentos"
    geraDados (nomeop, tipoop,valorop) {
        const tra1 = {
            nome: nomeop,
            tipo: tipoop,
            valor: valorop,
            horario: new Date
        }
        return tra1;
    }
     
    // método 
    depositar (valor) {
        this.#saldo += valor;
        console.log(`${this.nome} Você depositou $R:${valor.toFixed(2)} e seu saldo atual é ${this.#saldo.toFixed(2)}`);

        // variavel transacoa, chama método para organizar registros no Array "lancamentos"
        let transacao = this.geraDados(this.nome, "Depósito", valor)
        // armazenar resgistro no Array de "lancamentos"
        lancamentos.push(transacao);

    }

    // método 
    sacar (valor) {
        if(valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`${this.nome} Você sacou $R:${valor.toFixed(2)} e seu saldo atual é $R:${this.#saldo.toFixed(2)}!`);

        } else {
            console.log(`Saldo insuficiente, saque de $R:${valor.toFixed(2)} não efetuado!`)
            console.log(`Saldo atual$ R$:${this.#saldo.toFixed(2)}.`)
            valor = 0
        }
        // variavel trnssacoa, chama método para organizar registros no Array "lancamentos"
        let transacao = this.geraDados(this.nome, "Saque", valor)
        // armazenar resgistro no Array de "lancamentos"
        lancamentos.push(transacao);
    }

    // método 
    transferir (valorDaTranferencia, contaDaTransferencia = '') {
        if(contaDaTransferencia.length != 0){
            if (this.#saldo <= valorDaTranferencia){
                console.log(`Saldo insuficiente, transferência não efetuada!`)
                console.log(`Transferência solicitada de $R:${valorDaTranferencia.toFixed(2)}.`)
                console.log(`Saldo atual $R:${this.#saldo.toFixed(2)}.`)
                valorDaTranferencia = 0   
            } else {
                this.#saldo = this.#saldo - valorDaTranferencia;
                console.log(`Transferência de $R:${valorDaTranferencia.toFixed(2)} realizada com sucesso para conta ${contaDaTransferencia}`)
                console.log(`Saldo atual $R:${this.#saldo.toFixed(2)}.`) 
            }

        } else {
            console.log(`Transferencia não realizada faltou número da conta`)
            console.log(`Transferência solicitada de $R:${valorDaTranferencia.toFixed(2)}.`)
            console.log(`Saldo atual $R:${this.#saldo.toFixed(2)}.`)   
            valorDaTranferencia = 0
        }

        // variavel trnssacoa, chama método para organizar registros no Array "lancamentos"
        let transacao = this.geraDados(this.nome, "Transferência", valorDaTranferencia)
        // armazenar resgistro no Array de "lancamentos"
        lancamentos.push(transacao);
    }
    
    // método 
    pagar (valorBoleto, dataVencimento = 0) {
        // variaveis
        const taxa1dia = 1.01; // Juros simples = 1 dia de atraso
        const taxa2dia = 1.025; // Juros simples = 2 dia de atraso
        const taxaNdia = 1.025; // Juros composto = "nDias" de atraso
        const nDias = dataVencimento; // dias de atraso de pagamento
        let montante = 0; // variavel para cálculo
        let valor = 0; // auxilia registro Array "lancamentos"

        // pagamento do "valorBoleto"
        if(this.#saldo >= valorBoleto){
            // condição 1 = 1 dia de atraso
            if(nDias == 1){
                montante = valorBoleto * taxa1dia;
                if (this.#saldo >= montante){
                    this.#saldo -= montante
                    console.log(`Vc pagou R$:${montante} com juros de 1 dia `)
                    console.log(`Juros simples 1% de valor $R:${montante - valorBoleto}`)
                    valor = montante
                } else { 
                    console.log(`Saldo insuficiente, valor da fatura R$:${montante} devido atraso de 1 dia do vencimento`)
                    console.log(`Juros simples 1% de valor $R:${(montante - valorBoleto).toFixed(2)}`) 
                }
            // condição 2 = 2 dia de atraso
            } else if (nDias == 2) {
                montante = valorBoleto * taxa2dia;
                if (this.#saldo >= montante){
                    this.#saldo -= montante
                    console.log(`Vc pagou R$:${montante.toFixed(2)} com juros de 1 dia `)
                    console.log(`Juros simples 2.5% de valor $R:${(montante - valorBoleto).toFixed(2)}`)
                    valor = montante
                } else { 
                    console.log(`Saldo insuficiente, valor da fatura R$:${montante.toFixed(2)} devido atraso de 2 dia do vencimento`)
                    console.log(`Juros simples 2.5% de valor $R:${(montante - valorBoleto).toFixed(2)}`)  
                }
            // condição 3 = "nDias" dia de atraso
            } else if (nDias >= 3) {
                montante = valorBoleto * (taxaNdia)**nDias;
                if (this.#saldo >= montante){
                    this.#saldo -= montante
                    console.log(`Vc pagou R$:${montante.toFixed(2)} com juros de ${nDias} dia `)
                    console.log(`Juros composto de 2.5% dia valor $R:${(montante - valorBoleto).toFixed(2)}`)
                    valor = montante
                } else { 
                    console.log(`Saldo insuficiente, valor da fatura R$:${montante.toFixed(2)} devido atraso de ${nDias} dia do vencimento`)
                    console.log(`Juros composto 2.5% de valor $R:${(montante - valorBoleto).toFixed(2)}`)
                }
            // condição 4 = SEM de atraso
            } else {
                montante = this.#saldo - valorBoleto;
                console.log(`Vc pagou R$:${valorBoleto.toFixed(2)} SEM juros!`)
                valor = montante
            }
        
        } else { 
            console.log(`Saldo insuficiente, valor da fatura $R:${valorBoleto}.`)
            montante = 0 
        }
        console.log(`Saldo atual$ R$:${this.#saldo.toFixed(2)}.`)

        // variavel trnssacoa, chama método para organizar registros no Array "lancamentos"
        let transacao = this.geraDados(this.nome, "Pagamento", valor)
        // armazenar resgistro no Array de "lancamentos"
        lancamentos.push(transacao);
    }
}

// classe "Filho"
class Cliente extends Conta{
    #telefone // propriedade privada
    #rua // propriedade privada
    #bairro // propriedade privada
    #cidade // propriedade privada

    // função construtora
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade) {
        super(),
        this.nome = nome,
        this.#telefone = telefone,
        this.#rua = enderecoRua,
        this.#bairro = enderecoBairro,
        this.#cidade = enderecoCidade
    }

    // acesso individual a propriedade privada "telefone"
    get telefone () {
        return this.#telefone
    }
}

// classe "Neto de Cliente"
class pF extends Cliente {
    #cpf // propriedade privada
    #rg // propriedade privada

    // função construtora
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cpf, rg) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade),
        this.#cpf = cpf,
        this.#rg = rg
    }

    // método 
    dados () {
        return `
        Nome: ${this.nome} 
        CPF: ${this.#cpf}
        RG: ${this.#rg}
        Conta: ${this.conta}
        Agência: ${this.agencia}`
    }


}

// classe "Neto de Cliente"
class pJ extends Cliente {
    #cnpj // propriedade privada

    // função construtora
    constructor(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade, cnpj) {
        super(nome, telefone, enderecoRua, enderecoBairro, enderecoCidade),
        this.#cnpj = cnpj
    }

    // método 
    dados () {
        return `
        Nome: ${this.nome}
        CPNJ: ${this.#cnpj}
        Conta: ${this.conta}
        Agência: ${this.agencia}`
    }

}

// Operações
const conta1 = new pF("Marlon", "11 951363201", "Avenida Perimetral, 598", "São Luiz Gonzaga", "Passo Fundo", "000.000.000-00", "12345678910");
console.log(conta1);

conta1.depositar(100);
console.log(conta1.saldo);

conta1.sacar(200);
conta1.sacar(100);
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

console.log('//=======================================//=======================================//');

conta1.transferir(800, conta2);
console.log("Depois do Transferir");
console.log(conta1.saldo);
console.log(conta2.saldo);

console.log('//=======================================//=======================================//');

console.log(conta1.dados());

console.log(lancamentos);
console.log('//=======================================//=======================================//');
conta1.depositar(800);
console.log(conta1.saldo)
conta1.pagar(1001, 0);
conta1.depositar(1);
conta1.pagar(1001, 0);
console.log('//=======================================//=======================================//');
conta1.depositar(100);
conta1.pagar(100, 1);
conta1.depositar(1);
conta1.pagar(100, 1);
console.log('//=======================================//=======================================//');
conta1.pagar(100, 2);
conta1.depositar(100);
conta1.pagar(100, 2);
conta1.depositar(5);
conta1.pagar(100, 2);
conta1.sacar(5)
conta1.sacar(2.5)
console.log('//=======================================//=======================================//');
conta1.depositar(1000);
conta1.pagar(1000, 3);
conta1.depositar(76.90);
conta1.pagar(1000, 3);
console.log('//=======================================//=======================================//');
conta1.pagar(1000, 9);
conta1.depositar(1000);
conta1.pagar(1000, 9);
console.log('//=======================================//=======================================//');
conta1.transferir(2000)
conta1.transferir(1000, 76603)
conta1.transferir(400, 76603)
console.log('//=======================================//=======================================//');
console.log(lancamentos)
console.log('//=======================================//=======================================//');