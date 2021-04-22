// Recuerden incluir la libreria y cambien un poquito el estilo de programación.
//Estudien y bañense regularmente :D
// No se lo pasen a mucha gente por lo que nos ponen mala nota a todos (Si es que no cambian las cosas) :v

const {cons, first, rest, isEmpty, isList, append, length} = require('functional-light');

/*
function mayorL(lista){
    if (isEmpty(lista)){
        return null;
    }else if (length(lista)==1){
        return first(lista);
    }else{
        return Math.max(first(lista) , mayorL(rest(lista)));
    }
}


console.log(mayorL([]));
console.log(mayorL([1,6,2]));
console.log(mayorL([-9]));
console.log(mayorL([1,6,20,3,-6, 8, 9]));
*/

/*
function cambiarElemento(p,lista,n){
    if (isEmpty(lista)){
        return [];
    }
    if (p>=0 && p<=length((lista))){
        if(p==0){
            return append(cons(n,[]), rest(lista));
        }
    else{
        return append(cons(first(lista),[]), cambiarElemento(p-1,(rest(lista)), n));
    }
    }
    else{
        return lista;
    }
}
console.log(cambiarElemento(0, [1, 2, 3], 7));
console.log(cambiarElemento(1, [1, 2, 3], 7));
console.log(cambiarElemento(2, [1, 2, 3], 7));
*/

/*
const inventario = [
{nombre: "puntilla", precio: 100, saldo: 200},
{nombre: "llave paso", precio: 4500, saldo: 10},
{nombre: "cemento", precio: 26200, saldo: 50},
{nombre: "carretilla", precio: 170000, saldo: 3},
{nombre: "tanque agua", precio: 133000, saldo: 2}
];

function productos(inventario){
    if (isEmpty(inventario)){
        return [];
    }else{
        const item = first(inventario)
        if (item[precio]<10000 && item[saldo]>=5){
            return cons(item, productos(rest(inventario)));
        }else{
            return productos(rest(inventario));
        }
    }
}

console.log(rest(inventario))
//console.log(productos(inventario))
*/

/*
const lista = [0,1,2,3,4,5,6,7,8]

console.log(lista.slice(0,7))
*/

/*
var i;
var fib = []; // Initialize array!

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 35; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
*/

/*
function norma(x){
    function sum2(x){
        if(isEmpty(x)){
            return 0
        }else {
            let f= first(x)
            return sum2(x) + rest(x);
        }
    }

    return Math.sqrt(sum2(x))
}

console.log(norma([3,4]))
console.log(norma([2,2,2,2]))
*/

const {cons, first, rest, isEmpty, isList, length, append, filter, map, forEach} = require('functional-light');
/*function LongitudL(list) {
      if (isEmpty (list)){
        return 0;
      }
      else{
        return 1 + LongitudL(rest(list))
        };
 }
console.log(LongitudL([]));
console.log(LongitudL([1,"a",6,2]));
console.log(LongitudL([-9]));
console.log(LongitudL([1,6,20,"pipe",3,-6, 8, 9]));*/
/*function mayorL(list){
  const inicial=first(list);
  if(isEmpty(list)){
    return "null"
  }else{
    function dentro(inicial,list){
    if(isEmpty(list)){
      return inicial;
    }else if(first(list)>inicial){
      return dentro(first(list), rest(list));
    }else{
      return dentro(inicial,rest(list))
    }
  }
  }
  return dentro(inicial,list);
}
console.log(mayorL([]));
console.log(mayorL([1,6,2]));
console.log(mayorL([-9]));
console.log(mayorL([1,6,20,3,-6, 8, 9]));*/
/*function LongitudL(list) {
      if (isEmpty (list)){
        return 0;
      }
      else{
        return 1 + LongitudL(rest(list))
        };
 }
function SumaL(list) {
      if (isEmpty (list)){
        return 0;
      }
      else{
        return first(list) + SumaL(rest(list))
        };
 }
 function promedio(list){
   if(isEmpty(list)){
       return "null"
   }else{
       return SumaL(list)/LongitudL(list)
   }
 }
console.log(promedio([]));
console.log(promedio([5]));
console.log(promedio([0, 1, 8]));
console.log(promedio([10,2,3,1,4,4,4]));*/
/*function longitud(lista) {
  if (isEmpty (lista)){
     return 1;
  }else{
        return 1 + longitud(rest(lista));
        }
 }
 
console.log(longitud([10,20,30,40,50]))
console.log(longitud([1,80]))*/
/*function conca(lista1,lista2){

  let listafi=[];
    if(isEmpty(lista2)){
      return lista1;
    }else{
      
      let lista=lista1.concat(first(lista2))
      let resto=rest(lista2)
      return conca(lista,resto);
    }
      
      
    
}

console.log(conca([],[]));
console.log(conca([],[1, 2]));
console.log(conca([3,5], []));
console.log(conca([1,2,true],["FDP",3,8,2,7]));*/
/*function invertir(lista){
  let lista_final=[];
  if(isEmpty(lista)){
    return lista_final;
  }else{  
    return lista.pop()
    
  }
}
console.log(invertir([]));
console.log(invertir([1]));
console.log(invertir([4,1,2,7,4,1]));
console.log(invertir([1,2,1]));*/
/*
function invertir(list){
  if(isEmpty(list)){
    return list
  }else{
    return append(invertir(rest(list)),first(list))
  }
}
console.log(invertir([1, 2, 3, 4, 5]))*/







/*

function operacion(a){
  if(a==1){
    return 1;
  }else if(a==0){
    return 0;
  }{
    return operacion(a-1)+operacion(a-2);
  }
}

function lista_vacia(a){
  let lista=[]
  if(a==0){
    return[]
  }else{
    return fibonacci(a-1,lista)
  }
}
function fibonacci(a,lista){
  if(a==0){
    return cons(a,lista);
  }else{
    let aux=operacion(a)
    return fibonacci(a-1,cons(aux,lista))
  }
}
console.log(lista_vacia(6))*//*






function sidentro(lista,lista_vacia){
      return copy(first(first(lista),append(lista_vacia,first(first(lista)))))
}
function nodentro(lista,lista_vacia){
  return append(lista_vacia,first(lista))
}
function copy(lista){
  let lista_vacia=[]
  if(isEmpty(lista)){
    return lista_vacia
  }else{
    if(isList(first(lista))){
    return sidentro(lista,lista_vacia)
  }else{
    return nodentro(lista,lista_vacia)
  }
  }
  
}

console.log(copy([1, 2, [3, 4], [1]]))




function copy(lista){
  let nueva_lista=[]
  let primero=first(lista)
  if(isEmpty(lista)){
    return lista
  }else if(isList(primero)){
    return
  }else{
    return append(nueva_lista,primero)
  }
}*
function sds(){
  if(first(lista))
}*//*
function copiar(lista){
  if(!isList(first(lista))){
    return append(first(lista),copiar(rest(lista)))
  }
}
console.log(copiar([1, 2, [3, 4], [1]]))*//*
function copy(lista){
  if(isEmpty(lista)){
    return []
  }
  if(!isList(first(lista))){
    if(lista.length==1){
      return [first(lista)]
    }else{
      return append([first(lista)],copy(rest(lista)))
    }
  }else{
    return append(copy(first(lista)),copy(rest(lista)))
    }
}
console.log(copy([]));
console.log(copy([1,2,3]));
console.log(copy([1, 2, [3, 4], [5]]));
console.log(copy([[9]]));
*/
/*
function cambiarElemento(p,lista,n){
  if(isEmpty(lista)){
    return [];
  }else if(p>=0 && p<=lista.length){
    if(p==0){
      return append(cons(n,[]),rest(lista))
    }else{
      return append(cons(first(lista),[]),cambiarElemento(p-1,(rest(lista)),n))
    }
  }else{
    return lista
  }
}

console.log(cambiarElemento(0, [1, 2, 3], 7));
console.log(cambiarElemento(1, [1, 2, 3], 7));
console.log(cambiarElemento(2, [1, 2, 3], 7));/*
/*

function cambiarElemento(p,lista_entrada,n){
    if(isEmpty(lista_entrada)){
        return [];
    }else if(p>=0 && p<=lista_entrada.length){
        if(p==0){
            return append(cons(n,[]), rest(lista_entrada));
        }
    else{
        return append(cons(first(lista_entrada),[]), cambiarElemento(p-1,rest(lista_entrada), n));
    }}
    else{
        return lista_entrada;
    }
}
console.log(cambiarElemento(0, [1, 2, 3], 7));
console.log(cambiarElemento(1, [1, 2, 3], 7));
console.log(cambiarElemento(2, [1, 2, 3], 7));*/
/*
function copiar(lista){
  return deepCopy(lista)
}
console.log(copiar([]));
console.log(copiar([1,2,3]));
console.log(copiar([1, 2, [3, 4], [5]]));
console.log(copiar([[9]]));*//*
function eliminar(lista){
  if (isEmpty(lista)){
    return [];
  }else if (typeof(first(lista)) == "number") { 
    return cons(first(lista), eliminar(rest(lista)));
  }else{
    return eliminar(rest(lista));
  }  
}
console.log(eliminar([1,"b",true,-2]))*/
/*
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

/*
function lookupx(lista,elem){
  let conteo=0;
  return busqueda(lista,elem,conteo);
}
function busqueda(lista,elem,conteo){
    if(isEmpty(lista)){
      return -(elem+1);
    }else{
      if(first(lista)==elem){
      return conteo;
    }else{
      return busqueda(rest(lista),elem,conteo+1)
    }
  }  
}
console.log(lookupx([1,2,3,4], 2))
console.log(lookupx([1,2,3,4], 3.5));
console.log(lookupx([], 1.1));
console.log(lookupx([2,4,6,10], 10));
console.log(lookupx([2,4,6,10], 11));*/







/*
function lookupx(lista,elem){
  let lista_inicial= lista
  let listatamanio= lista.length
  let conteo=0;
  return busqueda(lista,elem,conteo,lista_inicial,listatamanio);
}
function busqueda(lista,elem,conteo,lista_inicial,listatamanio){
    if(isEmpty(lista)){
      return conteocero(lista_inicial,elem,listatamanio);
    }else{
      if(first(lista)==elem){
      return conteo;
    }else{
      return busqueda(rest(lista),elem,conteo+1,lista_inicial,listatamanio)
    }
  }  
}
function conteocero(lista_inicial,elem,listatamanio){
    let contador = 1;
    return noencuentro(lista_inicial,elem,contador,listatamanio)
}
function noencuentro(lista_inicial,elem,contador,listatamanio){
    if(isEmpty(lista_inicial)){
        return -(listatamanio+1);
    }else{
      if(elem>first(lista_inicial) && elem<first(rest(lista_inicial))){
        return -(contador+1);
    }else{
        return noencuentro(rest(lista_inicial),elem,contador+1,listatamanio);
    }
}
}
console.log(lookupx([1,2,3,4], 2))
console.log(lookupx([1,2,3,4], 3.5));
console.log(lookupx([], 1.1));
console.log(lookupx([2,4,6,10], 10));
console.log(lookupx([2,4,6,10], 11));
*/

/*
function max1(uldn) {
   if (length(uldn) == 1) {
       return first(uldn);
   } else {
       if ( first(uldn) > max1 (rest(uldn))) {
           return first(uldn);
       } else {
           return max1 (rest(uldn));
       }
   }
}
function min1(uldn) {
   if (length(uldn) == 1) {
       return first(uldn);
   } else {
       if ( first(uldn) < min1 (rest(uldn))) {
           return first(uldn);
       } else {
           return min1 (rest(uldn));
       }
   }
}

function minmaxAbstraction(uldn,f) {
   if (length(uldn) == 1) {
       return first(uldn);
   } else {
  var firstItem = first(uldn);
  var f1 = minmaxAbstraction(rest(uldn), f);
       if (f(firstItem, f1)) {
           return firstItem;
       } else {
           return f1;
       }
   }
}
minmaxAbstraction([0,1,2,3,4,5,6,7,8],(a,b)=>a>b)*//*
function reduce(list,f,l){
  if(isEmpty(list)){
    return l;
  }else{
    return f(first(list),reduce(rest(list),f,l));
  }
}
console.log(reduce([1, 2, 3, 4, 5], (val, acum) => acum + val, 0));
console.log(reduce([1, 2, 3, 4, 5], (val, acum) => acum * val, 1));
console.log(reduce([1, 7, 3, 14, 5], (val, acum) => Math.max(val, acum), 0));
console.log(reduce([1, 7, 3, 14, 5], (val, acum) => Math.min(val, acum), 9999));
console.log(reduce([{a: "María"}, {a: "Carlos"}], (val, acum) => acum + "-" +val.a, ""));




/*
const esMayor1 = {name:"Diana", year: 18}
const esMayor2 = {name:"Camilo", year: 15}
const esMayor3 = {name:"Andres", year: 35}
esMayorEdad(){
    return
}
console.log(esMayorEdad(esMayor1)=="Diana es mayor de edad");
console.log(esMayorEdad(esMayor2)=="Camilo no es mayor de edad");
console.log(esMayorEdad(esMayor3)=="Andres es mayor de edad");
console.log(esMayorEdad(esMayor3)=="Diana no es mayor de edad")*/



/*
function rreduce(lista,funcion,numero){
  if(isEmpty(lista)){
    return numero;
  }else{
    return funcion(first(lista),rreduce(rest(lista),funcion,numero));
  }
}
console.log(rreduce([1, 2, 3, 4, 5], (val, acum) => acum + val, 0));
console.log(rreduce([1, 2, 3, 4, 5], (val, acum) => acum * val, 1));
console.log(rreduce([1, 7, 3, 14, 5], (val, acum) => Math.max(val, acum), 0));
console.log(rreduce([1, 7, 3, 14, 5], (val, acum) => Math.min(val, acum), 9999));
console.log(rreduce([{a: "María"}, {a: "Carlos"}], (val, acum) => acum + "-" +val.a, ""));*/
function norma(x){
  function sum2(x){
    if(isEmpty(x)){
      return 0;
    }else{
      let f=first(x)
      return f * f + sum2(rest(x))+1;
    }
  }
  return Math.sqrt(sum2(x));
}
console.log(norma([3,4]));
console.log(norma([2,2,2,2]))