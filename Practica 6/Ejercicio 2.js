const { cons, first, rest, isEmpty, isList, length } = require('functional-light');

/**
 * Proposito: Retornar la suma de una lista
 * Contrato: suma(list) => number;
 * Prototipo: function suma(lista);
 * Ejemplos:
 */

function suma(lista)
{
  if(isEmpty(lista)) 
  {
    return 0;
  }
  else
  {
    return first(lista) + suma(rest(lista));
  }
}

/**
 * Proposito: Retornar el promedio de una lista
 * Contrato: promedio(list) => number || string;
 * Prototipo: function promedio(lista);
 * Ejemplos:
 */

function promedio(lista)
{
  if(isEmpty(lista))
  {
    return null;
  }
  else 
  {
    return suma(lista)/length(lista);
  }
}

console.log(promedio([]));
console.log(promedio([5]));
console.log(promedio([0, 1, 8]));
console.log(promedio([10,2,3,1,4,4,4]));