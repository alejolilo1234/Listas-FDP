// Jhon Abril <jhon.abril@correounivalle.edu.co>

const persona1 = {apellido1: "Melo", apellido2: "Castillo"}
const persona2 = {apellido1: "Gonzales", apellido2: "Pantoja"}
const persona3 = {apellido1: "Caicedo", apellido2: "Castillo"}
const persona4 = {apellido1: "Lopez", apellido2: "Cardenas"}

/**
 * Proposito: Determinar si 2 personas son parientes
 * Contrato: parents(string,string,string) => bool;
 * Prototipo: function parents(persona1,persona2,condicion);
 * Ejemplos:
 * parents(persona1, persona3, "Son parientes") => true
 * parents(persona3, persona4, "No son parientes") => true
 */
function parents(persona1,persona2,condicion){
  if (condicion =="Son parientes"){
    if (persona1.apellido2 == persona2.apellido2){
      return true;
    }else{
      return false;
    }
  } else if(condicion == "No son parientes"){
    if (persona1.apellido2 != persona2.apellido2){
        return true;
    }else{
        return false;
    }
  }
}

console.log(parents(persona1, persona3, "Son parientes"));
console.log(parents(persona3, persona4, "No son parientes"));