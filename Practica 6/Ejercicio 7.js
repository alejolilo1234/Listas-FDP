// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Sacar solo los números de una lista
 * Contrato: soloNum(list) => list;
 * Prototipo: function soloNum(lista);
 * Ejemplos:
 * soloNum([]) => []
 * soloNum(["a"]) => []
 * soloNum(["a", 1]) => [ 1 ]
 * soloNum([6, "b"]) => [ 6 ]
 * soloNum([6, "b", 1, 2, true, "b", false, -2]) => [ 6, 1, 2, -2 ]
 */
function soloNum(lista){
  if (isEmpty(lista)) return ([]);
  else if (typeof(first(lista)) == "number") return (cons(first(lista), soloNum(rest(lista))));
  else return (soloNum(rest(lista)));
}

console.log(soloNum([]));
console.log(soloNum(["a"]));
console.log(soloNum(["a", 1]));
console.log(soloNum([6, "b"]));
console.log(soloNum([6, "b", 1, 2, true, "b", false, -2]));