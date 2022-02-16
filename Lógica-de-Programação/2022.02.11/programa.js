/* informações armazenadas */
var nome = "Décio Santana de Aguiar"
var email = "decioagu@gmail.com"
var telefone = "(21) 9999-9999"

/* imprimir console programador */
console.log("nome", nome);
console.log("email", email);
console.log("telefone", telefone);

/* imprimiro para usuario */
document.write("<p> Dados na memória</p>")
document.write("<p>Nome: ", nome, "</p>")
document.write("<p>E-mail: ", email, "</p>")
document.write("<p>Telefone: ", telefone, "</p>")

/* ========================================================= */

/* usuario inserir dados */
var nome = prompt("Escreva seu nome:")
var email = prompt("Escreva seu e-mail:")
var telefone = prompt("Escreva seu telefone:")

/* imprimir console programador */
console.log("nome", nome);
console.log("email", email);
console.log("telefone", telefone);

/* imprimir para usuario */
document.write("<hr><p> Dados iserido pelo usuario</p>")
document.write("<p>Nome: ", nome, "</p>")
document.write("<p>E-mail: ", email, "</p>")
document.write("<p>Telefone: ", telefone, "</p><hr>")