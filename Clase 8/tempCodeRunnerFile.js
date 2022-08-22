let palabra = 'hola que tal';

String.prototype.log = function(sentence) {
    console.log(sentence);
}

palabra.log(palabra); 