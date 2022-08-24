// Retornar un objeto con los nombres de los usuarios ordenados por edad, de mayor a menor

const users = [
    { name: 'magaly', age: 30 },
    { name: 'aldo', age: 18 },  
    { name: 'alfonso', age: 20 }, 
    { name: 'jesus', age: 50 }, 
    { name: 'alberto', age: 10 }
];

let usersNew = users.sort(function (key1,key2){
    return key1.age-key2.age;
})

function parse(objetos){
    let newArray = [];
    let count = 0;
    for(let objeto of objetos){
        // trae cada objeto de dicho arreglo
        newArray[count] = {[count]: objeto.name};
        count++;
    }
    return newArray;
};


console.log(parse(usersNew));