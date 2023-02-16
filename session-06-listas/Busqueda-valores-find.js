// Metodos Modernos de JavaScript
// Iterar los valores de una lista

const array = ["hola", 2, 36, 78, 90, false, undefined]

// Forma Antigua de recorrer listas (poco eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Forma Habitual y utilizado en ES6 (mas eficiente)  .forEach() 
array.forEach(element => {
    console.log(element);
});

// Otro ejemplo con foreach()
let suma = 0;
const arraySumaNum = [52, 6, 98, 74, 15, 32, 5, 6, 584, 124]
arraySumaNum.forEach(valor => {
    suma += valor
    console.log(valor);
});
console.log(suma);

//Busqueda de un valor dentro de una lista  Metodo .find()
const variable = array.find(valor => {
    if (valor === 36) {
        return true
    }
})
console.log(variable);

const listaObjetos = [
    {nombre: "Ronald",  edad: 38},
    {nombre: "Rosalba", edad: 64},
    {nombre: "Jairo",   edad: 16},
    {nombre: "Dayanna", edad: 9},
    {nombre: "Eliamco", edad: 3}
]
// Primer Forma de recorrer Objetos
// const objeto = listaObjetos.find(nom =>{
//     if (nom.nombre === "Rosalba"){
//         return true
//     }
// })
// console.log(objeto.edad);

// Segunda Forma de recorrer objetos
const objeto = listaObjetos.find(nom => nom.nombre === "Rosalba")
console.log(objeto.edad);

// Tercera Forma de recorrer objetos
const {edad} = listaObjetos.find(nom => nom.nombre === "Rosalba")  //aqui lo hacemos mediante una construccion de objetos
console.log(edad);

// Cuarta forma de hacerlo
const objetos = listaObjetos.find(n =>{
    return n.nombre === "Jairo"
})
console.log(objetos.edad);