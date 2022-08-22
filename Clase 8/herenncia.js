const cheff = {
    tipo: 'basica',
    cocinar: function(platillo){
        console.log(`cocinnado el ${platillo}`)
    }
};

const aldo = {
    nombre: 'aldo',
    edad: 30,
    profesion: 'developer',
    programar: function(){
        console.log('programando');
    }
};

aldo.__proto__ = cheff;

Object.setPrototypeOf(aldo,cheff);

aldo.cocinar('filete');

// mira a aldo quiero que enn su prototipo le añades eso. O sea aldo va a traer las caracteristicas de ese objeto, enn este caso cheff