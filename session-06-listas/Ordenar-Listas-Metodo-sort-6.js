// Metodo .sort() => en español significa Ordenar
// Este Metodo Modifica el array y recibe dos parametros .sort(a,b) elemento anterior y el siguiente
//  y es obligacion que retone un valor numerico ya sea positivo negativo o un cero
// el Metodo sort() por obligacion debe retornar un valor
// cunado utilizamos en el return  -1 invierte el orden de la lista de nuestro array

// OPCION UNO
const numeros = [8,6,1,3,5,7,9,4,2]
const ordenar = numeros.sort()
console.log(ordenar);

// OPCION DOS invertir la lista
const nums = [52,2,69,45,14,18,20,6,3,8]
nums.sort((a,b) =>{
    return -1
})
console.log(nums);

// OPCION 3 ORDENAR LISTA
const num = [52,2,69,45,14,18,20,6,3,8]
num.sort((a,b) => {
    if (a < b) {
        return -1  // cualquier valor negativo no importa
    }else if(a > b){
        return +1 // cualquier valor positivo no importa
    }else { // a === b
        return 0
    }
})
console.log(num);

// OPCION 4 ORDENAR LISTA
// Ordenar unicamente Arrays numericos
const arrayNumericos = [7,62,45,12,36,89,11,23,6,25]
arrayNumericos.sort((a,b) => a-b)
console.log(arrayNumericos);


// ORDENAMIENTOS DE LISTAS DE OBJETOS
// ESTO SE VUELVE MUCHO MAS INTERESANTE SI LO HACEMOS CON ARRAY DE OBJETOS
const listaObjetos = [
    {nombre: "Ronald",  edad: 38},
    {nombre: "Rosalba", edad: 64},
    {nombre: "Jairo",   edad: 16},
    {nombre: "Dayanna", edad: 9},
    {nombre: "Eliamco", edad: 3}
]

// UNA MANERA DE HACER EL ORDENAMIENTO CON OBJETOS
// listaObjetos.sort((a,b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if(a.edad > b.edad){
//         return +1
//     }else{
//         return 0
//     }
// })

// SEGUNDA MANERA DE HACERLO
listaObjetos.sort((a,b) => a.edad - b.edad)

console.log(listaObjetos);