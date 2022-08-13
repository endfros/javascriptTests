// Los loops son pedazos de codigo que nos permiten realizar acciones de manera repetitiva.

// WHILE ejecuta una instruccion de forma repetida siempre y cuando se cumpla una condicion.

let n = 0;
while(n <= 3) {
    console.log(n, 'paso por el loop');
    n++;
    // lo unico que buscamos aqui es que incremente n y ya
}

// Imprimir cada valor dentro de un arreglo con while

let frutas = ['manzana', 'platano', 'fresa', 'melon'];
let indice = 0;

// function imprimirFrutas(frutas){
//     let indice = 0;
    
//     while(indice <= (frutas.length-1)){
//         console.log(frutas[indice]);
//         indice++;
//     }
// }
//FOR Este bucle se repite hasta que una condición especifica se evalúa como falsa. 

function imprimirFrutas(frutas){
    for (let i = 0; i <= frutas.length - 1; i++){
        console.log(frutas[i]);
    }
}

imprimirFrutas(frutas);

// FOR in

let persona = {
    nombre: 'aldo',
    edad: 30,
    sexo: 'masculino'
};

// El for in nos mueve por las propiedades de un objeto
for(const llave in persona){
    console.log(persona[llave]);
}

// FOR of

// Itera sobre objetos iterables (array, map, set, arguments object) y ejecuta acciones con los valores obtenidos en cada iteración

let frutasPreferidas = ['manzana amarilla', 'platano', 'mango', 'sandia'];

for(const fruta of frutasPreferidas){
    console.log(fruta);
}

// diferencia. for in llaves for of valores. 