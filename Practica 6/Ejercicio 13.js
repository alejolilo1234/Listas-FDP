// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Numero de fibonacci
 * Contrato: fibonacci(number) => number;
 * Prototipo: function fibonacci(n);
 * Ejemplos:
 */
function deleteX(lista,indice){
  let conteo=0
  if(indice>(lista.length-1)||indice<0){
    return lista;
  }else{
    return buscar(lista,indice,conteo);
  }
}
/**
 * Proposito: Numero de fibonacci
 * Contrato: fibonacci(number) => number;
 * Prototipo: function fibonacci(n);
 * Ejemplos:
 */
function buscar(lista,indice,conteo){
  if(isEmpty(lista)){
    return []
  }else if(conteo==indice){
    return rest(lista)
  }else{
    return append([first(lista)],buscar(rest(lista),indice,conteo+1))
  }
}

console.log(deleteX([1,2,3], 7));
console.log(deleteX([1,2,3], 1));
console.log(deleteX([1,0,3,5,9,3], 5));
console.log(deleteX([1,0,3,5,9,3], 0));
console.log(deleteX([], 0));
console.log(deleteX([2, 4], -1));