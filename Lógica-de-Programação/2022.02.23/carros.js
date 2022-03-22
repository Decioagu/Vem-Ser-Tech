const carros = [];
const tabela = document.getElementById("tabela");
let id = 1;
moeda = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"});

function adicionar() {

    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;
    const situacao = document.getElementById("situacao").value;
    const preco = (document.getElementById("preco").value == "") ? 0 : parseFloat(parseFloat(document.getElementById("preco").value).toFixed(2));
    
    const carro = {
        id: id++,
        modelo: modelo,
        ano: ano,
        cor: cor,
        situacao: situacao,
        preco: preco
    };
    
    carros.push(carro);
    mostra_tabela();
    atualiza_pagina();
}

function mostra_tabela() {
    tabela.innerHTML = carros.map(
        function(carro) {
            dados =
                `<tbody align="center">
                    <td>${carro.id}</td>
                    <td>${carro.modelo}</td>
                    <td>${carro.ano}</td>
                    <td style="background-color: ${carro.cor};"></td>
                    <td>${carro.situacao}</td>
                    <td>${moeda.format(carro.preco)}</td>
                </tbody>`;
            return dados;
        }
    ).join("");
}

function atualiza_pagina() {
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("cor").value = "#000000";
    document.getElementById("situacao").value = "novo";
    document.getElementById("modelo").focus();
    valor_total();
}

function valor_total() {
    valores = [];
    carros.forEach( carro => valores.push(carro.preco));
    
    document.getElementById("valor_carros").textContent = moeda.format(
        valores.reduce(
            function (total, atual) {
                return total += atual;
            }
        )
    );
}

function decimaisPreco() {
    const preco = document.getElementById("preco");
    return  preco.value = parseFloat(preco.value).toFixed(2);
}

/*  TODO Avaliação
    [X] copiar exercicio da loja de carros
    [X] add uma coluna com um id (ao lado esquerdo do modelo)
    [X] add no input um campo para receber o preço
    [X] exibir uma coluna com o preço
    [X] exibir o valor total de todos os veículos cadastrados (usar reduce)
*/