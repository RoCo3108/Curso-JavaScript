// Metodos mas utilizados para trabajar con cadenas
// Como Obtener la longitud de un string
// Metodo lenght permite obtener la longitud de un string

let libros = ["la verdad", "la glorias", "la reliquias", "las religiones"] // Listas o array
let str = "Hola madre como te va en el cielo te esxtraño mucho"  // cadena de caracteres o string

console.log(str.length);
console.log(libros.length);

//Metodos que permiten Obtener partes de cadenas de caracteres
// slice()  subdtring() substr()

let slice_str = str.slice(4,15)
console.log(slice_str);

let substring = str.substring(4,15)
console.log(substring);

let substr = str.substr(4,15)
console.log(substr);

// Reemplazar parte del contenido de una cadena de texto
// Metodo replace()

let cadena = "Hola mi nombre es Ronald"
console.log(cadena);

// Al utilizar string solo reemplaza la primera instancia 
console.log(cadena.replace('Ronald','Rosalba Gutierrez'))

let texto_largo = 'Algunas veces tiene sentido habilitar la perforación, porque sitios tiene lo vas a poner (por ej., Facebook) pueden tener distancias grandes entre las lineas y la perforación añadirá distancias verticales para contrarestar las verticales y hacer un estilo unico. Intentalo.'

// Al utilizar string solo reemplaza la primera instancia 
console.log(texto_largo.replace('tiene', 'porque'));

// Al utilizar la expresion regular  /g (global) te aseguras de reemplazar todas las instancias
console.log(texto_largo.replace(/tiene/g, 'porque'));

