//ASIGNACIÓN DE VARIABLES

//VAR
var fistName; //al declarar = undefined
fistName = "Leonel"; // asignación
console.log(fistName);

var lastName = "Marinaro"; //declaramos y asignamos a la vez
lastName = "Patiño"; //reasignamos
console.log(lastName);

var secondName = "No tengo"; //declarando / asignando
var secondName = "redeclarado y reasignado"; // reasignando
console.log(secondName);

//LET
let fruit = "Apple"; //declarar y asignar
fruit = "Kiwi"; // reasignar

//let fruit = "banana"; //esto no se puede hacer
console.log(fruit);

//CONST
const animal = "dog"; //declarar y asignar
// animal = cat; //reasignando, no se puede reasignar con const
// const animal = 'Snake';//tampoco es posible redeclarar, mismo concepto de block scope
//una constante no puede ser reasignada ni redeclara, salvo en excepciones como arrays y objetos, donde se agregan valores a la referencia
console.log(animal);

const vehicles = [];
vehicles.push("Toyota");
console.log(vehicles);
vehicles.pop();
console.log(vehicles); 