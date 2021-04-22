// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: 
 * Contrato: existe(list,number) => list;
 * Prototipo: function existe(lista,elem);
 * Ejemplos:
 */
function reduce(lista,funcion,numero){
    if(isEmpty(lista)) return numero;
    else return reduce(rest(lista),funcion,funcion(first(lista),numero));
}

console.log(reduce([1, 2, 3, 4, 5], (val, acum) => acum + val, 0))
console.log(reduce([1, 2, 3, 4, 5], (val, acum) => acum * val, 1))
console.log(reduce([1, 7, 3, 14, 5], (val, acum) => Math.max(val, acum), 0))
console.log(reduce([1, 7, 3, 14, 5], (val, acum) => Math.min(val, acum), 9999))
console.log(reduce([{a: "María"}, {a: "Carlos"}], (val, acum) => acum + "-" +val.a, ""));