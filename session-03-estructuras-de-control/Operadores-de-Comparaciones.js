//Comparaciones

//Igualdad debil   "==" compara el valor y no el tipo de dato le es indiferente

let a = 5
console.log(typeof a);

let b = "5"
console.log(typeof b);

if (a == b){
    console.log("5 es igual a 5 - debil");
}else
{
    console.log("No es igual");
}

//Igualda fuerte  "==="  compara tanto el valor como el tipo de dato

if (a === b){
    console.log("5 es muy igual a 5 -fuerte");
}else
{
    console.log("No es igual");
}

// Desigualdades hay 3 tipos que lo son:  menor, mayor y las que no son iguales o diferentes

// Ejemplo del operador diferentes o no son iguales
let c = 4;
let d = "4";

if (c != d) {
    console.log("c Es diferente a d -debil");
}else{
    console.log("No es diferente");
}

if (c !== d) {
    console.log("c Es diferente a d -Fuerte");
}else{
    console.log("No es diferente");
}

// Ejemplo de menor que y mayor que

let max = 85;
let min = 65;

if (max > min) {
    console.log("max es mayor que min");
}
if (max >= 85) {
    console.log("max es mayor o igual que min");
}

if (min < max) {
    console.log("min es menor que max");
}
if (min <= max) {
    console.log("min es menor o igual que max");
}