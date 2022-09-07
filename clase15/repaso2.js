//For in
//Itera a través de todas las propiedades enumerables de un objeto

for(const i in object){
    //con esto declaramos una variable constante que solo vive en ese contexto. Recibe la variable
    //en donde vamos a almacenar el nombre de la propiedad que esta dentro de cada objeto.
}

const book = {
    title: 'Harry Popoter',
    author: "vic",
    pages: 300
}

book.title;
book['title'];

//two ways to access an object property

for(let nameProperty in book){
    console.log(nameProperty, book[nameProperty]);
};

//nameProperty references each object property. So the variable declared in parenthesis
//is basically each object propety.

//an iterable has an index. PE an array. 

//for in

//takes the index

//for of

//it takes the value of each index but only on an iterable object.

let fruits = ['strawberry', 'mango', 'melon'];

for(let index of fruits){
    console.log(index);
};

let obj = {
    fruits: ['strawberry', 'mango', 'melon'],
    characters: ['aldo', 'sina', 'hector']
}

for(let propiedad in obj){
    
    for(let element of obj[propiedad]){
        console.log(obj[propiedad]);
    }
}



//functions 

function printName(name){
    console.log(`My name is ${name}`);
    return
}  

printName('Rodri');

function makeJelly(flavor,form){
    let jelly = `This jelly is ${flavor} flavored and it has a ${form} form`;
    return jelly
};

console.log(jelly);

console.log(makeJelly('chocolate','star'));

//Scopes

//Global scope and global scope

//Local: The variables live inside a code block, a function. 