// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length, filter} = require('functional-light');

/**
 * Proposito:
 * Contrato: fibonacci(number) => number;
 * Prototipo: function fibonacci(n);
 * Ejemplos:
 */
function filtrar(lista,condicion){
  return filter(lista,condicion);
}

console.log(filtrar([1, 3, 4, 6, 0, 1], (a) => a > 3));
console.log(filtrar(["ab", "acv", "gggg", "cds"], (a) => a.length == 3));