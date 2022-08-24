let sentence = 'hola que tal';

function divideString(sentence){
    let string1 = sentence.slice(0, sentence.length/2);
    let string2 = sentence.slice(sentence.length/2);
    console.log(string1);
    console.log(string2);
}

divideString(sentence);