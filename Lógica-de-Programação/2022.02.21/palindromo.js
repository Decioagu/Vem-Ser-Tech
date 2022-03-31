
var palavra = 'arra'
function rev(palavra){
  // .split("parametro") <=> transforma uma String em um Array
  // .reverse <=> inverte a orden do Array
  // .join("parametro") <=> junta o Array em uma String
  var reverso = palavra.split('').reverse().join(''); 
 
  if(palavra === reverso) {
    return  document.write('SIM, SOU UM PALÍNDROMO');
    } else {
    return document.write('INFELIZMENTE, NÃO SOU UM PALÍNDROMO');
    }
}

document.write(palavra, '=')
document.write('arra<br><br>')
rev('arra')
