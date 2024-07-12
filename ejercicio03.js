//Array inicial:

let biblioteca = [
    { titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', año: 1967, disponible: true },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', año: 1605, disponible: false },
    { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', año: 1943, disponible: true },
    { titulo: '1984', autor: 'George Orwell', año: 1949, disponible: false },
    { titulo: 'Ficciones', autor: 'Jorge Luis Borges', año: 1944, disponible: true }
];

let nuevosLibros = [
    { titulo: 'Rayuela', autor: 'Julio Cortázar', año: 1963, disponible: true },
    { titulo: 'Pedro Páramo', autor: 'Juan Rulfo', año: 1955, disponible: true }
];


//1. Buscar un libro específico: Usa `find` para encontrar el libro cuyo título sea "El Principito".
let libroEspecifico = biblioteca.find(n => {
    n.titulo === "El Principito"
})

//2. Índice de un libro específico: Usa `findIndex` para encontrar el índice del libro cuyo autor sea "Gabriel García Márquez".
let indiceLibro = biblioteca.findIndex(n => {
    n.titulo === "Gabriel García Márquez"
})

//3. Verificar disponibilidad: Usa `some` para verificar si hay algún libro disponible.
let hayDisponible = biblioteca.some((e)=> e.disponible === true)

//4. Verificar todos los libros de un autor: Usa `every` para verificar si todos los libros de un autor específico están disponibles (elige un autor presente en el array).
let todosDisponibles = biblioteca.every(e => {
    
    if(e.autor)
})
//5. Combinar dos listas de libros: Usa `concat` para combinar la lista `biblioteca` con otra lista `nuevosLibros` de al menos 2 libros.
//6. Crear una sublista de libros recientes: Usa `slice` para crear una sublista que contenga los primeros 3 libros del array.
//7. Ordenar los libros por año: Usa `sort` para ordenar los libros por año de publicación en orden ascendente.
//8. Invertir el orden de los libros: Usa `reverse` para invertir el orden de los libros.
//9. Crear una cadena de títulos: Usa `map` y `join` para crear una cadena que contenga los títulos de todos los libros, separados por comas.
//10. Aplanar una lista de categorías: Supón que tienes un array `categorias` que contiene sublistas de libros. Usa `flat` para aplanar la lista de categorías en una sola lista de libros.