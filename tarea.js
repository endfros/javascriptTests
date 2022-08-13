let arreglo = [1,2,3,4,5,6,7,8,9];

function invertirArreglo(arreglo){
    let newArray = [];
    for (let i = 0; i < arreglo.length; i++ ){
        newArray[i] = arreglo[arreglo.length-i-1];
    }
    return newArray;
}

arreglo = invertirArreglo(arreglo);
console.log(arreglo);

// ______________________________________________________________

let arreglo = [100,6,10,5,2,20,9,14,99];

function findBiggest(arreglo){
    let biggestNumber = 0;
    biggestNumber = arreglo[0];
    for (let i = 0; i < arreglo.length; i++ ){
        if (arreglo[i] > biggestNumber){
            biggestNumber = arreglo[i];
        }
    }
    return biggestNumber;
}

console.log(findBiggest(arreglo));

// ______________________________________________________________

let arreglo = [100,6,10,5,2,20,9,14,99];

function manyNumbersBigger(arreglo, numero){
    let biggerNumbers = 0;
    for (let i = 0; i < arreglo.length; i++ ){
        if (arreglo[i] > numero){
            biggerNumbers++;
        }
    }
    return biggerNumbers;
}

console.log(manyNumbersBigger(arreglo,40));

// ______________________________________________________________

let arreglo = [100,6,10,5,77,2,20,9,14,99];

function findEven(arreglo){
    let even = [];
    let n = 0;
    for (let i = 0; i < arreglo.length; i++ ){
        if (arreglo[i] % 2 == 0){
            even[n] = arreglo[i];
            n++;
        }
    }
    return even;
}

console.log(findEven(arreglo));

// ______________________________________________________________

let arreglo = [100,6,20,5,20,20,9,14,20];

function manyRepeatedNumbers(arreglo, numero){
    let repeatedNumbers = 0;
    for (let i = 0; i < arreglo.length; i++ ){
        if (arreglo[i] == numero){
            repeatedNumbers++;
        }
    }
    return repeatedNumbers;
}

console.log(manyRepeatedNumbers(arreglo,5));

// ______________________________________________________________

let frutas = ['manzana','platano','pera','naranja','sandia','fresa'];

function isInArray(arreglo, string){
    for (let i = 0; i < arreglo.length; i++ ){
        if (arreglo[i] == string){
            return true;
        }
    }
    return false;
}

console.log(isInArray(frutas,'popo'));

// ______________________________________________________________

let arreglo = [100,6,20,5,20,20,9,14,20,20];

function divideArray(arreglo){
    let newArray = [];
    for (let i = 0; i < arreglo.length/2; i++ ){
        newArray[i] = arreglo[i];
    }
    return newArray;
}


console.log(divideArray(arreglo));

// ______________________________________________________________

let arreglo1 = [100,6];
let arreglo2 = [40,21];
let arreglo3 = [2,4];

function combineArray(arreglo1,arreglo2,arreglo3){
    let newArray = [arreglo1]+ ',' + [arreglo2] + ',' + [arreglo3];
    return newArray.split(',').map(Number);
    // Investigue esto y lo que hago primero es concatenar los tres arreglos, cada uno separarlo con 
    // una coma para que no se junten los números. Luego se utiliza el split que lo que hace es dividir
    // un string en elementos utilizando el parametro asignado como divisor, en este caso ','. Se hace
    // esto debido que al usar el + concatena los arreglos como strings. Una vez realizada la separacion
    // se hace un nuevo arreglo por decirlo con map. Map crea un nuevo array aplicando a cada uno de sus
    // elementos el parametro o funcion colocado entre parentesis, en este caso le coloque el number para
    // realizar una coerción explicita transformando los strings en numeros.
}

console.log(combineArray(arreglo1,arreglo2,arreglo3));

// ______________________________________________________________

function fibonacci(elements){
    let n = [0,1];
    for (let i = 2; i <= elements; i++){
        n.push(n[i-1]+n[i-2]);
    }
    return n;
}
console.log(fibonacci(8));

// ______________________________________________________________

let word = 'alo';

function isLowercase(string){
    for (let i = 0; i <= string.length; i++){
        if (string[i] === string[i].toUpperCase()){
            return false;
        } else {
            return true
        }
    }
}

console.log(isLowercase(word));

// ______________________________________________________________

let word = 'remer';

function isPalindrome(string){
    let newString = [];
    for (let i = 0; i < string.length; i++ ){
        newString[i] = string[string.length-i-1];
    }

    if (newString.join('') === string){
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(word));

// ______________________________________________________________

let word = 'hola po rro';

function firstToUppercase(string){
    let newString = string.split('');

    for (let i = 0; i <= string.length; i++){
        if (string[0] === string[0].toLowerCase()){
            newString[0] = string[0].toUpperCase();
        }
        
    }
    return newString.join('');
}

console.log(firstToUppercase(word));