// trabajando con Objetos en JS

const obj = {
    id: 4,
    nombre: "Ronald",
    apellido: "Cortes",
    isDeveloper: true,
    Libros_favorite: "El Libro negro del Hacker",
    '4-juegos':[1,2,3,4]
}

console.log(obj.Libros_favorite);
console.log(obj["4-juegos"]);
console.log(obj.isDeveloper);

const prop = "isDeveloper"  // Puedo acceder a las propiedades de un objeto mediante variables
console.log(obj[prop]);

// HACIENDO CAMBIOS EN NUESTRO OBJETO
//EJEMPLO
// estos cambios se ven afectados solo en objetos y no aplica a datos primitivos
const obj2 = obj;
console.log(obj2);
obj2.nombre = "Jairo"
console.log(obj2.nombre);
console.log(obj.nombre);

// EJEMPLO CON DATOS PRIMITIVOS  
let val1 = 89;
let val2 = val1;

// en este punto no se ve afectado la variable val1 porque estan posiciones de memoria distintas son diferentes
// lo que no sucede con los objetos
val2 = 125;
console.log(val1);
console.log(val2);

// PARA PODER HACER DUPLICADO DE OBJETOS SIN AFECTAR EL OBJETO ORIGINAL UTILIZAMOS LOS ... TRES PUNTOS EJEMPLO
const obj3 = {...obj}  // ASI ES LA MANERA DE HACER UNA COPIA A NUESTRO OBJETO
console.log(obj3.nombre);
console.log(obj.nombre);

obj3.nombre = "Saya"
console.log(obj.nombre);
console.log(obj3.nombre);

// Como Ordenar listas de objetos en funcion de una propiedad
// PARA ESTO UTILIZAMOS EL METODO .sort() // que sirve para Ordenar
// .sort()  => Es un Metodo que Muta el valor de la lista Original

const listaPeliculas = [
    {titulo:"lo que el viento se llevo", anyo:1939},
    {titulo:"Titanic", anyo:1997},
    {titulo:"Moana", anyo:2016},
    {titulo:"El efecto mariposa", anyo:2004},
    {titulo:"TED", anyo:2012}
]

listaPeliculas.sort((a,b) => a.anyo - b.anyo)
console.log(listaPeliculas);