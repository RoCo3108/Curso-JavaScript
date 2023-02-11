// Operador .valueOf()  -> Obtener valores numericos a partir de literales
let a = 45;
let b = new Number(3);

// Primer Ejemplo
console.log(a);
console.log(b);
console.log(a + b);
console.log(typeof b);
console.log(a.valueOf() + b.valueOf());
console.log(b.valueOf());

// Segundo Ejemplo
let str = new String("Hola soy un String");
console.log(str);
console.log(str.valueOf());

// NaN (Not a Number) - Infinity
let num = Number('Hola Luchito');
console.log(num);
console.log(isNaN(num));

//Infinity
let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);


let divisor_n2 = null;
console.log(numerador / divisor_n2);

// Como convertir los String a valores numericos con Number, parseInt y parseFloat
let numero = "25.8";
let numero2 = 75.8;
console.log(numero + numero2); // Error de concepto
console.log(typeof numero);
console.log(Number(numero) + numero2);// convierte el strin en numero 
console.log(parseInt(numero)); // convierte el string en entero obviando el decimal
console.log(typeof parseInt(numero));
console.log(parseInt(numero) + numero2);
console.log(parseFloat(numero));

// Numeros Hexadecimales (base 16)
let numHex = '0x5a5c7y6'
console.log(parseInt(numHex, 16));

// Obtener valores maximos y minimos en JavaScript
let min_presicion = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_presicion);
console.log(min_valor_JS);
console.log(max_valor_JS);

// OPERADOR PARA ELEVAR UN NUMERO EN JS  CON EL '**' EJEMPL 6 ELEVADO A LA 20
console.log(6 ** 200);