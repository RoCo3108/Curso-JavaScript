// Trabajando con Fechas

const fecha = new Date()
console.log(fecha);

// Atencion  -> Los Meses inicializan en 0 (0 -> Enero, 11 -> Diciembre) 
const fecha2 = new Date(1987,10,20)
console.log(fecha2);

const fecha3 = new Date(-100000000000)  // Milisengundos
console.log(fecha3);

const fecha4 = new Date("October 13,1979 12:15:15")
console.log(fecha4);

// COMPARANDO FECHAS
console.log(fecha > fecha2);


// Si comparamos la fecha2 y la fecha5 que son iguales que pasaria
const fecha5 = new Date(1987,10,20)
console.log(fecha5);

console.log(fecha2 === fecha5); // Error NO se pueden comparar fechas de esta manera porque esto nos devuelve un false y son iguales
// Para poder compararlas debemos convertirlas a Milisegundos para ello utilizamos el....
// Metodo .getTime()


// OK esta es la Forma de comparar la igualdad entre fechas
console.log(fecha2.getTime === fecha5.getTime);

// Obtener el dia,el mes, el año de una fecha para ello utilizamos el metodo
// Obtener el Dia -->    .getDate() 
const dia = fecha.getDate(); // Obtengo el Dia

// Obtener el mes .getMonth(0 -> Enero, 11 -> Diciembre)
const mes = fecha.getMonth()+1;

// Obtener el Año .getYear()
const añyo = fecha.getFullYear();

console.log(dia+ "/" +mes+ "/" + añyo);

// TRUCO PARA SACAR LA FECHA MAS LEGIBLE
// Utilizamos el metodo .toLocaleDateString()
// Ejemplo
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha.toLocaleDateString("en-GB"));