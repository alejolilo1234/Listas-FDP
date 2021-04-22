// Jhon Abril <jhon.abril@correounivalle.edu.co>

const persona1 = {name:"Diana", year: 18}
const persona2 = {name:"Camilo", year: 15}
const persona3 = {name:"Andres", year: 35}
const persona4 = {name:"Ophra", year: 18}

function personaMayor(persona1,persona2){
  if(persona1.year > persona2.year) return true;
  else if (persona1.year == persona2.year)return true
  else return false;
}

console.log(personaMayor(persona1,persona2));
console.log(personaMayor(persona2,persona3));
console.log(personaMayor(persona1,persona4));