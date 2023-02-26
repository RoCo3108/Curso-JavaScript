// Como obtener una lista a partir de otra lista con el metodo .slice() "permite obtener una porcion o fraccion de nuestro codigo"

const array = ["Hola", 1,2,3,true,null,"Adios"]
console.log(array.slice(1,5));
const array2 = array.slice(2,6)
console.log(array2);

// Otra forma de extraer la info
const array3 = array.slice(2,-1)
console.log(array3);