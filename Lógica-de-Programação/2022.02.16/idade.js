console.log("=====Faixa Etária=====")

function analise(){

    // entrada
    const idade = document.getElementById("idade").value; 
    console.log(idade);
  
    // processamento
    let resp = null
    if (idade < 0){
        resp = "Idade negativa não existe!!!"
    } else if (idade <= 12) {
        resp = "Criança"
    } else if (13 <= idade && idade <= 17){
        resp = "Adolecente"
    } else if (18 <= idade && idade <= 64){
        resp = "Adulto"
    } else { resp = "Idoso"}

    console.log(resp);

    //resposta
    document.getElementById("resultado").value = resp;  
}