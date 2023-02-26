// Como podemos comparar listas
// Metodo .every()  -> Permite saber si todos los componentes de una lista cumplen una condicion

//Ejemplo

const array = [5, 6, 87, 91, 451, 21, -3, -78, 2 - 5, -56, -68, ]
//  const lista = array.every(valor => {
//     if (typeof valor === "number") {
//         return true
//     }else {
//         return false
//     }
// })
//const lista = array.every(valor => typeof valor === "number") // Aqui como resultado me da true "Verdadero"
const lista = array.every(valor => valor > 0) // aqui me da false
console.log(lista);

// COMPARACIONES DE LISTAS
const ar1 = [1, 2, 3, 4, 5]
const ar2 = [1, 2, 3, 4, 5]

console.log(ar1 === ar2); // Me devuelve un false porque en JS no es la manera correcta de comparar listas
// de esta razon se debe utilizar .every()

// Ejemplo de como utilizar el metodo .every() para comparar listas
const compararListas = (ar1, ar2) => { // Esta es la manera moderna de crear funciones
    if (ar1.lenght !== ar2.lenght) return false // declaro una condicion para saber si las dos listas son diferentes
    const respuesta = ar1.every((valor, i) => valor === ar2[i]) // almaceno en una variable la comparacion si las dos listas son iguales
    return respuesta
}
console.log(compararListas(ar1,ar2)); // Devuelve true porque son iguales

const ar3 = [82,6,5,4,8]
console.log(compararListas(ar1,ar3)); // devuelve false porque son diferentes