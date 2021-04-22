const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Invertir lista
 * Contrato: invertir(list) => list;
 * Prototipo: function invertir(lista);
 * Ejemplos:
 * invertir([]) => []
 * invertir([1]) => [1]
 * invertir([4,1,2,7,4,1]) => [ 1, 4, 7, 2, 1, 4 ]
 * invertir([1,2,1]) => [1,2,1]
 */

function invertir(lista){
  if (isEmpty(lista))
  {
    return [];
  }
  else 
  {
    return append(invertir(rest(lista)),first(lista));
  }
}

console.log(invertir([]));
console.log(invertir([1]));
console.log(invertir([4,1,2,7,4,1]));
console.log(invertir([1,2,1]));