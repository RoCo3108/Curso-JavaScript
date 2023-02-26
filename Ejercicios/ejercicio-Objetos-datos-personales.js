const datos_personales = {
    nombre: "Ronald Eduardo",
    apellido: "Cortes Gutierrez",
    edad: 38,
    altura: 166,
    eresDesarrollador: true
}
const miedad = "edad"  // de esta manera accedemos a las propiedades de un objeto mediante variables
console.log(datos_personales[miedad]);

const amigoNuevosdatos = {...datos_personales} // aqui hago una copia a mi objeto original sin afectar los cambios al hacerle a mi nuevo objeto
console.log(amigoNuevosdatos);
console.log(datos_personales);

amigoNuevosdatos.nombre = "Carlos"
amigoNuevosdatos.apellido = "Herrera"
amigoNuevosdatos.edad = 44
amigoNuevosdatos.altura = 169
amigoNuevosdatos.eresDesarrollador = true
console.log(amigoNuevosdatos);
console.log(datos_personales);

const amigoNuevodatos2 = {...datos_personales}
amigoNuevodatos2.nombre = "Roberto"
amigoNuevodatos2.apellido = "Mora"
amigoNuevodatos2.edad = 40
amigoNuevodatos2.altura = 158
amigoNuevodatos2.eresDesarrollador = false
console.log(amigoNuevodatos2);
console.log(amigoNuevosdatos);
console.log(datos_personales);

const arraydatos = [datos_personales,amigoNuevosdatos,amigoNuevodatos2]
console.log(arraydatos);

arraydatos.sort((a,b) => b.edad - a.edad)
console.log(arraydatos);