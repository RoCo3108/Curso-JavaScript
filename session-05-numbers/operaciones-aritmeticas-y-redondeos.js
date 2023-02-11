// Principales operaciones aritmeticas
let a = 3.5;
let b = 4.8;
let resta = a - b;

// Suma(+)
console.log(a + b);

// Resta(-)
console.log(a - b);

// Multiplicacion(*)
console.log(a * b);

// Division(/)
console.log(a / b);


// Representaciones de los numeros en cadenas de texto
console.log(typeof a);
let a_string = a.toString();
// Comvertimos una variable numerica a tipo de dato string con el metodo toString()
// El Metodo typeof nos devuelve el tipo de variable que tenemos
console.log(a_string);
console.log(typeof a_string);

// Redondeo de numeros deecimales
// Tenemos los Metodos .toFixed()  y  .toPresicion()  para redondear numeros con decimales e indicar con cuantos me quedo
let c = 3.3;
let d = c * 3;
console.log(d);
console.log(typeof d);
//  .tofixed(x)  - Limitar el numero de decimales a un valor (x), y lo convierte en string
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1893.2514545454;
let f = 698541257458632142
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// toPrecision(x) -> Limita el numero de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));
console.log(typeof f.toPrecision(7));