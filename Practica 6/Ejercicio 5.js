// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Numero de fibonacci
 * Contrato: fibonacci(number) => number;
 * Prototipo: function fibonacci(n);
 * Ejemplos:
 */
function fibonacci(n){
  if(n == 1) return 0;
  else if(n == 2) return 1;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}
/**
 * Proposito: Construir lista con número de fibonacci
 * Contrato: construirLista(number) => list;
 * Prototipo: function construirLista(n);
 * Ejemplos:
 */
function construirLista(n){
  if(n == 0) return [];
  else return cons((fibonacci(n)), construirLista(n-1));
}
/**
 * Proposito: Invertir lista
 * Contrato: invertir(list,list) => list;
 * Prototipo: function invertir(lista1, lista2);
 * Ejemplos:
 */
function invertir(lista1, lista2){
  if(isEmpty(lista1)) return lista2;
  else return invertir(rest(lista1),cons(first(lista1), lista2));
}
/**
 * Proposito: Contruir la lista con números
 * Contrato: invertir(number) => list;
 * Prototipo: function invertir(n);
 * Ejemplos:
 * fiboList(0) => []
 * fiboList(1) => [ 0 ]
 * fiboList(2) => [ 0, 1 ]
 * fiboList(3) => [ 0, 1, 1 ]
 * fiboList(6) => [ 0, 1, 1, 2, 3, 5 ]
 */
function fiboList(n){
  return invertir(construirLista(n), []);
}

console.log(fiboList(0));
console.log(fiboList(1));
console.log(fiboList(2));
console.log(fiboList(3));
console.log(fiboList(6));