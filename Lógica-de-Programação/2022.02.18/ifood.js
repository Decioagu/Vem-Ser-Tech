function custo(){
    const diasTrabalhados = 20; // dias
    const precoDaGasolna = 5.5; // litro
    const volumeTanqueGasolina = 40; // litros
    const distanciaVolta = 20; // Km
    const kmLitroCarro = 12;

    
    let totalValorMes = 0; // custo total no mês

    let numeroDeEntrega = parseInt(document.getElementById("numEntregas").value);
    let diasTotalDeEntrega = parseInt(document.getElementById("distEntregas").value);

    let totalKmDia = (numeroDeEntrega * (diasTotalDeEntrega * 2) + distanciaVolta);
    let totalKmMes = totalKmDia * diasTrabalhados;
    let custoGasolinaInicial = volumeTanqueGasolina * precoDaGasolna;
    let quantoCarroRoda = volumeTanqueGasolina * volumeTanqueGasolina;
    

    console.log(altura.length)
    document.getElementById("respostaultado").value = imc.toFixed(2);

    pessoa.innerHTML = 'Saúde'

    

}