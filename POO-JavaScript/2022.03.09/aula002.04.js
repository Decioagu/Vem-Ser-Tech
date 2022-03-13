console.log('//===========================//========================//') 
// classe pai "Ave"
class Ave {
  // função contrutora
  constructor(cor,especie) {
    // propriedade
    this.cor = cor,
    this.especie = especie
  }
  // retorno médoto da classe pai "Ave"
  get caracteristica() {
    return `A ${this.especie} é ${this.cor}.`
  }
}

// instanciando objeto na classe pai "Ave"
let a = new Ave("branca", "galinha");
// mostra conteudo da classe pai "Ave"
console.log(a);
// retorna médoto da classe pai "Ave"
console.log(a.caracteristica);


// classe filho da classe pai "Ave" 
class Passaro extends Ave {
  constructor(cor, especie, voa){
    super(cor, especie) // herança da propriedade da classe pai "Ave"
    this.voa = voa // propriedade da própria classe
  }
  // retorno médoto da classe pai "Ave"
  get caracteristica() {
    return `A ${this.especie} é ${this.cor} e ${this.voa}.`
  }
}

// classe filho da classe pai "Ave"
class Pinguin extends Ave {
  constructor(cor, especie, bica) {
    super(cor, especie); // herança da propriedade da classe pai "Ave"
    this.bica = bica // propriedade da própria classe
  }
  get caracteristica() {
    return `O ${this.especie} é ${this.cor} e ${this.bica}.`
  }
}
// instanciando objeto na "class Passaro"
let b = new Passaro("azul", "arara", 'voa')
// instanciando objeto na "class Pinguim"
let g = new Pinguin("preto", "Pinguim", 'bica')
// mostra conteudo da classe filho "class Passaro extends Ave"
console.log(b)
// retorna médoto da classe filho "class Passaro extends Ave"
console.log(b.caracteristica)
// mostra conteudo da classe filho "class Pinguin extends Ave"
console.log(g)
// retorna médoto da classe filho "class Pinguin extends Ave"
console.log(g.caracteristica)

console.log('//===========================//========================//') 
// usando o "extends" para um objeto pré construido (á existente)
class DataModificada extends Date  {
  constructor(){
    super()
  }
  // método criado
  FormateDate() {
    var meses =  ['Jan','Feb','Marçoooo','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return this.getDate() + "/" + meses[this.getMonth()] + "/" + this.getFullYear();
  }

}


let d = new DataModificada()
console.log(d.getDate()); // método nativo do "Data" invocado pela "class DataModificada extends Date" 
console.log(d.getMonth()); // método nativo do "Data" invocado pela "class DataModificada extends Date"
console.log(d.getFullYear()); // método nativo do "Data" invocado pela "class DataModificada extends Date"
console.log(d.FormateDate()); // retorna médoto da "class DataModificada extends Date"

console.log('//===========================//========================//') 
