// .some() --> como saber si algunos elementos de una lista cumplen una condicion al menos uno y devuelve un true

const array = [3,6,98,574,21,547,-6,25,89,41]

const res = array.some(valor => valor < 0)
console.log(res);

// Primer Opcion para buscar con el metodo some()
// const existe = array.some(valor =>{
//     if (valor === 41) {
//         return true
//     }
// })
const existe = array.some(valor => valor === 6)
console.log(existe);

const listaObjetos = [
    {nombre: "Ronald",  edad: 38},
    {nombre: "Rosalba", edad: 64},
    {nombre: "Jairo",   edad: 16},
    {nombre: "Dayanna", edad: 9},
    {nombre: "Eliamco", edad: 3}
]

// const existeRosa = listaObjetos.some(persona => {
//     if (persona.nombre === "Rosalba") {
//         return true
//     }
// })
const existeRosa = listaObjetos.some(persona => persona.nombre === "Jairo")
console.log(existeRosa);

// Como obtener una lista a partir de un objeto iterable
let str = "Hola Ronald"
let ar_str = Array.from(str) // anteponiendo el "Array" El metodo .from permite separar en forma de una lista un string
console.log(ar_str);

// Otra forma
const set = new Set([2,3,"Hola",7])
const ar_set = Array.from(set)
console.log(ar_set);

// Iterable
const keys = array.keys()
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys);