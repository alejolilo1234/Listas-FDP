// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length, filter, map} = require('functional-light');

/**
 * Proposito:
 * Contrato: fibonacci(number) => number;
 * Prototipo: function fibonacci(n);
 * Ejemplos:
 */
function funcion_map(lista,funcion){
  return map(lista,funcion);
}

console.log(funcion_map([1, 2, 3, 4], (x) => x * x));
console.log(funcion_map([{a: "María"}, {a: "Carlos"}], (v) => "Hola " + v.a));