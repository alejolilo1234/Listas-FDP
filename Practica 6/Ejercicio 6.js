// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Copy
 * Contrato: copy(list) => list;
 * Prototipo: function copy(lista);
 * Ejemplos:
 * copy([]) => []
 * copy([1,2,3]) => [ 1, 2, 3 ]
 * copy([1, 2, [3, 4], [1]]) => [ 1, 2, [ 3, 4 ], [ 1 ] ]
 * copy([[9]]) => [ [ 9 ] ]
 */
function copy(lista){
  if (isEmpty(lista)||(isEmpty(first(lista)))) return[];
  else if(isList(first(lista))==false) return cons(first(lista),rest(lista));
  else if (isList(first(lista))==true) return cons(first(lista),rest(lista));
}

console.log(copy([]));
console.log(copy([1,2,3]));
console.log(copy([1, 2, [3, 4], [1]]));
console.log(copy([[9]]));