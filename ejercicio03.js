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
let libroEspecifico = biblioteca.find(n => n.titulo === "El Principito")

//2. Índice de un libro específico: Usa `findIndex` para encontrar el índice del libro cuyo autor sea "Gabriel García Márquez".
let indiceLibro = biblioteca.findIndex(n => n.autor === "Gabriel García Márquez")

//3. Verificar disponibilidad: Usa `some` para verificar si hay algún libro disponible.
let hayDisponible = biblioteca.some((e)=> e.disponible === true)

//4. Verificar todos los libros de un autor: Usa `every` para verificar si todos los libros de un autor específico están disponibles (elige un autor presente en el array).
let autor = "Gabriel García Márquez"
let todosDisponibles = biblioteca.every(e => {
    if(e.autor === autor){
        return e.disponible
    }
    return true

})

//5. Combinar dos listas de libros: Usa `concat` para combinar la lista `biblioteca` con otra lista `nuevosLibros` de al menos 2 libros.
let listaCombinada = biblioteca.concat(nuevosLibros)

//6. Crear una sublista de libros recientes: Usa `slice` para crear una sublista que contenga los primeros 3 libros del array.
let librosRecientes = biblioteca.slice(0,3)

// 7. Ordenar los libros por año: Usa `sort` para ordenar los libros por año de publicación en orden ascendente.
biblioteca.sort((a, b) => a.año - b.año);
let librosOrdenados = [ ...biblioteca]; 


// 8. Invertir el orden de los libros: Usa `reverse` para invertir el orden de los libros.
biblioteca.reverse();
let librosInvertidos = [ ...biblioteca]; 

//9. Crear una cadena de títulos: Usa `map` y `join` para crear una cadena que contenga los títulos de todos los libros, separados por comas.
let cadenaTitulos = biblioteca.map(a => a.titulo).join(", ")


//10. Aplanar una lista de categorías: Supón que tienes un array `categorias` que contiene sublistas de libros. Usa `flat` para aplanar la lista de categorías en una sola lista de libros.
let categorias = [
    [
        { titulo: 'Cien Años de Soledad', autor: 'Gabriel García Márquez', año: 1967, disponible: true },
        { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', año: 1605, disponible: false }
    ],
    [
        { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', año: 1943, disponible: true },
        { titulo: '1984', autor: 'George Orwell', año: 1949, disponible: false }
    ],
    [
        { titulo: 'Ficciones', autor: 'Jorge Luis Borges', año: 1944, disponible: true }
    ]
];


let listaAplanada = categorias.flat();



console.log("salida esperada: ")

// Libro específico encontrado
console.log(libroEspecifico); // Objeto del libro

// Índice del libro específico
console.log(indiceLibro); // Número

// Verificar disponibilidad
console.log(hayDisponible); // Booleano

// Verificar todos los libros de un autor
console.log(todosDisponibles); // Booleano

// Combinar listas de libros
console.log(listaCombinada); // Array de objetos

// Sublista de libros recientes
console.log(librosRecientes); // Array de objetos

// Libros ordenados por año
console.log(librosOrdenados); // Array de objetos

// Orden invertido de libros
console.log(librosInvertidos); // Array de objetos

// Cadena de títulos de libros
console.log(cadenaTitulos); // String

// Lista aplanada de categorías
console.log(listaAplanada); // Array de objetos// Impresión de resultados esperados
console.log("Salida esperada:");
console.log("---------------");

// Libro específico encontrado
console.log("Libro específico encontrado:");
console.log(libroEspecifico); // Objeto del libro
console.log("");

// Índice del libro específico
console.log("Índice del libro específico:");
console.log(indiceLibro); // Número
console.log("");

// Verificar disponibilidad
console.log("¿Hay algún libro disponible?");
console.log(hayDisponible); // Booleano
console.log("");

// Verificar todos los libros de un autor
console.log(`¿Todos los libros de ${autor} están disponibles?`);
console.log(todosDisponibles); // Booleano
console.log("");

// Combinar listas de libros
console.log("Lista combinada de libros:");
console.log(listaCombinada); // Array de objetos
console.log("");

// Sublista de libros recientes
console.log("Sublista de libros recientes:");
console.log(librosRecientes); // Array de objetos
console.log("");

// Libros ordenados por año
console.log("Libros ordenados por año:");
console.log(librosOrdenados); // Array de objetos
console.log("");

// Orden invertido de libros
console.log("Libros en orden invertido:");
console.log(librosInvertidos); // Array de objetos
console.log("");

// Cadena de títulos de libros
console.log("Cadena de títulos de libros:");
console.log(cadenaTitulos); // String
console.log("");

// Lista aplanada de categorías
console.log("Lista aplanada de categorías:");
console.log(listaAplanada); // Array de objetos