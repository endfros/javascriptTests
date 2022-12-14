function saludar (saludo){
    let time = 2000;
    setInterval(saludo,time);
};

let saludo = () => {
    console.log('Hola qué tal?');
};

saludar(saludo);

//----------------------------------------

function saludar (saludo){
    setTimeout(saludo,10000);
};

let saludo = () => {
    console.log('Hola qué tal?');
};

saludar(saludo);

//----------------------------------------

let automovil = {
    color: 'verde',
    ruedas: '4',
    suspension: true,
    motor: true,
    electrico: false,
    asientosTela: true,
    AC: true,
    automatico: true 
};

let casa = {
    color: 'blanca',
    pisos: 2,
    puertas: 10,
    suelo: 'losa',
    baños: 4,
    habitaciones: 5,
    calefaccion: false,
    cochera: true
};

let persona = {
    nombre:'Marcelo',
    estatura:174,
    peso:63,
    edad:23,
    sexo:'hombre',
    colorDePelo: 'negro'
};

let mentor = {
    nombre:'Aldo',
    especialidad:'JavaScript',
    añosExperiencia:8,
    trabajo:'BBVA',
    odiaJs: false //dice que false
};

let koder = {
    nombre:'Rodrigo Montoya',
    trabajo: false,
    nacionalidad:'peruano',
    odiaJs: false //todavía
};

let computadora = {
    cpu:'i7',
    ram:16,
    rom:256,
    pantalla:'LG',
    teclado:'Logitech',
    mouse: 'Apple'
}

let edificio = {
    pisos:6,
    ascensor:true,
    calefaccion:true,
    color:'blanco',
}

let telefonoMovil = {
    marca:'Apple',
    modelo:'SE',
    año:2020,
    sistemaOperativo:'iOS',
    memoria:64,
    pantalla: 4.7
}

let menu = {
    bebidas: {
        alcoholicas:{
            cervezas:['modelo','xx','corona','pacifico'],
            vinos:['vinito1','vinito2']
        },
        refrescos:['coca cola','inka cola','sprite','nectarin','escocesa'],
        jugos:['piña','naranja','manzana','guayaba'],
        aguas:['piña','manzana','horchata']
    },

    platos: {
        entradas:['escribano','tequeños','mote','chifles'],
        segundos: {
            pastas:['alfredo','bolognesa','pesto'],
            guisos:['estofado','seco','locro'],
            tacos:['pastor','carnitas','tripa'],
            mariscos:['civinche','celador','jalea'],
            pescados:['ceviche','frito'],
            carnes:['pollo','carne']
        },
        postres: ['pastel','alfajor','mousse']
    }
}

// -------------------------------------------------

let persona = {
    nombre:'Marcelo',
    estatura:174,
    peso:63,
    edad:23,
    sexo:'hombre',
    colorDePelo: 'negro'
};


function saludoPersona(persona){
    return saludo()
}

let saludo = () => {
    console.log(`Hola ${persona.nombre}`);  
}

saludoPersona(persona);

// se puede utilizar const porque no puede cambiar
// el valor almacennado en ese espacio en memoria

const auto = new Object();
auto.puertas = 4;
auto.electrico = false;
auto.acelerar = () => {
    console.log('Voy acelerando');
};


function Carro(){
    this.puertas = 4

}

const bmw = new Carro();

// un objeto es una instancia de una clase
// un objeto de ese tipo es una copia de ese otro tipo de objeto

class PersonaJuegaPS5{ // ES6 sugar syntax
    constructor(){
        this.consola = true;
        this.gordo = true;
        this.lentes = true;

    }//soy un metodo para construir el template 

    saludar(){
        console.log('Le da amsiedad');
    }

    jugarPs5(){
        console.log('Todo el tiempo se la pasa jugando');
    }
}

const gordoFriki = new PersonaJuegaPS5();

gordoFriki.saludar();

// poo herencia: como compartir 