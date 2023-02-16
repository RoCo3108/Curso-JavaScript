let nombre = "   Ronald"
let apellido = "Cortes"
let estudiante = nombre.concat(" "+ apellido)
let estudianteMayus = estudiante.toLocaleUpperCase()
let estudianteMinus = estudiante.toLocaleLowerCase()
let num_letras_estu = estudiante.length
let primera_letra = estudiante.charAt(0)
let ultima_letra = estudiante.charAt(12)
let eliminar_espacios = estudiante.trim().length
let nombre_boleana = estudiante


console.log(estudiante.length);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(num_letras_estu);
console.log(primera_letra);
console.log(ultima_letra);
console.log(eliminar_espacios);
console.log(nombre_boleana.indexOf("Ronald"));
