//Ejercicio

//  Una variable que contenga la lista de la compra (mínimo 5 elementos)
const productos = ["Arroz", "Carne","Platano","Yuca","Papa"]
console.log(productos);

// Modifica la lista de la compra y añádele "Aceite de Girasol"
productos.push("Aceite de Girasol")
console.log(productos);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
productos.pop()
console.log(productos);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const peliculas = [
    {Titulo: "El Libro de los secretos", Director: "Albert Hughes", Fecha: "11 de enero 2010"},
    {Titulo: "Venganza implacable", Director: "Mark Williams", Fecha: "16 de octubre de 2020"},
    {Titulo: "Hacker: amenaza en la red", Director: "Michael Mann", Fecha: "8 de enero de 2001"}
]
const peliculas2 = [
    {Titulo: "El Libro de los secretos", Director: "Albert Hughes", Fecha: "11 de enero 2010"},
    {Titulo: "Venganza implacable", Director: "Mark Williams", Fecha: "16 de octubre de 2020"},
    {Titulo: "Hacker: amenaza en la red", Director: "Michael Mann", Fecha: "8 de enero de 2001"}
]
const peli = peliculas.find(nombre => nombre.Titulo === "Venganza implacable")
console.log(peli.Director);

//  Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const newPeliculas = peliculas.filter(p => p.Fecha !== "8 de enero de 2001")
console.log(newPeliculas);


//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const newPelidirectores = peliculas.map(d => d.Director)
console.log(newPelidirectores );

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const newPelititulos = peliculas.map(d => d.Titulo)
console.log(newPelititulos);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const newConcatDirectoresTitulos = newPelidirectores.concat(newPelititulos)  // Concatenar
console.log(newConcatDirectoresTitulos)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const newConcatDirectoresTitulos2 = [...newPelidirectores, ...newPelititulos]  // factor de propagacion concatenar
console.log(newConcatDirectoresTitulos2)