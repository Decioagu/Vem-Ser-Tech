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

//atrubui as informação do objeto "aluno" a variavel "dados"
let dados = aluno

// mostra o conteudo do objeto "aluno" no console
console.log(dados)

// chama a função dentro do objeto "aluno" e adiciona um parametro chamado "curso"
let msg = aluno.cursoDoAluno("Let`s Code");

