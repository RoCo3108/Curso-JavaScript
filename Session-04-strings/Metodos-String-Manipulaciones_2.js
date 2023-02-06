// Metodos de cadenas de texto (parte 2)

let input = "Escorpion"
let db = "escorpion"

console.log(input.toLowerCase === db.toLowerCase);

// Convertir string en mayusculas y minusculas
// Metodos toLowercase()   -  toUppercase()
let cadenas = "Los Mejores Programadores de las historia"
 console.log(cadenas.toLowerCase()); // pone todo en minusculas
 console.log(cadenas.toUpperCase()); // pone todo en mayusculas

 // Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena"
let str_2 = " y yo soy la segunda cadena"

console.log(str_1.concat(str_2)); // primera opcion
console.log(str_1 + " " + str_2); // segunda opcion
console.log(`${str_1} ${str_2}`); // tercera Opcion

// Eliminar espacios al Inicio y al final

let str_3 = "   Hola soy un string con espacios al final. "
console.log(str_3);
console.log(str_3.length);
// trim()  --> permite eliminar los espacios en blanco de un texto
console.log(str_3.trim().length);// trim() Elimina todo los espacios inicio y final
console.log(str_3.trimStart().length); // El metodo trimStart() elimina los espacios de solo el inicio
console.log(str_3.trimEnd().length); // El metodo trimEnd() elimina los espacios del final


// Obtener el caracter que hay en cierta posicion Metodo charAt()

let str_4 = "Hola soy el string numero 4" // ["H","o","l","a"," ","s"..........]
console.log(str_4.charAt(5));
console.log(str_4[5]);

// Obtener la posicion de una palabra dentro de una cadena de caracteres
// Metodo indexOf() 
let str_5 = "Hola soy Ronald Cortes y me gusta el desarrollo web y mi nombre es Ronald y mi apellido es cortes ok Ronald"
console.log(str_5.indexOf("Ronald")); // devuelve el valor de mi primer instancia
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Ronald"));// devuelve el valor de mi ultima instancia
