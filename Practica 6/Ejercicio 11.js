// Jhon Abril <jhon.abril@correounivalle.edu.co>

// Librería functional-light

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/**
 * Proposito: Ordenar lista de manera ascendente
 * Contrato: insertInOrder(list,number) => list;
 * Prototipo: function insertInOrder(lista,num);
 * Ejemplos: 
 * insertInOrder([], -2.3) => [ -2.3 ]
 * insertInOrder([-2, 3, 5, 5, 6 ], 4) => [ -2, 3, 4, 5, 5, 6 ]
 * insertInOrder([-2, 3, 5, 5, 6 ], 3) => [ -2, 3, 3, 5, 5, 6 ]
 * insertInOrder([-2, 3, 5, 5, 6 ], 8) => [ -2, 3, 5, 5, 6, 8 ]
 * insertInOrder([-2, 3, 5, 5, 6 ], -3) => [ -3, -2, 3, 5, 5, 6 ]
 * insertInOrder([-2, 3, 5, 5, 6 ], -2) => [ -2, -2, 3, 5, 5, 6 ]
 * insertInOrder([-2, 3, 5, 5, 6 ], 5.2) => [ -2, 3, 5, 5, 5.2, 6 ]
 */
function insertInOrder(lista,num){
    const aux = function(lista,num,i){
        if (isEmpty(lista)&&i==0){
            return cons(num,[]);
    }else if(num<first(lista)){
        return cons(num,lista);
    }else{
        return cons(first(lista),aux(rest(lista),num,i))
    }
  }
  return aux(lista,num,0)
}

console.log(insertInOrder([], -2.3));
console.log(insertInOrder([-2, 3, 5, 5, 6 ], 4));
console.log(insertInOrder([-2, 3, 5, 5, 6 ], 3));
console.log(insertInOrder([-2, 3, 5, 5, 6 ], 8));
console.log(insertInOrder([-2, 3, 5, 5, 6 ], -3));
console.log(insertInOrder([-2, 3, 5, 5, 6 ], -2));
console.log(insertInOrder([-2, 3, 5, 5, 6 ], 5.2));