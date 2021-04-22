const { cons, first, rest, isEmpty, isList } = require('functional-light');

/**
 * Proposito: Retornar el número mayor de una lista
 * Contrato: mayorL(list) => number || string;
 * Prototipo: function mayorL(lista);
 * Ejemplos:
 * mayorL([]) => null
 * mayorL([1,6,2]) => 6
 * mayorL([-9]) => -9
 * mayorL([1,6,20,3,-6, 8, 9]) => 20
 */

function mayorL(lista)
{
    if(isEmpty(lista)) 
    {
      return null;
    }
    if(isEmpty(rest(lista))) 
    {
      return first(lista);
    }
    else if(first(lista) > mayorL(rest(lista)))
    {
      return first(lista);
    }
    else 
    {
      return mayorL(rest(lista));
    }
}

console.log(mayorL([]));
console.log(mayorL([1,6,2]));
console.log(mayorL([-9]));
console.log(mayorL([1,6,20,3,-6, 8, 9]));