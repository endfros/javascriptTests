// Variable por cada tipo de dato

let myNameIsRodrigo = true;

let number = null;

let anotherNumber;

let myName = 'Rodrigo';

let newNumber = 29;

// Objeto auto 

function Car() {
    this.doors = 0;
    this.color = 'black',
    this.electric = false,
    this.moving = () => {
        console.log("I'm moving");
    } 
}

let formulaCar = new Car();
console.log(formulaCar);

// Arreglo

let starterPokemon = ['Bulbasaur','Charmander','Squirtle'];

// 10 mascota

function printPetName(name,times){
    for(let i = 0; i < times; i++){
        console.log(name);
    }
}

printPetName('blanca',10);

// mayor de edad

let person = {
    name: "Nicol",
    age: 20
}

function isLegal(someone){
    if(someone.age > 18){
        console.log(someone.name);
    } else {
        console.log("I cannot use your personal data :c ")
    }
}

isLegal(person);

// imprimir cada valor

let user = {
    name: "Juan",
    age: 20,
    password: 'password2022'
} 

for(element in user){
    console.log(user[element]);
}

//  imprimir arreglo

let fruits = ['strawberry','melon','mango','kiwi'];

for(fruit of fruits){
    console.log(fruit);
}
