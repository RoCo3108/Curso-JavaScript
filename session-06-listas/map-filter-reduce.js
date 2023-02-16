// Trabajar con metodos mas avanzados
// .map()  ->  .filter() ->   .reduce()  // Estos metodos nos devuelven arrays
// ESTOS METODOS SON SUPREMAMENTE UTILIZADOS EN FRAMEWORK COMO VUE,REACT, Y ANGULAR

const ciudades = ["Honda","Mariquita","Doradas","Bogota","Soacha","Lerida","Fresno", "Libano"]

ciudades.forEach(p => {
    console.log(p)
})

const pueblos = ciudades.find(c => c === "Libano")
console.log(pueblos);

// Metodo .map() => Nos permite añadir cosas a los valores de nuestra lista y podriamos utilizar el segundo parametro .map(valor,indice)
const newArray = ciudades.map((valor,indice) =>{
    console.log(indice);
    return `${indice+1}-${valor}`
})
console.log(newArray);

// OPCION 2
const newArrays = ciudades.map((valor,indice) => `${indice+1}-${valor}`)
console.log(newArrays);

// METODO .filter()  => trabaja con listas de objetos y utilizamos true para los objetos que queremos filtrar y false
// para objetos que no queremos traer el filter permite hacer busquedas con varios criterios
const listaObjetos = [
    {nombre: "Ronald",  edad: 38},
    {nombre: "Rosalba", edad: 64},
    {nombre: "Jairo",   edad: 16},
    {nombre: "Dayanna", edad: 9},
    {nombre: "Eliamco", edad: 3}
]

// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 10) {
//       return true
//     }else{
//         return false
//     }
// })

const personasMayores = listaObjetos.filter(obj => obj.edad > 25) // aqui nos devuelve un true cada vez que esto no se cumple
console.log(personasMayores);

const personasMayores2 = listaObjetos.filter(obj => obj.nombre !== "Jairo")
console.log(personasMayores2);

// METODO .reduce() => Permite obtener un valor o algo o objeto a partir de una lista
// Metodo .reduce((ant,cur,indice,arrayOriginal)) => acepta 4 parametros
// DONDE PODEMOS UTILIZARLO EJEMPLO PARA HACER CALCULOS DE SUMA
// El objetivo del metodo .reduce() es que el parametro ant sea un valor acumulativo
const valores = [52,69,8,47,32,125]

const suma = valores.reduce((acumulado,cur,indice,arrayOriginal) => {
    console.log(acumulado);
    console.log(cur);// valor actual
    console.log(indice);
    console.log(arrayOriginal);
    return acumulado + cur
})
console.log(suma);
