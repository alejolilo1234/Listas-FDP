// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Existe
 * Contrato: existe(list,number) => list;
 * Prototipo: function existe(lista,elem);
 * Ejemplos:
 */
function existe(lista,elem){
    if (isEmpty(lista)) return false;
    else if (first(lista) === elem) return true;
    else return existe(rest(lista),elem);
}
/**
 * Proposito: determina si el elemento buscado está en la lista, si es así, retornará el lugar donde se encuentra, de lo contrario retornará -1
 * Contrato: lookUp(list,number) => number;
 * Prototipo: function lookUp(lista, elem);
 * Ejemplos:
 * lookUp([["3",4],5,3,4], 3) => 2
 * lookUp([1,2,3,4], 3.5) => -1
 * lookUp(["a"], 1.1) => -1
 * lookUp([11,25, 1, 6,10], 6) => 3
 */ 

function lookUp(lista, elem){
  if (!existe(lista, elem)) return -1;
  else if(first(lista) === elem) return 0;
  else return lookUp(rest(lista), elem) + 1;
}

console.log(lookUp([["3",4],5,3,4],3));
console.log(lookUp([1,2,3,4], 3.5));
console.log(lookUp(["a"], 1.1));
console.log(lookUp([11,25, 1, 6,10], 6));