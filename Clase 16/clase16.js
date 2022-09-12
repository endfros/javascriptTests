let pencil = {
    size: 'small',
    shape: 'hexagonal',
    color: 'yellow',
    write : (text) => {
        return `I used my pencil to write the text ${text}`
    }
}

console.log(pencil.color)

console.log(pencil.write('Rodri'))

function Dinosaur(specie,color,legs,horns,size){
    this.specie = specie,
    this.color = color,
    this.legs = legs,
    this.horns = horns, 
    this.size = size
    this.roar = (text) => {
        return `ROARRRRRR I'M A ${text}` 
    }
}

let triceratops = new Dinosaur('triceratops','purple',4,2,'big');

console.log(triceratops.roar('Triceratops'));

console.log(triceratops);

console.log(123+'456')