//Array inicial:

let ventas = [
    { producto: 'manzanas', cantidad: 5, precio: 2 },
    { producto: 'naranjas', cantidad: 12, precio: 1.5 },
    { producto: 'plátanos', cantidad: 8, precio: 1 },
    { producto: 'fresas', cantidad: 15, precio: 3 },
    { producto: 'uvas', cantidad: 7, precio: 2.5 }
];

//1. Calcular el total de ingresos: El ingreso de una venta se calcula como `cantidad * precio`.

let totalIngresos = ventas.reduce((total, venta) => total + venta.cantidad * venta.precio, 0);

//2. Filtrar ventas grandes: Crea un nuevo array `ventasGrandes` que contenga solo las ventas donde la cantidad 
//vendida sea mayor a 10.

let ventasGrandes = ventas.filter(n =>{
    return n.cantidad > 10;
});

//3. Lista de productos vendidos

let productosVendidos = ventas.map(venta => venta.producto);


//4. Cantidad total vendida por producto

let cantidadPorProducto = {};
ventas.forEach(venta => {
    if (cantidadPorProducto[venta.producto]) {
        cantidadPorProducto[venta.producto] += venta.cantidad;
    } else {
        cantidadPorProducto[venta.producto] = venta.cantidad;
    }
});

// 5. Ventas ordenadas por ingreso

ventas.sort((a, b) => (b.cantidad * b.precio) - (a.cantidad * a.precio));
let ventasOrdenadas = ventas;


console.log("salida: ")

// Total de ingresos
console.log(totalIngresos); // Número

// Ventas grandes
console.log(ventasGrandes); // Array de objetos

// Productos vendidos
console.log(productosVendidos); // Array de strings

// Cantidad total vendida por producto
console.log(cantidadPorProducto); // Objeto

// Ventas ordenadas por ingreso
console.log(ventasOrdenadas); // Array de objetos