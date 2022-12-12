var variable;
// let variablelet;

const constante = `Hola soy una constante`;

variable = 7;

console.log(variable);

variable=125;
console.log(variable);


console.log(constante);
// constante = "Hola Programadores"

// variablelet = 87;
// console.log(variablelet);

//Diferencia de las varables VAR y LET
// la diferencia es:
// la variable var se declara globalmente mientras las variable let solo existe en un bloque o fraccion del codigo

var variable = "Hola soy una variable VAR"

for (var i = 0; i < 5; i++) {
    var variable = "Hola soy la segunda variable";
    
}

console.log(variable);
 //===============================================
let variablelet = "Hola soy una variable LET"

for (var i = 0; i < 5; i++) {
    let variablelet = "Hola soy la segunda variable";
    
}
//////////////////////////////////////////////////////

console.log(variablelet);


var num=4;
console.log(typeof num );


num = "Hola como estas"

console.log(typeof num );

