const autos = [
    {marca: 'BMW',  modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A6',  year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Chevrolet', modelo: 'Camaro',  year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A3',  year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Ford', modelo: 'Mustang',  year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual'},
    {marca: 'Dodge', modelo: 'Challenger',  year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 3',  year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'BMW', modelo: 'Serie 5',  year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico'},
    {marca: 'Mercedes Benz', modelo: 'Clase C',  year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico'},
    {marca: 'Audi', modelo: 'A4',  year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico'}
];

let resultado = autos.map(function(auto){
    return {modelo: auto.modelo, year: auto.year, precio: auto.precio} 
})

console.log(resultado);

const auto = {
     modelo: 'Serie 3', 
     year: 2012, 
     precio: 30000
};

//-------------------------------------------------------------

const areaCirculo = (r) => {
    let area = Math.PI * Math.pow(r,2)
    return area;
}

console.log(areaCirculo(2));

//-----------------------------------------------------------------

const numeros = [1,3,1,4,5,3,3,1,2];

// console.log(numeros.indexOf(3));

function limpiarRepetidos(arreglo){
    let arregloLimpio = arreglo.filter(function(dato,i){ 
        if (arreglo.indexOf(dato) === i){
            // console.log(arreglo.indexOf(dato));
            // console.log(i);
            return true
        }
        // console.log(arreglo.indexOf(dato));
        // console.log(i);
        return false
    })

    return arregloLimpio
} 

console.log(limpiarRepetidos(numeros)); // return [1,2,3,4,5]

let myArray = [3, 9,12, 23, 99, 1];

let sumArreglo = myArray.reduce((total, num) => {
return total + num;
},);

console.log(sumArreglo);

//----------------------------------------

function removeFromArray(array,item){
    newArray = array.filter(function(element){
        return element !== item
    })
    return newArray
}

console.log(removeFromArray([1, 2, 3, 4], 3)); // should remove 3 and return [1,2,4]
console.log(removeFromArray(['aldo', 'annie'], 'aldo')); // should remove 'aldo' and return ['annie']

//-----------------------------------------

function saludar(saludo){
    return console.log(saludo);
}

saludar('Hola mundo') // Hola mundo

//-----------------------------------------

function repeatString(string,repeat){
    let newString = '';
    for(let i = 0 ; i<repeat; i++){
        newString = newString + string;
        
    }
    return newString
}

console.log(repeatString('hey',3));

//-----------------------------------------

function reverseString(string){
    let arrayString = string.split('');
    let newArrayString = [];
    for(let i = 0; i<string.length; i++){
        newArrayString[i] = arrayString[arrayString.length-i-1]
    }
    
    return newArrayString.join('')
}

console.log(reverseString('hola'));

//-----------------------------------------

function sumAll(number1,number2){
    let sum = 0;
    for (number1; number1 <= number2; number1++){
        sum = sum + number1;
    }
    return sum
} 


console.log(sumAll(1, 4)) // 1 + 2 + 3 + 4 = 10
console.log(sumAll(2, 3)) // 2 + 3 = 5
console.log(sumAll(1, 6)) // 1 + 2 + 3 + 4 + 5 + 6 = 21

//-----------------------------------------

function ctof(value){
    return (value*1.8)+32;
}

console.log(ctof(1));

//-----------------------------------------

function palindrome(string){
    for(let i = 0; i < string.length/2; i++){
        if(string[i] !== string[string.length-i-1]){
            return false
        }
    }
    return true
}

console.log(palindrome('tacos'))

//----------------------------------------

const books = [   {     title: 'Book',     author: 'Name'   },   {     title: 'Book2',     author: 'Name2'   } ];

function getTheTitles(object){
    let newArray = object.map(x => x.title) 
    return newArray
}

console.log(getTheTitles(books)) // ['Book','Book2']

//----------------------------------------
const numeros = [1,2,3,4,5,6,7,8,9];

const myOwnReduce = (array) => {
    
} // arreglo filtrado