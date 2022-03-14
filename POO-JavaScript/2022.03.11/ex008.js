 //Classe
 class Sorteio {
   //função contrutora
  constructor (pessoa){
    this.pessoa = pessoa;
  }

  // método
  sorteiaPremio() {
    for (let cont = 0; cont < this.pessoa; cont++){
      console.log(`O sorteado foi Nº${Math.floor(Math.random() * this.pessoa +1)}`)
    }
  }
}
// instanciando objeto
const sorteio = new Sorteio(10)

// acessando o método
sorteio.sorteiaPremio()

/*
 Crie uma classe Sorteio que tem o número de pessoas inscritas
  e um método sorteiaPremio que sorteia um número que
  corresponderá ao número de inscrição do participante 
  e declara o vencedor. 
 */
