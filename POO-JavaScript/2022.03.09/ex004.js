// objeto
const Curso = {
    // istancia atributos da propriedade pelo "set"
    set cursoNome(Nome) {
        this.nome = Nome;
    },
    set cursoP1(P1) {
        this.p1 = P1;
    },
    set cursoP2(P2) {
        this.p2 = P2;
    },

    // retorno do objeto condicionada "método"
    get cursorespostaultado () {
        if (this.p1 == 0){
            this.media = "A nota da p1 foi 0, não vai ser possível fazer uma média"
            return this.media
        } else { 
            this.media = (this.p1 + this.p2)/2;
            return `A média do curso ${this.nome} foi: ${this.media.toFixed(2)}`};
    }
}
// inserindo atributos para propriedade pelo "set"
Curso.cursoNome = 'Let`s Code';
Curso.cursoP1 = 9;
Curso.cursoP2 = 7;

// mostra retorno do "objeto" no console
console.log(Curso.cursorespostaultado)

/* Enunciado
Crie um objeto do tipo curso que tenha os seguintes atributos:
nome
p1
p2
media

Usando o setter insira o nome do curso, p1 e p2. 

Para a média considere a seguinte condição: Se, nota da p1 for 0, retorne a mensagem: "A nota da p1 foi 0, não vai ser possível fazer uma média" Se, nota da p1 maior que 0, faça o seguinte calculo: p1 + p2 / 2

Crie um get que retorne uma mensagem informando o nome do curso e sua média. */