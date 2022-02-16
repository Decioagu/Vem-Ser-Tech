console.log("=====COMPARAÇÃO=====")

function comparacao(){

    /* extrai a "tag" do HTML pelo "id" */
    const num1 =  parseInt(document.getElementById("num1").value); /* ".value" se refere ao valor de entrada digitado pelo usuario */
    const num2 =  parseInt(document.getElementById("num2").value);
    console.log(num1, num2);

    /* converter string para número "parseInt" ou parseFloat */
    const result = num1 > num2;
    console.log(result);

    /* saida de dados na tela do usuário */
    document.getElementById("resultado").value = result;  
}