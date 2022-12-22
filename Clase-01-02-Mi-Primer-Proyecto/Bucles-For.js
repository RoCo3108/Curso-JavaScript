// Bucles For

/*for (Inicializacion; Condicion; Actualizacion) {
   
    lo que ejecuta el bucle for
    
}*/
// Estructura for convencional o Habitual
for (let i = 1; i < 11; i++){
    console.log(i*2);
}

let lista = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]*38);
}

// Estructura for..of

for (let valor of lista) {
    console.log(valor);
}

// Estructuta forEach  con una funcion flecha, implementado en la nueva version JS6 mas eficiente de hacer las cosas

lista.forEach(valor => {
    console.log(valor);
})

// Estructuta for..in   --> permite recorrer las propiedades de un objeto

let persona = {
    nombre: "Ronald E",
    apellido: "Cortes G",
    edad: 38,
    email: "roco272012@hotmail.com",
    isDeveloper: true
}
// console.log(persona.email);
let proEdad = "edad";
console.log(persona[proEdad]);

for (const propiedades in persona) {

    console.log(propiedades);
    console.log(persona[propiedades]);
}
