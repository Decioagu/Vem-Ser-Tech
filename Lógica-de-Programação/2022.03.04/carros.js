const carros = [];
let id = 1;

// função de botão de acionamento
function adicionar() {
    const modelo = document.getElementById("modelo").value;
    const ano = document.getElementById("ano").value;
    const cor = document.getElementById("cor").value;
    const situacao = document.getElementById("situacao").value;
    const preco = (document.getElementById("preco").value == "") ? 0 : parseFloat(document.getElementById("preco").value);
    
    const carro = {
        id: id++,
        modelo: modelo,
        ano: ano,
        cor: cor,
        situacao: situacao,
        preco: preco
    };
    
    carros.push(carro);
    mostraTabela();
    atualizaPagina();
    valorTotal();
}

const tabela = document.getElementById("tabela");
moeda = new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"});
function mostraTabela() {
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

function atualizaPagina() {
    document.getElementById("modelo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("cor").value = "";
    document.getElementById("situacao").value = "novo";
    document.getElementById("modelo");
}

function valorTotal() {
    valorDoCarro = [];
    carros.forEach( 
        function(carro){ 
            valorDoCarro.push(carro.preco)
        }
    );

    document.getElementById("valorCarros").innerHTML = moeda.format(
        valorDoCarro.reduce(
            function (total, atual) {
                return total += atual;
            }
        )
    )
}

