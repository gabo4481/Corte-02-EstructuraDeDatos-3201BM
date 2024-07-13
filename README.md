# Manipulación de Arrays de Objetos en JavaScript

Este proyecto demuestra varias operaciones comunes de manipulación de arrays en JavaScript usando un array de objetos que representan libros en una biblioteca. Se realizan operaciones como búsqueda, combinación, ordenación e inversión de orden, entre otras.

## Estructura del Proyecto

El proyecto contiene un array inicial `biblioteca` que incluye una lista de libros, cada uno representado como un objeto con propiedades `titulo`, `autor`, `año` y `disponible`. Además, se utiliza una lista adicional `nuevosLibros` para combinar con la biblioteca existente.

## Operaciones Realizadas

1. **Buscar un libro específico:** Usamos `find` para encontrar el libro cuyo título sea "El Principito".

2. **Índice de un libro específico:** Usamos `findIndex` para encontrar el índice del libro cuyo autor sea "Gabriel García Márquez".
    

3. **Verificar disponibilidad:** Usamos `some` para verificar si hay algún libro disponible.

4. **Verificar todos los libros de un autor:** Usamos `every` para verificar si todos los libros de un autor específico están disponibles.

5. **Combinar dos listas de libros:** Usamos `concat` para combinar la lista `biblioteca` con otra lista `nuevosLibros` de al menos 2 libros.

6. **Crear una sublista de libros recientes:** Usamos `slice` para crear una sublista que contenga los primeros 3 libros del array.

7. **Ordenar los libros por año:** Usamos `sort` para ordenar los libros por año de publicación en orden ascendente.

8. **Invertir el orden de los libros:** Usamos `reverse` para invertir el orden de los libros.

9. **Crear una cadena de títulos:** Usamos `map` y `join` para crear una cadena que contenga los títulos de todos los libros, separados por comas.

10. **Aplanar una lista de categorías:** Usamos `flat` para aplanar la lista de categorías en una sola lista de libros.

## Salida Esperada

Cada operación imprime un resultado esperado en la consola, lo que facilita la verificación y la comprensión de cómo funciona cada método de array en JavaScript.

### Ejemplo de salida esperada:
```javascript
console.log("Libro específico encontrado:");
console.log(libroEspecifico); // Objeto del libro

console.log("Índice del libro específico:");
console.log(indiceLibro); // Número

console.log("¿Hay algún libro disponible?");
console.log(hayDisponible); // Booleano

console.log(`¿Todos los libros de ${autor} están disponibles?`);
console.log(todosDisponibles); // Booleano

console.log("Lista combinada de libros:");
console.log(listaCombinada); // Array de objetos

console.log("Sublista de libros recientes:");
console.log(librosRecientes); // Array de objetos

console.log("Libros ordenados por año:");
console.log(librosOrdenados); // Array de objetos

console.log("Libros en orden invertido:");
console.log(librosInvertidos); // Array de objetos

console.log("Cadena de títulos de libros:");
console.log(cadenaTitulos); // String

console.log("Lista aplanada de categorías:");
console.log(listaAplanada); // Array de objetos
