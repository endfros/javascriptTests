let sentence = 'hola que tal';

function replaceSpace(sentence){
    console.log(sentence.replace(/ /g,'.'));
}

replaceSpace(sentence);

//--------------------------------------------------

let sentence = 'hola que tal';

function divideString(sentence){
    let string1 = sentence.slice(0, sentence.length/2);
    let string2 = sentence.slice(sentence.length/2);
    console.log(string1);
    console.log(string2);
}

divideString(sentence);

//--------------------------------------------------
let palabra = 'hola que tal';

String.prototype.log = function(sentence) {
    console.log(sentence);
}

palabra.log(palabra); 