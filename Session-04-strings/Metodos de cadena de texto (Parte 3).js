// Metodos de cadena de texto (Parte 3)
// http://regexr.com  Link para hacer pruebas de expresiones regulares

// Tips si oprimimos las teclas  ALT + Z  podemos justificar un texto largo de una sola lina
// METODO MATCH() PERMITE HACER UNA BUSQUEDA AVANZADA DE LAS INSTANCIAS REPETIDAS DENTRO DE MI TEXTO
// METODO includes()  busca y nos devuelve verdadero o falso cuando encuentra o no una palabra dentro de mi texto

let texto_largo = 'Algunas veces tiene sentido habilitar la perforación, porque sitios tiene los vas a poner (por ej., Facebook) pueden tener distancias grandes entre los lineas y la perforación añadirá distancias verticales para contrarestar las verticales y hacer un estilo unico. Intentalo.'


console.log(texto_largo.match(/los/g));
console.log(texto_largo.match(/la/g));


// Existe la palabra dentro del texto?
console.log(texto_largo.includes("poner"));

// Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Algunas"));

// Saber si un texto empieza con otra palabra
console.log(texto_largo.endsWith("Intentalo."));