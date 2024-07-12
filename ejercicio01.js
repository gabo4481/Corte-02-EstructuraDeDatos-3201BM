//array inicial:
let inventario = [
    { nombre: 'leche', cantidad: 10 },
    { nombre: 'pan', cantidad: 20 },
    { nombre: 'huevos', cantidad: 30 }
];

//1. Añade un nuevo producto al principio del array con nombre "manzanas" y cantidad 50.
let producto1 = {nombre: 'manzanas',cantidad: 50}
inventario.unshift(producto1)


//2. Añade dos nuevos productos al final del array: "naranjas" con cantidad 30 y "plátanos" con cantidad 40.
let producto2_1 = { nombre: 'naranjas', cantidad: 30 }
let producto2_2 = { nombre: 'platanos', cantidad: 40 }

inventario.push(producto2_1,producto2_2)

//3. Elimina el primer producto del array y almacena el producto eliminado en una variable.
let condicion3 = inventario.shift();

//Elimina el último producto del array y almacena el producto eliminado en otra variable.
let condicion4 = inventario.pop();

//5. Reemplaza el segundo producto del array con un nuevo producto que tenga nombre "fresas" y cantidad 25.
let producto5 = { nombre: 'fresas', cantidad: 25 }

inventario.splice(1,1,producto5)

//6. Inserta un nuevo producto con nombre "uvas" y cantidad 60 en la tercera posición del array.
let producto6 = { nombre: 'uvas', cantidad: 60 }

inventario.splice(2,0,producto6)

//7. Elimina el producto que está en la cuarta posición del array y almacena el producto eliminado en una variable.

let condicion7 = inventario.splice(3,1)


// Estado final del inventario

console.log("Estado final del inventario")
console.log(inventario);

console.log("--------")

// Variables con los productos eliminados
console.log("Variables con los productos eliminados")
console.log(condicion3);
console.log(condicion4);
console.log(condicion7[0]);







