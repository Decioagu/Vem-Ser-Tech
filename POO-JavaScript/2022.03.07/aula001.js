// objeto
const aluno =  {
    // propriedades
    nome: 'Décio',
    matricula: 001,
    idade: 40,
    
    // método
    cursoDoAluno (curso="sem cadastro") { 
        console.log(`${this.nome} esta cursando: ${curso}.`);
    }
}

// atribuindo a variável dados o objeto "aluno"
let dados = aluno
// mostra conteudo do objeto "aluno"
console.log(dados)

// chama o médoto "cursoDoAluno" dentro do objeto "aluno" COM parametro
let msg1 = aluno.cursoDoAluno("Let`s Code");
// chama o médoto "cursoDoAluno" dentro do objeto "aluno" SEM parametro
let msg2 = aluno.cursoDoAluno();

console.log('//===========================//========================//')

// objeto
const Carro =  {
    // propriedades
    modelo: 'Gol',
    marca: 'VW',
    
    // método (propriedade: função)
    selecionar: function (cor="sem cadastro") { 
        console.log(`Marca "${this.marca}", modelo " da" da cor "${cor}".`);
    }
}

// mostra conteudo do objeto "Carro"
console.log(Carro)

// chama o médoto "selecionar" dentro do objeto "Carro" COM parametro
let msg3 = Carro.selecionar("AMARELO");

console.log('//===========================//========================//')

// objeto
let carro1 = {
    //propriedade
    marca: "Fiat",
    //médoto
    getMarca: function () {
      return this.marca;
    }
}
  
// objeto
let moto1 = {
    //propriedade
    marca: 'Harley'
}

// mostra médoto objeto "carro1"
console.log(carro1.getMarca()); // utilização do médoto
// mostra médoto objeto "carro1"
let marca1 = carro1.getMarca() // contrução do médoto 
console.log(marca1); // utilização do médoto

// ".bind" utiliza o médoto "getMarca" do objeto "carro1" no objeto "moto"
let marca2 = carro1.getMarca.bind(moto1); // contrução do médoto 
console.log(marca2()); // utilização do médoto
/* obrigaroriamente é necessario atribuir o médoto ".bind" a uma variavel, para depois utiliza */
console.log(carro1.getMarca.bind(moto1)); // não funciona

console.log('//===========================//========================//')

// função construtora
function Placa(cod, Ano) {
  this.placa = cod;
  this.ano = Ano;
}
// instacia conteudo nas propriedades "Carro" na variável "carroPlaca"
var carroPlaca = new Placa('LUZ-6981', 2006);

// mostra a propriedade instaciada na função "Carro"
console.log(carroPlaca); 

// Criando um método utilizando o prototype no JavaScript 
Placa.prototype.getPlaca = function () {
    return this.placa;
}

// mostra conteudo "Placa" das propriedades "Aluno" pela função "Aluno.prototype.getAluno"
console.log(carroPlaca.getPlaca());

console.log('//===========================//========================//') 


/*
Para garantir que a "função Pessoa()" seja sempre chamada usando a 
chamada de construtor "new", adicione uma verificação no início da 
função "função Pessoa()" dessa forma:
 */

function Pessoa(Nome) {
    if (!(this instanceof Pessoa)) {
      throw Error('Use o operador "new" para instanciar o objeto') // Mensagem de [ERRO]
    }
    this.nome = Nome;
    console.log(Nome)
}

// retire o contrutor "new" e veja a mensagem de [ERRO]
var nome = new Pessoa('Décio Santana de Aguiar'); 
  
console.log('//===========================//========================//')  
  
  /*
detectar se uma função é invocada como uma chamada simples ou como construtora.
Você pode modificar a "função Marca()" para usar a metapropriedade "new.target "
da seguinte forma:
 */

function Marca(marca) {
    if (!new.target) {
      throw Error("Use o operador New para instanciar o objeto") // Mensagem de [ERRO]
    }
    this.getMarca = marca;
    console.log(marca)
  }
  
  // retire o contrutor "new" e veja a mensagem de [ERRO]
  var bmw1 = new Marca('BMW');

  console.log('//===========================//========================//')  