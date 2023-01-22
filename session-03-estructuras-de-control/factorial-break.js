function factorial(numero) {

    let resultado = 1;
    let i = 1;

    while (i <= numero) {

        resultado = resultado * i
        i++;
        if (i < 6){
        break;
        }
        return resultado;
    }
    
}

console.log(factorial(10));