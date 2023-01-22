// Casos muy especificos - break, continue

let lista = [1,2,3,4,5,6,7,8,9];


for (let i = 0; i < lista.length; i++){
    
    if(lista[i] === 3){
        continue;
    }
    let j = 50;
    const k = 100;
    console.log(lista[i]);
    console.log(j);
    console.log(k);

    if( lista[i] > 5) {
        break;
    }
}
// Cual es el ambito de un Bucle

console.log(i);
console.log(j); // el ambito de la variable no alcanza a imprimirse por fuera lo la "let"
console.log(k);  // el ambito de la variable no alcanza a imprimirse por fuera lo la "cost"

// var --> ambito de la variable global
// let --> ambito de la variable local funciona en donde solo se ha declarado en mi codig
// Const --> Tambien solo funciona en mi bloque de codigo

