// Jhon Abril <jhon.abril@correounivalle.edu.co>

const esMayor1 = {name:"Diana", year: 18}
const esMayor2 = {name:"Camilo", year: 15}
const esMayor3 = {name:"Andres", year: 35}

/**
 * Proposito: Saber si es mayor de edad
 * Contrato: esMayorEdad(string,string) => bool;
 * Prototipo: function esMayorEdad(persona,condicion);
 * Ejemplos:
 * esMayorEdad(esMayor1,"es mayor de edad") => true
 * esMayorEdad(esMayor2,"no es mayor de edad") => true
 * esMayorEdad(esMayor3,"es mayor de edad") => true
 * esMayorEdad(esMayor3,"no es mayor de edad") => false
 */
function esMayorEdad(persona,condicion){
  if (persona.name && condicion =="es mayor de edad"){
    if (persona.year >= 18){
      return true;
    }else{
      return false;
    }
  } else if(persona.name , condicion == "no es mayor de edad"){
    if (persona.year < 18 ){
      return true;
    }else{
      return false;
    }
  }
}

console.log(esMayorEdad(esMayor1,"es mayor de edad"));
console.log(esMayorEdad(esMayor2,"no es mayor de edad"));
console.log(esMayorEdad(esMayor3,"es mayor de edad"));
console.log(esMayorEdad(esMayor3,"no es mayor de edad"));