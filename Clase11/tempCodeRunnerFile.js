const frutas = ['banana','banana podrida','fresa podrida','manzana'];

const sinFrutasPodridas = frutas.filter(function(fruta){
    if(fruta.includes('podrida')){
        return false
    }
    return true
})

console.log(sinFrutasPodridas);