// classe
class Televisao {
    // função construtora
    constructor(ligada = 'desligada', canal = 'Mudou de canal', volume = 0) {
        this.ligada = ligada,
        this.canal = canal,
        this.volume = volume
    }

    // métodos para retorno da "Class"
    get ligar() {
        if (this.ligada == 'ligar'){
            return 'A TVget já esta "ligada"'
        } else {
            this.ligada = 'ligar';
            return this.ligada
        } 
    }

    get desliga() {
        if (this.ligada == 'desligada'){
            return 'A TV já esta "desligada"'
        } else {
            this.ligada = 'desligada';
            return this.ligada
        } 
    }
    
    get mudaDeCanal (){
        if (this.ligada == 'desligada'){
            return 'Impossivel executar'
        } else { 
            return this.canal
        }
    }
    
    get aumentaVolume (){
        if (this.ligada == 'desligada'){
            return 'Impossivel executar'  
        } else if (this.volume == 3){ 
            return 'Volume máximo'
        } else {
            this.volume++
            return this.volume
        }
    }

    get diminuiVolume(){
        if (this.ligada == 'desligada'){
            return 'Impossivel executar'  
        } else if (this.volume == 0){ 
            return 'Volume mínimo'
        } else {
            this.volume--
            return this.volume
        }
    }
}

// instanciando a função construtora
let Tv = new Televisao();

// mostra retorno da "Class" no console conforme "método" <=> console.log(variávelAtribuida.métodoDaClass())
console.log(Tv.diminuiVolume);
console.log(Tv.mudaDeCanal);
console.log(Tv.aumentaVolume);
console.log(Tv.ligar);
console.log(Tv.desliga);
console.log(Tv.ligar);
console.log(Tv.ligar);
console.log(Tv.desliga);
console.log(Tv.desliga);
console.log(Tv.mudaDeCanal);
console.log(Tv.ligar);
console.log(Tv.mudaDeCanal);
console.log(Tv.ligar);
console.log(Tv.aumentaVolume);
console.log(Tv.aumentaVolume);
console.log(Tv.aumentaVolume);
console.log(Tv.aumentaVolume);
console.log(Tv.diminuiVolume);
console.log(Tv.diminuiVolume);
console.log(Tv.diminuiVolume);
console.log(Tv.diminuiVolume);
console.log(Tv.desliga);

/* 
Enunciado
Refaça o exercício da TV utilizando uma função construtora
Refaça o exercício da TV utilizando a sintaxe de classe (class).
*/
