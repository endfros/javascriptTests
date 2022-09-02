// Find
// Devuelve el primer coso que cumple con la condicion
const frutas = ['banana','banana podrida','fresa podrida','manzana'];

const primerFrutaPodrida = frutas.find(function(fruta){
    return fruta.includes('banana')
})

console.log(primerFrutaPodrida);

const frutas = ['banana','banana podrida','fresa podrida','manzana'];

const sinFrutasPodridas = frutas.filter(function(fruta){
    if(fruta.includes('podrida')){
        return false;
    }
    return true;
})

console.log(sinFrutasPodridas);