// PObj todo es un objeto y todo se puede representar como tal
// tons tiene atributos y tiene elementos

let carro = {
    puertas: 4,
    color: 'gris', 
    electrico: false,
    // metodos son propiedades que almacenan funciones
    acelerar: () => {
        console.log('Estoy avanzando');
    } // acelerar es un estado entonces puede ser una funcion
}

function Carro() {
    this.puertas = 0;
    this.color = 'gris',
    this.electrico = false,
    // metodos son propiedades que almacenan funciones
    this.acelerar = () => {
        console.log('Estoy avanzando');
    } 
}

let miniCooper = new Carro();
console.log(miniCooper);

let string = new String();
console.log(typeof string);

 let fun = carro.acelerar;

 function recibirCallback(fun){
    fun();
 }

 recibirCallback(fun)

function retornaOtraFuncion(){
    let referencia = () => {
        console.log('holaa')
    };
    return referencia
 }

 let resultado = retornaOtraFuncion()();

 // Estudiar referencias xdd