// Funciones pasadas como argumentos de otras funciones
// En algun momento se va a mandar a ejecutar
// Funciones de primer orden: trabajar como si fueran cualquier tipo de valor
// 


let suma = (num1,num2) => {
    return num1+num2;
}

let resta = (num1,num2) => {
    return num1-num2;
}

let multiplicacion = (num1,num2) => {
    return num1*num2;
}

let division = (num1,num2) => {
    return num1/num2;
}

function calculadora(num1,num2,callback){
    return callback(num1,num2);
    
}

console.log(calculadora(10,10,multiplicacion));

// la funcion calculadora en el parametro 3 necesita un valor, este valor es una función.
// si te das cuenta el return de la funcion es un callback de dos parametros, este callback
// esta llamando a una funcion, que va a estar dado por el tercer parametro, que va a ser
// el nombre de la función que se va a referenciar. y ya xd. 

// crea una funcion que reciba 3 funciones diferentes y las ejecute en orden

let padre = (hijo1,hijo2,hijo3) => {
    hijo1();
    hijo2();
    hijo3();
};

let fun1 = () => {
    console.log('funcion1');
};

let fun2 = () => {
    console.log('funcion2');
};

let fun3 = () => {
    console.log('funcion3');
};

padre(fun1,fun2,fun3);

let hacerEnsalada = (contenedor, verduras, cuchillo, lavarVerduras, cortarVerduras, mezclarVerduras) => {
    // 1.- contenedor
    // 2.- verduras
    // 3.- cuchillo
    // lavar verduras
    // cortarlas
    // mezclarlas

    // que debo hacer
    let verdurasLimpias = lavarVerduras(verduras);
    let verdurasCortadas = cortarVerduras(cuchillo, verdurasLimpias);
    let ensalada = mezclarVerduras(contenedor, verdurasCortadas);

    return ensalada;
};

let verduras = ['pimienta','lechuga','zanahoria'];

let lavar = (algo) => {
    console.log(`Lavando...${algo}`);
    return 'verduras limpias';
};

let cortar = (cuchillo, algo) => {
    console.log(`Cortando con el ${cuchillo}...${algo}`);
    return 'verduras cortadas';
};

let mezclar = (contenedor, algo) => {
    console.log(`Mezclando dentro del ${contenedor}...${algo}`);
};

hacerEnsalada('tupperware',verduras,'chucky',lavar,cortar,mezclar);