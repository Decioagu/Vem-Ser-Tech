console.log("=====COMPARAÇÃO=====")

function comparacao(){

    /* extrai a "tag" do HTML pelo "id" */
    const num1 =  parseInt(document.getElementById("num1").value); /* ".value" se refere ao valor de entrada digitado pelo usuario */
    
    const num2 =  parseInt(document.getElementById("num2").value);
    console.log(num1, num2);

    let respostault = 0;

    const comparador = document.getElementById("selecao") 
    switch (comparador.value) {
        case 'MaiorQue':
            respostault = num1 > num2;
            break;
        case 'MenorQue':
            respostault = num1 < num2;
            break;
        case 'Igual':
            respostault = num1 == num2;
        case 'IgualOuMaiorQue':
            respostault = num1 >= num2;
            break;
        case 'IgualOuMenorQue':
            respostault = num1 <= num2;
            break;
        case 'Diferente':
            respostault = num1 != num2;
            break;
        default:
            break;
    }

    /* converter string para número "parseInt" ou parseFloat */
    console.log(respostault);

    /* saida de dados na tela do usuário */
    if (respostault){
        document.getElementById("respostaultado").value = "Verdadeiro";
    } else{ document.getElementById("respostaultado").value = "Falso";}
      
}