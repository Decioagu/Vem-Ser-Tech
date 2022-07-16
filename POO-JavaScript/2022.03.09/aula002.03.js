console.log('//===========================//========================//') 

// função
function ConstroiPessoaConstructor (nome, email, idade) {
    // propriedade
    this.nome = nome, 
    this.email = email,
    this.idade = idade
  
    // retorno da função pelo método "this.toString"
    this.toString = () => {
      return ("Nome da pessoa: " + this.nome + ", idade da pessoa " + this.idade);  
    }
}
  
// instanciando objeto na "function ConstroiPessoaConstructor"
let jaque = new ConstroiPessoaConstructor("Jaque", "jaque@jaque.com", 28);

// mostra conteudo da função "ConstroiPessoaConstructor"
console.log(jaque);
// retorna método "this.toString" dentro da função "ConstroiPessoaConstructor"
console.log(jaque.toString());

console.log('//===========================//========================//') 
  
// classe
class Pessoa {
    // função construtora
    constructor(nome, email, idade) { 
        // propriedade
        this.nome = nome, 
        this.email = email,
        this.idade = idade
    }
    // retorno da class pelo método "get respostaposta"
    get respostaposta() {
        return ("Nome da pessoa: " + this.nome + ", idade da pessoa " + this.idade);
    }
}

// instanciando objeto na "class Pessoa"
let vini = new Pessoa("Vinicius", "vinicius@letscode.com.br", 20);

// mostra conteudo da class "Pessoa"
console.log(Pessoa)
// retorna método "get respostaposta" dentro da class "Pessoa"
console.log(vini.respostaposta)

console.log('//===========================//========================//') 