console.log("=====Calculadora=====")

function calcular(){
    console.log("ClICK!!!")

    /* extrai a "tag" do HTML pelo "id" */
    const num1 = document.getElementById("num1").value; /* ".value" se refere ao valor de entrada digitado pelo usuario */
    const num2 = document.getElementById("num2").value;
    console.log(num1, num2);

    /* converter string para número "parseInt" ou parseFloat */
    const total = parseInt(num1) + parseInt(num2);
    console.log(total);

    /* saida de dados na tela do usuário */
    if (num1.length == 0 || num2.length == 0){
        alert('Favor prencer os canpos "1º número" e "2º número"')
    } else { document.getElementById("resultado").value = total; }
      
}