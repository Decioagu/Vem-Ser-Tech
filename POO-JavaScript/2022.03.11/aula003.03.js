//
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome,
    this.idade = idade
  }
  apresentar() {
    return `O meu nome é ${this.nome}
    e tenho ${this.idade} anos.`
  }
}

// instanciar a classe pessoa
const p1 = new Pessoa("Jaque", 28);
console.log(p1);
console.log(p1.apresentar());
console.log(p1.nome);
console.log(JSON.stringify(p1));
console.log(Object.keys(p1));
console.log(Object.values(p1));

//================================================================================//

/* 
// parametros em propriedade privada
class PessoaPrivada {
  #nome // declaração de elemento privado
  #idade // declaração de elemento privado
  
  constructor(nome, idade, email) {
    this.#nome = nome, // propriedade privada
    this.#idade = idade // propriedade privada
    this.email = email // propriedade publica
  }
  // com o método "get" é possivel acessar o propriedade privada 
  get Nome() {
    return this.#nome
  }
  set Nome(u) {
    this.#nome = u
  }
  apresentar() {
    return `O meu nome é ${this.#nome} e tenho ${this.#idade} anos.`
  }
  // para resolver o caso do Json
  toJSON() {
    return {
      nome: this.nome, // ACESSANDO ATRAVES DO GETTER
      idade: this.#idade, // acessando a propriedade privada
      email: this.email
    }
  }

}

// apos declarado (instancionado) os elementos privados só poden ser acessados ou alterado por meio de métodos 

// instanciar a classe pessoa
const p2 = new PessoaPrivada("Joao", 28, 'joao@letscode.com.br');

console.log(p2);
console.log(p2.nome) // chamada feita diretamente pelo propriedade (privado)
console.log(p2.email); // chamada feita diretamente pelo propriedade
console.log(p2.apresentar()); // chamada feita pelo médoto "apresentar" dentro da "class PessoaPrivada"
console.log(p2.Nome); // chamada foi feita do método "get"
p2.Nome = "Décio" // instanciando novo atributo pelo método "set" (privado)
console.log(p2.Nome); // chamada foi feita do método "get"
console.log(JSON.stringify(p2));
console.log(Object.keys(p2));
console.log(Object.values(p2)); 
*/