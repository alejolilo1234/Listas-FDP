// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Reemplazar elemento en la posición X
 * Contrato: replaceX(number,list,number,number) => list;
 * Prototipo: function replaceX(x,lista,num, i = 0);
 * Ejemplos:
 * replaceX(0,[1,2,3],7) => [ 7, 2, 3 ]
 * replaceX(1,[1,2,3],7) => [ 1, 7, 3 ]
 * replaceX(5,[1,0,3,5,9,3], 8) => [ 1, 0, 3, 5, 9, 8 ]
 * replaceX(-1,[1,0,3,5,9,3], 8) => [ 1, 0, 3, 5, 9, 3 ]
 * replaceX(0,[], 7) => []
 */
function replaceX(x,lista,num, i = 0){
  if (isEmpty(lista)) return [];
  else if (i==x) return cons(num, rest(lista)); 
  else return cons(first(lista),replaceX(x, rest(lista),num, i+1));  
}

console.log(replaceX(0,[1,2,3],7));
console.log(replaceX(1,[1,2,3],7));
console.log(replaceX(5,[1,0,3,5,9,3], 8));
console.log(replaceX(-1,[1,0,3,5,9,3], 8));
console.log(replaceX(0,[], 7));