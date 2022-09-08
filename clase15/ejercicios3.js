// 8.- generar una función que me retorne un string que diga 'hola koders y después imprimir ese valor en la consola con ayuda de console.log() 

function helloKoders(){
    return 'Hello Koders'
}

console.log(helloKoders());

// 9.- generar una función que me retorne el resultado de una operación matemática, el nombre de la operación y los valores con los que se ejecutara la operación serán los parámetros de dicha funcion, por ejemplo:

// 	let resultadoSuma = operacionMatematica('suma', 10,10);
// 	let resultadoResta = operacionMatematica('resta', 10,10);
// 	let resultadoMultiplicacion = operacionMatematica('multiplicación', 10,10);

function sum(num1,num2){
    return num1+num2
}

function substract(num1,num2){
    return num1-num2
}

function multiply(num1,num2){
    return num1*num2
}

function divide(num1,num2){
    return num1/num2
}

function mathOperation(operation,num1,num2){
    if(operation === 'sum'){
        let result = sum(num1,num2);
        return result
    } else if (operation === 'substract'){
        let result = substract(num1,num2);
        return result
    } else if (operation === 'multiply'){
        let result = multiply(num1,num2);
        return result
    } else if (operation === 'divide'){
        let result = divide(num1,num2);
        return result
    }
}

let resultSum = mathOperation('sum',10,2);

console.log(resultSum);

// 10.- generar una función que me retorne un objeto literal con las siguientes propiedades(nombre, edad, genero, dirección), la propiedad nombre debe ser un objeto que tenga las siguientes propiedades(nombre, apellidoPaterno y apellidoMaterno)

function person() {
    this.name = {
        firstName: 'Rodrigo',
        firstSurname: 'Montoya',
        nextSurname: 'Villanueva'
    },
    this.age = 22,
    this.gender = 'male',
    this.direction = 'Arequipa'
}

let rodrigo = new person();

console.log(rodrigo);

// 11.- generar una función que me retorne un arreglo que contenga los nombres de los koders de la generación 21 

function jsGeneration21(){
    let koders = ['hector', 'sina', 'rafa', 'xavy', 'deni', 'fanny', 'cin', 'annie', 'benja', 'jona', 'vic', 'fer', 'rodri'];
    return koders
}

console.log(jsGeneration21());

// 12.- generar una función que imprima el nombre de un koder en particular si es que existe en la lista si no existe imprimir el mensaje 'Ese alumno no pertenece a esta generación'

let kodersList = ['hector', 'sina', 'rafa', 'xavy', 'deni', 'fanny', 'cin', 'annie', 'benja', 'jona', 'vic', 'fer', 'rodri'];

function findKoder(koder,list){
    let included = list.includes(koder);
    if (included == true) {
        console.log(koder);
    } else {
        console.log('This student is not in this generation');
    }
}

findKoder('jorge',kodersList); 

// 13.- generar una función que genere un arreglo a partir de una cadena de texto por ejemplo:
// 	let arreglo = generarArreglo('hola'); 
// 	console.log(arreglo) // ['h', 'o', 'l', 'a']

function generateArray(string){
    let newArray = string.split('');
    return newArray
}

let array = generateArray('hola');
console.log(array);

// 14.- generar una función que sume todos los números que están dentro de una lista de números, por ejemplo

// 	let suma = sumarElementos([1,2,3,4,5]); 
// 	console.log(suma) // 15

function sumArray(array){
    let result = array.reduce(function(x,y){
        return x+y
    })

    return result
}

let sum = sumArray([1,2,3,4,5])
console.log(sum);


// 15.- generar una función que quite todos los números que sean mayores al numero 10 de una lista de números, por ejemplo

// 	let nuevoArreglo = limpiarArreglo([11,12,3,4,15,5,8,10,20,1,2]); 
// 	console.log(nuevoArreglo) // [3,4,5,8,10,1,2]

function cleanArray(array){
    return array.filter(element => element < 10)
}

let nuevoArreglo = cleanArray([11,12,3,4,15,5,8,10,20,1,2]); 
console.log(nuevoArreglo) // [3,4,5,8,10,1,2]

// 16.- generar una función que imprima el numero de día de la semana según el día que reciba, por ejemplo 

// 	recibimos 'lunes' entonces imprimira 0 
// 	recibimos 'martes' entonces imprimira 1 
// 	recibimos 'miércoles' entonces imprimira 2 
// 	recibimos 'jueves' entonces imprimira 3 
// 	recibimos 'viernes' entonces imprimira 4
// 	recibimos 'sábado' entonces imprimira 5
// 	recibimos 'domingo' entonces imprimira 6   

function dayOfTheWeek(day){
    if(day==='monday'){
        return console.log(0)
    } else if(day==='tuesday'){
        return console.log(1)
    } else if(day==='wedesday'){
        return console.log(2)
    } else if(day==='thursday'){
        return console.log(3)
    } else if(day==='friday'){
        return console.log(4)
    } else if(day==='saturday'){
        return console.log(5)
    } else if(day==='sunday'){
        return console.log(6)
    }
}

dayOfTheWeek('monday');

// 17.- generar una función para quitar un koder de la lista de koders

// quitarKoder('Manu');

// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; // variable global

// quitarKoder('Rafa');

// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; // variable global

// quitarKoder('Xavy');

// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Annie']; // variable global

// quitarKoder('Fanny');

// ['Hector', 'Jonathan', 'Fernando', 'Cintia', 'Rodri', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Annie']; // variable global

let listKoders = ['Hector', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; // variable global

function removeKoder(koder){
    let newArray = listKoders.filter(element => element !== koder);
    return console.log(newArray)
}

removeKoder('Manu');
