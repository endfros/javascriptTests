console.log(Array.prototype);

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];

const newArray = array1.concat(array2);

console.log(newArray);

Array.prototype.concat = function(array) {
    console.log('este ees el chido');
    return[...this,...array];
    //spread opeerator

    //this = array1;
    //this es el contexto de ejecucion, en este caso 
    //seria array1 porque estamos trabajando con una
    //funcion normal

}

const otherArray = array1.concat(array2);

console.log(otherArray)



const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    passengers: [{
        name: 'aldo',
        edad: 30
    }, {
        name: 'Juan',
        edad: 30
    },
    {
        name: 'Alberto',
        edad: 30
    },
    {
        name: 'Judith',
        edad: 30
    }]
};


let schedules = ['09:00', '10:00', '11:00', '12:00'];

let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']


// 1.- Funcion que se encargue de parsear elementos
// 2.- Funcion que concatene los elementos(arreglos)
// 3.- Que mande llamar las dos funciones anteriores 
// 4.- El resultado debe ser algo parecido a lo siguiente
// let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00']


function filtrarPersonas(personas){
    let personasTransformadas = [];
    let count = 0;
    for(let persona of personas.passengers){
        // trae cada objeto de dicho arreglo
        personasTransformadas.push(passengers.name);
        count++;
    }
    return personasTransformadas;
};

// console.log(filtrarPersonas(flight));

let arreglosConcatenados = filtrarPersonas(flight).concat(schedules);

// console.log(arreglosConcatenados);

function nombreHora(arreglo1,arreglo2) {
    for(let i=0; i<arreglo1.length; i++){
        // for(let j=0; j<array2.length; j++){
        //     let array1 = arreglo1[i];
        //     console.log(array1);
        // }
        let array1 = arreglo1[i];
        console.log(array1);
    }
}

nombreHora(arreglosConcatenados,schedules);