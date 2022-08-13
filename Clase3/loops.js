// Los loops son pedazos de codigo que nos permiten realizar acciones de manera repetitiva.

// WHILE ejecuta una instruccion de forma repetida siempre y cuando se cumpla una condicion.

let n = 0;
while(n <= 3) {
    console.log(n, 'paso por el loop')
    n++;
    // lo unico que buscamos aqui es que incremente n y ya
}

// Imprimir cada valor dentro de un arreglo con while

let frutas = ['manzana', 'platano', 'fresa', 'melon'];
let n = 0;

while(n <= (frutas.length-1)){
    console.log(frutas[n]);
    n++;
}

