class Veiculo {
  constructor(rodas = 1, usaCombustivel = '') {
    this.rodas = rodas;
    this.usaCombustivel = usaCombustivel.toLowerCase();
  }

  set setRodas(r){
    this.rodas = r;
  }
  get getRodas(){
    if (this.rodas < 1){
      return `[ERRO] no descritivo ${this.rodas}. O parametro rodas deve ter volor maior ou igual a 1.`
    } else { return this.rodas } 
  }

  set setUsaCombustivel(uc){
    this.usaCombustivel = uc;
  }
  get getUsaCombustivel(){
    if (this.usaCombustivel == 'true' || this.usaCombustivel == 'false'){
      return this.usaCombustivel;
    } else { return `[ERRO] no descritivo ${this.usaCombustivel}. O parametro "usaCombustivel" deve ter volor "true' ou "flase"`; } 
  }

}

class Carro extends Veiculo {
  constructor(rodas, usaCombustivel, tipoDeCombustivel = '') {
      super(rodas, usaCombustivel);
      this.tipoDeCombustivel = tipoDeCombustivel.toLowerCase();
  }

  set setTipoDeCombustivel(tc){
    this.tipoDeCombustivel = tc;
  }

  get getTipoDeCombustivel(){
    if (this.tipoDeCombustivel == 'gasolina'|| this.tipoDeCombustivel == 'álcool' ||this.tipoDeCombustivel == 'flex' ){
      return this.tipoDeCombustivel;
    } else { return `[ERRO] no descritivo ${this.tipoDeCombustivel} . O parametro "this.tipoDeCombustivel" deve ser preenchido com "gasolina", "álcool" ou "flex"` } 
  } 
}


class Bicicleta extends Veiculo {
  constructor(rodas, usaCombustivel, infantil = '') {
      super(rodas, usaCombustivel);
      this.infantil = infantil.toLowerCase();
  } 

  set setInfantil(r){
    this.rodas = r;
  }

  get getInfantil(){
    if (this.infantil == 'true' || this.infantil == 'false'){
      return this.infantil
    } else {  
      return `[ERRO] no descritivo ${this.infantil}. O parametro "infantil" deve ter volor "true' ou "flase"`
    } 
  }

}

const carro1 = new Veiculo(0, 'tue');
console.log(carro1.getRodas);
carro1.setRodas = 4
console.log(carro1.getRodas);
console.log(carro1.getUsaCombustivel);
carro1.setUsaCombustivel = 'true'
console.log(carro1.getUsaCombustivel);

const carro2 = new Carro('f');
console.log(carro2.getTipoDeCombustivel);
carro2.setTipoDeCombustivel = 'gasolina'
console.log(carro2.getTipoDeCombustivel);

const carro3 = new Bicicleta('uhn')
console.log(carro1.getUsaCombustivel);
carro1.setUsaCombustivel = 'false'
console.log(carro1.getUsaCombustivel);
console.log(carro3.getInfantil)
carro3.setInfantil = 'false'
console.log(carro3.getInfantil)



/* 
Construa uma classe Veiculo que tem como propriedades rodas (1 a n), usaCombustivel (true/false), uma classe Carro (tipoDecombustivel: 'gasolina', 'álcool', 'flex') que herda de Veiculo e Bicicleta (infantil: true/false - tem que ter mais que 2 rodas) que também herda as características de Veiculo.
*/