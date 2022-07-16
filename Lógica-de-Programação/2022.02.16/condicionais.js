console.log("===CONDICIONAIS===")

//entrada
const aluno = prompt("Digite o neome do aluno:");
const nota = prompt("Digite a nota (0-10):");
console.log(aluno, nota);

let respostap = null

//processamento = 1
if (nota >= 6) {
    respostap = "Aprovado!"
}
if (6 > nota && nota >= 4){
    respostap = "Recuperação!"
}
if ( nota < 4 ){
    respostap = "Reprovado!"
}

//processamento = 2
/* if (nota >= 6) {
    respostap = "Aprovado!"
} else if (nota < 4){
    respostap = "Reprovado!"
} else { 
    respostap = "Recuperação!"
    } */

let op = prompt("Quer continuar [s/n]?")

//processamento = 3

console.log(respostap)

// saída
document.write(`
    Aluno: ${aluno} <br>
    Nota: ${nota} <br>
    Situação: ${respostap} <br>
`)
