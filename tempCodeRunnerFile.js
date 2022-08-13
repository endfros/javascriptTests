let word = 'hola po rro';

function firstToUppercase(string){
    let newString = string.split('');

    for (let i = 0; i <= string.length; i++){
        if (string[0] === string[0].toLowerCase()){
            newString[0] = string[0].toUpperCase();
        }
        // } else if (newString[i] === ' '){
        //     console.log(true);
        //     // newString[i] = newString[i];
        // } else {
        //     newString[i] = string.charAt(i);
        // }
    }
    return newString.join('');
}

console.log(firstToUppercase(word));