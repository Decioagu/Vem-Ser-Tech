// objeto
const Tv =  {
    // propriedades
    ligada: 'desligada',
    canal: 'Mudou de canal',
    volume: 0,

    // métodos
    ligar () {
        if (this.ligada == 'ligar'){
            return 'A TV já esta "ligada"'
        } else {
            this.ligada = 'ligar';
            return this.ligada
        } 
    },

    desliga () {
        if (this.ligada == 'desligada'){
            return 'A TV já esta "desligada"'
        } else {
            this.ligada = 'desligada';
            return this.ligada
        } 
    },
    
    mudaDeCanal (){
        if (this.ligada == 'desligada'){
            return 'Impossivel executar'
        } else { 
            return this.canal
        }
    },
    
    aumentaVolume (){
        if (this.ligada == 'desligada'){
            return 'Impossivel executar'  
        } else if (this.volume == 3){ 
            return 'Volume máximo'
        } else {
            this.volume++
            return this.volume
        }
    },

    diminuiVolume(){
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

// mostra retorno do "objeto" no console conforme "método" <=> console.log(objeto.método())
console.log(Tv.diminuiVolume());
console.log(Tv.mudaDeCanal());
console.log(Tv.aumentaVolume());
console.log(Tv.ligar());
console.log(Tv.desliga());
console.log(Tv.ligar());
console.log(Tv.ligar());
console.log(Tv.desliga());
console.log(Tv.desliga());
console.log(Tv.mudaDeCanal());
console.log(Tv.ligar());
console.log(Tv.mudaDeCanal());
console.log(Tv.ligar());
console.log(Tv.aumentaVolume());
console.log(Tv.aumentaVolume());
console.log(Tv.aumentaVolume());
console.log(Tv.aumentaVolume());
console.log(Tv.diminuiVolume());
console.log(Tv.diminuiVolume());
console.log(Tv.diminuiVolume());
console.log(Tv.diminuiVolume());
console.log(Tv.desliga());


/* 
Enunciado
Faça um objeto TV com as propriedades canal, volume e ligada e métodos liga, desliga, mudaDeCanal e aumentaVolume, diminuiVolume. */