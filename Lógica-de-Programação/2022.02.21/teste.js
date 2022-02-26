
var palavra = 'arra'
function rev(palavra){
  var reverso = palavra.split('').reverse().join(''); 
 
  if(palavra === reverso) {
    return console.log('SIM, SOU UM PALÍNDROMO');
    } else {
    return console.log('INFELIZMENTE, NÃO SOU UM PALÍNDROMO');
    }
}

rev('arrqa')