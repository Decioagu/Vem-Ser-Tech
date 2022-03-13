// objeto
const Carro = {
    // istancia da propriedade pelo "set"
    set carroCor(c){
        this.cor = c;
    },
    set carroMarca(m){
        this.marca = m;
    },
    // retorno do objeto pelo "get"
    get msg(){
        return `A marca do carro é ${this.marca} e sua cor é ${this.cor}`;
    }
}

// instanca as propriedades diretamante no "set"
Carro.carroCor = 'PRATA';
Carro.carroMarca = 'FIAT';
// mostra retorno do "objeto" no console 
console.log(Carro.msg);


/* Construa um objeto do tipo Carro que contenha os seguintes atributos: 
  - cor
  - marca

Insira a cor do carro utilizando getter e setter;
Insira a marca do carro utilizando getter e setter;

Crie um get que retorne uma mensagem informando a marca e a cor do carro. */

