const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Concatenar listas
 * Contrato: concat(list,list) => list;
 * Prototipo: function concat(lista1,lista2);
 * Ejemplos: 
 * concat([],[]) => []
 * concat([],[1, 2]) => [1,2]
 * concat([3,5], []) => [3,5]
 * concat([1,2,true],["FDP",3,8,2,7]) => [1,2,true,'FDP',3,8,2,7]
 */

function concat(lista1,lista2){
    if (isEmpty(lista1)) 
    {
      return lista2;
    }
    else if(isEmpty(lista2))
    {
      return lista1;
    }
    if (!isList(lista1,lista2))
    {
      return null;
    }
    else
    {
      return append(lista1,lista2);
    }
    
}

console.log(concat([],[]));
console.log(concat([],[1, 2]));
console.log(concat([3,5], []));
console.log(concat([1,2,true],["FDP",3,8,2,7]));