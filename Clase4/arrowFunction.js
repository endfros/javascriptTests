// es una forma de generar una funcion de manera compacta
// son expresiones, una function expresion 

const arrowFunction = () => {

}

// En ocaciones es bueno utilizar este tipo de funciones 
// Cuando tiene un unico parametro podemos omitir los parentesis
// Es una manera bastante completa de generar funcioens

const saludar = (prefijo, nombre) => {
    console.log(`Hola ${prefijo} ${nombre}`);
    console.log(arguments);
}

saludar('Sr.', 'Rodrigo');

function saludarDos(prefijo, nombre){
    console.log(`Hola ${prefijo} ${nombre}`);
    console.log(arguments);
    for(const argument of arguments){
        console.log(argument);
    }
}

saludarDos('Sr.', 'Rodrigo');


(function(){

})(); //IIFE inmediatly invoked function expression


let nombre = 'Aldo';

(function(){
    let nombre = 'Juan';
    console.log(nombre);
})();
console.log(nombre);