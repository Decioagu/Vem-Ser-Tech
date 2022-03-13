// função construtora
function Aluno(nome, idade, email, matricula, curso) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matricula = matricula;
    this.curso = curso;
}

// instacia conteudo nas propriedades "Aluno" nas variáves "aluno1" e "aluno2"
let aluno1 = new Aluno('Décio Santana de Aguiar', 40, "decioagu@gmail.com", 001, 'Let`sCod');
let aluno2 = new Aluno('Luana Nogueira Amaral', 37, "luanogama@gmail.com", 002, 'Não inscrito');

// mostra as propriedades dos alunos inseridos nas variáves "aluno1" e "aluno2" no console
console.log(aluno1)
console.log(aluno2)

// função retorna conteudo das propriedades "Aluno"
Aluno.prototype.getAluno = function (){
    return this.curso
}

// mostra conteudo "curso" das propriedades "Aluno" pela função "Aluno.prototype.getAluno" inserido nas variáves "aluno1" e "aluno2" no console
console.log(aluno1.getAluno())
console.log(aluno2.getAluno())
