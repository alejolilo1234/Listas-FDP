// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Si existe
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
 * Proposito: 
 * Contrato: existe(list,number) => list;
 * Prototipo: function existe(lista,elem);
 * Ejemplos:
 */
function lookupx(lista,elem){
  if (existe(lista,elem)==true){
    if (isEmpty(lista)){
      return 0;
    }else if(first(lista)==elem){
      return 0;
    }else if(first(lista)!==elem){
      return 1+lookupx(rest(lista),elem);
    }
  } else if(existe(lista,elem)==false){
    if (isEmpty(lista)){
      return -1;
    }else if(first(lista)<elem && first(rest(lista))>elem){
      return -2;
    } else {
      return - 1 + lookupx(rest(lista),elem);
    }
  }
}

console.log(lookupx([1,2,3,4], 2));
console.log(lookupx([1,2,3,4], 3.5));
console.log(lookupx([], 1.1));
console.log(lookupx([2,4,6,10], 10));
console.log(lookupx([2,4,6,10], 11));