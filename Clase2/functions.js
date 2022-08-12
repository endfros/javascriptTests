// Declarativa
function generarNombreCompleto(texto1, texto2){
    // cada elemento adentro del parentesis son parametros. a cada
    // elemento se le tiene que poner un nombre que de a entender
    // que es cada uno.
    // Aqui los parametros son genericos, es decir, como una especie de default
    // console.log(texto1+" "+texto2);
    // Backticks concatenación. Es una manera dinamica para generar strings. Podemos generar expresiones mas
    // complejas. Template string. 
    console.log(`${texto1} ${texto2}`)
}


let nombre = "Aldo";    
let apellido = "Aldaco";
// Estos son argumentos, cuando se van a ejecutar dentro de una función;
generarNombreCompleto(nombre,apellido); 

nombre = "Xavi";    
apellido = "Con X";
generarNombreCompleto(nombre,apellido)

nombre = "Javi";    
apellido = "Con J";
generarNombreCompleto(nombre,apellido)

// expresion

let generarNombreCompleto = function(texto1,texto2){
    console.log(`${texto1} ${texto2}`)
    // Esto se puede utilizar en callbacks, las funciones pueden ser compartidas, o sea que pueden ser el parametro de una funcion o se puede retornar. 
};
// la diferencia es que en la expresion la funcion no tiene un nombre y se le asigna como valor a una variable

// arrow function
let arrowFunction = () => {
    console.log(multiplicar(10,5));
};

let persona = {
    saludar: function(){
        console.log('Hola')
    }
    //Lo que esta adentro del objeto se llama metodo, que en este caso seria saludar.
}

persona['saludar']();

function multiplicar(numero1,numero2){
    let resultado = numero1 * numero2;
    console.log(`${resultado}`);
    return resultado;
    // Cuando ejecutas el return se vuelve como una expresion. O sea cuando se ejecuta esta expresion vas a como que botar el resultado. 
    // esta variable solo tiene su valor aqui adentro, afuera nel
    // El scope es el ambito de una variable, el lugar donde va a vivir y ser accesible por nosotros. 
    // Siempre usa el return para utilizar el resultado adentro de la funcion como variable en otras funciones. 
}

let multiplicar = function(numero1,numero2){
    let resultado = numero1 * numero2;
    console.log(`${resultado}`);
}


// Con esto sucede un error de referencia, o sea este nombre no lo encuentra javascript. El scope de esta variable solo esta adentro de esta funcion. 
let multiplicacion = multiplicar(10,5);
// Expresion: Se ejecuta y devuelve un valor. 

multiplicar(15);

function discoteca(edad){
    if(edad < 18){
        return;
    } else {
        console.log("Que baile");
    }
}

discoteca(18);
discoteca(15);
discoteca(18);