console.log("===CONDICIONAIS===")

//entrada
const aluno = prompt("Digite o neome do aluno:");
const nota = prompt("Digite a nota (0-10):");
console.log(aluno, nota);

let resp = null

//processamento = 1
/* if (nota >= 6) {
    resp = "Aprovado!"
}
if (6 > nota && nota >= 4){
    resp = "Recuperação!"
}
if ( nota < 4 ){
    resp = "Reprovado!"
} */

//processamento = 2
if (nota >= 6) {
    resp = "Aprovado!"
} else if (nota < 4){
    resp = "Reprovado!"
} else { 
    resp = "Recuperação!"
}

let op = prompt("Quer continuar [s/n]?")

//processamento = 3

console.log(resp)

// saída
document.write(`
    Aluno: ${aluno} <br>
    Nota: ${nota} <br>
    Situação: ${resp} <br>
`)
