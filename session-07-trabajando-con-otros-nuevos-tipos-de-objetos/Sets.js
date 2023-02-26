// Sets o Conjunto (En español) son objetos y se comportan como listas pero de manera diferente
// Nuevos tipos de datos de JS
// Este Metodo se utiliza mucho cuando se trabaja con Bases de Datos
// nos asegura que no tenemos valores duplicados

const array = [1,2,3,4,5,6,7,8,9,10,11,5,7,9,"hola","hola",{id:251}]
console.log({id:251}==={id:251});
console.log(array);

const newSet = new Set(array)
console.log(newSet);

// Metodo que permite sumarle valores dentro de los set 
// .add()  solo se utiliza con los set o conjuntos

// array.add(38) no permite en las listas normales agregarle valores
newSet.add(38)
console.log(newSet);
// console.log(array); // genera un error

// PARA ELIMINAR DENTRO DE LOS SET 
// UTLIZAMOS EL METODO .delete()

newSet.delete("hola")
console.log(newSet);

// PARA ELIMINAR TODOS LOS ELEMENTOS DEL SET 
// UTLIZAMOS EL METODO 
// .clear()
// newSet.clear()
// console.log(newSet);

// Metodo .has()  Nos permite saber si nuestro set contiene algun elemento,funciona lo mismo que el metodo .includes() para los array
// Ejemplo

// console.log(array.includes(100));
console.log(newSet.has(3));

// Y POR ULTIMO TENEMOS UNA PROPIEDAD PARA LOS SET
// size  !! OJO no es un metodo  y permite saber la longitud de los set
// ejemplo

console.log(newSet.size);

// Iteraciones con los set se maneja lo mismo con los array con un forEach()

newSet.forEach(valor => {
    console.log(valor);
})

// Metodos y factor de propagacion nos permite acceder a los valores de mi set tenemos estas dos opciones
// values()   y // ...   los tres puntos que es el factor de propagacion
//Ejemplo

const valores_newSet = newSet.values() 
console.log(valores_newSet);

// Y la otra opcion es con el factor de propagacion ...
const str_newSet = [...newSet]  // nos permite convertir el set a un array para poder acceder a los valores
console.log(str_newSet[11]);


