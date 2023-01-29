//Seccion 4 - String  o (cadenas de caracteres)  por los cuales en javasScript se consideran strin estaticos

let str_doble = "Hola soy un texto con comillas dobles"
let str_simple = 'Hola sou untexto con comillas simples'

console.log(str_doble);
console.log(str_simple);

let str_comillas = "El otro dia me dijo literalmente \"Ve a sacar la basura\" "
let str_comillas_simples = 'El otro dia me dijo literalmente "Ve a sacar la basura"'
let str_comillas_dobles = "El otro dia me dijo literalmente 'Ve a sacar la basura'"

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);

//Comillas Invertidas  (bachticks) ---> para JavaScript se consideran dinamicos


let nombre = "Ronald cortes y soy programador"
let str_comillas_Invertidas = `Hola soy ${nombre} Bienvenidos` // las comillas invertidas permiten introducir variables dentro de una cadena de caracteres y permiten los saltos de linea
console.log(str_comillas_Invertidas);

let plantilla = ` 
<html>
<h1>Pagina web de ${nombre}</h1>
<p>Este es un parrafo</p>
</html>`

console.log(plantilla);

let libros = ["Empieza por el porque", "El monje que vendio su ferrari", "El poder del ahora"]

console.log(libros);