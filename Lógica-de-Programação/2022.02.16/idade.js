console.log("=====Faixa Etária=====")

function analise(){

    // entrada
    const idade = document.getElementById("idade").value; 
    console.log(idade);
  
    // processamento
    let respostap = null
    if (idade < 0){
        respostap = "Idade negativa não existe!!!"
    } else if (idade <= 12) {
        respostap = "Criança"
    } else if (13 <= idade && idade <= 17){
        respostap = "Adolecente"
    } else if (18 <= idade && idade <= 64){
        respostap = "Adulto"
    } else { respostap = "Idoso"}

    console.log(respostap);

    //respostaposta
    document.getElementById("respostaultado").value = respostap;  
}