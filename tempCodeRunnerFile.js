
let word = 'un pajarito volo y se choco contra un camion eee ee e';

function howManyCharacters(string,letter){
    let characters = 0;
    for (let i = 0; i < string.length; i++){

        if(string[i] == letter){
            characters++;
        }
    }

    return characters;
}

console.log(howManyCharacters(word,'e'));