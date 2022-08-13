// Los arreglos son objetos que tienen caracteristicas particulares. Inician de 0, es un conjunto de 
// valores almacenado, puedes acceder a alguno de ellos en concreto con ayuda de posición. 

// las statements son el conjunto de varias expresiones. 

let frutas = []; //esto es una expresion, javascript evalua ese texto y puede generar diversos valores.
let indice = 0;

frutas[0] = 'fruta1';
frutas[1] = 'fruta2';
frutas[2] = 'fruta3';
frutas[3] = 10;
frutas[4] = true;
frutas[5] = false;


console.log(frutas);

// Cuando ponemos corchetes basicamente estamos indicando una referencia, o sea frutas es una dirección de memoria, en donde los contenidos 
// estan en los corchetes

// Muchas veces van a estar vacíos, pero pueden ser cambiadas posteriormente en funciones. 

function comprarFrutas(nombreFruta) {
    frutas[indice] = nombreFruta;
    indice++;
}


console.log(frutas[frutas.length-1]); 

comprarFrutas('manzana');
comprarFrutas('fresa');
comprarFrutas('platano');
comprarFrutas('cereza');

console.log(frutas);

const arreglo = [1,2,3];
// El arreglo lo que va a almacenar es una posicion de memoria, por lo que yo podria generar una constante y lo unico que cambia es el contenido
arreglo[0] = 'String';

const verduras = new Array();

// Esta es otra manera de declarar un arreglo
