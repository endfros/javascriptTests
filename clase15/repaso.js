
let fruta = {
    color: 'rojo',
    sabor: 'ácida',
    precio: '75',
    hermana: {
        color: 'verde',
        sabor: 'dulce',
        precio: '40 ',
            hermana: {
                color: 'amarilla',
                sabor: 'dulce',
                precio: '80',
                    hermana: {
                        color: 'naranja',
                        sabor: 'agridulce',
                        precio: '50',
                    },
            },
    },
    meses: ['Julio', 'Agosto', 'Septiembre'] 
};

console.log(fruta.hermana.hermana.hermana.precio);


let temporada = fruta.meses;
console.log(temporada[0]); 
console.log(temporada[1]); 
console.log(temporada[2]); 


    
    let edad = 22;
    if(edad >= 18) {
        console.log('El usuario es mayor de edad.');
    }else {
        console.log('El usuario es menor de edad.')
    }
    
    // let jona = 18;
    // switch(true) {
    //     case 18:
    //     console.log('El usuario es mayor de edad.');
    //     break;
    //     case 25:
    //     console.log('El usuario es un adulto joven.');
    //     break;
    //     default:
    //     console.log('El usuario es menor de edad.');
    // }

   
    let jona = 35;

    while(jona > 20 && jona < 35) {
        console.log('Jona tiene entre 20 y 35 años');
    }

  