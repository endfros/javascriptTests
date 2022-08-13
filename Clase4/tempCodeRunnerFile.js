function saludarDos(prefijo, nombre){
    console.log(`Hola ${prefijo} ${nombre}`);
    console.log(arguments);
    for(const argument of arguments){
        console.log(argument);
    }
}

saludarDos('Sr.', 'Rodrigo');