console.log("=====COMPARAÇÃO=====")

function comparacao(){

    /* extrai a "tag" do HTML pelo "id" */
    const num1 =  parseInt(document.getElementById("num1").value); /* ".value" se refere ao valor de entrada digitado pelo usuario */
    
    const num2 =  parseInt(document.getElementById("num2").value);
    console.log(num1, num2);

    let result = 0;

    const comparador = document.getElementById("selecao") 
    switch (comparador.value) {
        case 'MaiorQue':
            result = num1 > num2;
            break;
        case 'MenorQue':
            result = num1 < num2;
            break;
        case 'Igual':
            result = num1 == num2;
        case 'IgualOuMaiorQue':
            result = num1 >= num2;
            break;
        case 'IgualOuMenorQue':
            result = num1 <= num2;
            break;
        case 'Diferente':
            result = num1 != num2;
            break;
        default:
            break;
    }

    /* converter string para número "parseInt" ou parseFloat */
    console.log(result);

    /* saida de dados na tela do usuário */
    if (result){
        document.getElementById("resultado").value = "Verdadeiro";
    } else{ document.getElementById("resultado").value = "Falso";}
      
}