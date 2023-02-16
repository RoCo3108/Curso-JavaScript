// como trabajar con listas (arrays,arreglos, vectores,matrices)

let nombre = "Ronald"
let array = [1,2,3,4,5,6,7,8,9];
let array2 = [1, "Hola", false, {id:38}, null, undefined, nombre]

console.log(array2);

// Acceder a un array a traves de su posicion
// array[indice] => 0,1,2,3,4,5,6.................
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);
console.log(array2[4]);

// Metodos para introducir nuevos valores a nuestros arrays
// .push()  .unshift()  ==> Mutan el valor de nuestro array

// Para poner valores al final en nuestro arrays
array2.push("Final",45,false,150)
console.log(array2);

// Poner Valores al Inicio de nuestros arrays
array2.unshift("Colombia","Tecnologo", 166)
console.log(array2);

// Metodos para eliminar valores dentro de un array
// .pop()  .shift()  ==> Mutan el valor del array

// Valores al final  .pop()
array.pop()
console.log(array);
array.pop()
console.log(array);

// valores al principio .shift()
array.shift()
console.log(array);
array.shift()
console.log(array);

// Metodos para eliminar,modificar, y añadir valores en nuestro array
// .splice(x,y,z)
const array3 = [1,2,3,4,5,6]
// Eliminar valores con ==>  .splice(indice, numValoresAEliminar)
array3.splice(2,1) // debemos pasarle (2) parametros la posicion del valor a eliminar y la cantidad de valores a eliminar
console.log(array3);

// Añadir valores ==> .splice(indice, 0, ValoresAñadir)
array3.splice(2, 0, 3,"Hola",6)
console.log(array3);

// Modificar valores ==> .splice(indice, 1, valores)
array3.splice(3,2,"Ronald",8)
console.log(array3);


