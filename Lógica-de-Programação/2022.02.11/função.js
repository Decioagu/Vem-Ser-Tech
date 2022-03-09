console.log("==FUNÇÃO==")

/* função nomeada */
function soma(n1=0, n2=0) {
    return n1 + n2;
}

console.log(soma); // Ref. Função
console.log(soma()); // 0
console.log(soma(5)); // 5 
console.log(soma(5,10)); // 15

/* função anonima */
const sum = function (num1=0, num2=0) {
    return num1 + num2;
}

console.log(sum); // Ref. Função
console.log(sum()); // 0
console.log(sum(5)); // 5 
console.log(sum(5,10)); // 15