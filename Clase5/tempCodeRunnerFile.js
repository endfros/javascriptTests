let hacerEnsalada = (contenedor, verduras, cuchillo, lavarVerduras, cortarVerduras, mezclarVerduras) => {
    // 1.- contenedor
    // 2.- verduras
    // 3.- cuchillo
    // lavar verduras
    // cortarlas
    // mezclarlas

    // que debo hacer
    let verdurasLimpias = lavarVerduras(verduras);
    let verdurasCortadas = cortarVerduras(cuchillo, verdurasLimpias);
    let ensalada = mezclarVerduras(contenedor, verdurasCortadas);

    return ensalada;
};

let verduras = ['pimienta','lechuga','zanahoria'];

let lavar = (algo) => {
    console.log(`Lavando...${algo}`);
    return 'verduras limpias';
};

let cortar = (cuchillo, algo) => {
    console.log(`Cortando con el ${cuchillo}...${algo}`);
    return 'verduras cortadas';
};

let mezclar = (contenedor, algo) => {
    console.log(`Mezclando dentro del ${contenedor}...${algo}`);
};

hacerEnsalada('tupperware',verduras,'chucky',lavar,cortar,mezclar);