function imprimirFrutas(frutas){
    let n = 0;
    
    while(n <= (frutas.length-1)){
        console.log(frutas[n]);
        n++;
    }
}
let frutas = ['manzana', 'platano', 'fresa', 'melon', 'coso'];
imprimirFrutas(frutas);