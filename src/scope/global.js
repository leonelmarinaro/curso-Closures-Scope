//GLOBAL SCOUPE
var a; // declarar
var b = "b"; // declarar / asignacion
b = "bb"; // reasignacion
var a = "aa"; //redeclaración

var fruit = "apple"; //global scope
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

console.log(bestFruit());

function countries (){
    country = 'Argentina'; // aca estamos creando un global scoupe con una variable global xq es una asignación
    console.log(country);
}

console.log(countries());
console.log(country);