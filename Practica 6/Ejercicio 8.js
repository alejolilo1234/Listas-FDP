// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Numero de fibonacci
 * Contrato: fibonacci(number) => number;
 * Prototipo: function fibonacci(n);
 * Ejemplos:
 */
function insertX(n,p,lista){
    let lista_nueva = [];
  if(isEmpty(lista)){
    return [n];
  }else if(p>=0 && p<=lista.length){
    if(p==0){
      return append(cons(n,[]),lista)
    }else{
      return append(cons(first(lista),lista_nueva),insertX(n,p-1,(rest(lista))))
    }
  }else{
    return lista
  }
}

console.log(insertX(7,0,[1,2,3]));
console.log(insertX(7,1,[1,2,3]));
console.log(insertX(8,6,[1,0,3,5,9,3]));
console.log(insertX(8,7,[1,0,3,5,9,3]));
console.log(insertX(8,-1,[1,0,3,5,9,3]));
console.log(insertX(7,0,[]));
