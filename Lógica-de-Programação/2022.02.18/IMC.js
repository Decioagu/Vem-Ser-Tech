function calcular(){
    const altura =  parseFloat(document.getElementById("altura").value);
    const peso =  parseFloat(document.getElementById("peso").value);
    const imc = peso / (altura ** 2);
    const pessoa = document.getElementById("pessoa");

    console.log(altura.length)
    document.getElementById("resultado").value = imc.toFixed(2);

    pessoa.innerHTML = 'Saúde'

    if (imc < 17.3){
        pessoa.innerHTML = 'Você esta magro'
    } else if (imc < 25.5){
        pessoa.innerHTML = 'Seu peso é normal'
    } else if(imc < 29.7){
        pessoa.innerHTML = 'Você esta com sobre pesso'
    } else {
        pessoa.innerHTML = 'Você esta obeso'
    }

}