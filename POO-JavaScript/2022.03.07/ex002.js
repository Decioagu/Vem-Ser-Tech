// objeto
const Ave =  {
    // propriedade
    especie: 'Pinguim',
    
    // método (propriedade: função)
    animal: function () { 
        return this.especie;
    }
}

// objeto
const Peixe =  {
    // propriedade
    especie: 'Tubarão',
}

// retorna o conteudo da função "animal" dentro do objeto "Ave" no console
console.log(`Nome do animal: ${Ave.animal()}.`);

/* 
atribui a variavel "especie2" o conteudo do médoto "animal" (dentro do objeto "Ave") utilizando como parametro a propriedade do objeto "Peixe" 
*/
const especie2 = Ave.animal.bind(Peixe);

//a variavel "especie2" mostra o conteudo do objeto "Peixe" no console
console.log(`Nome do animal: ${especie2()}.`);
