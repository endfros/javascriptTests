// classes

// constructor function
function Animal(hasEyes, eyes, heart){
    this.hasEyes = hasEyes;
    this.eyes = eyes;
    this.heart = heart;
    this.eat = (foodType) => {
        console.log(`This cat eats ${foodType}`);
    }
}

const cat = new Animal(true,2,true);
cat.eat('fish');


function Oviparous(egg){
    this.egg = egg;
}

function Viviparous(egg){
    this.egg = egg;
}

//constructor method

class Animal{
    constructor(hasEyes,eyes,heart){
        this.hasEyes = hasEyes;
        this.eyes = eyes;
        this.heart = heart;
    }
    //methods in classes
    eat(food){
        console.log(`This animal eats ${food}`);
    }
}

class Oviparous extends Animal {
    constructor(hasEyes,eyes,heart,egg){
        super(hasEyes,eyes,heart);
        //ALWAYS CALL THIS FUNCTION
        //Calls all the properties from the father
        this.egg = egg;
    }
}



const weirdAnimal = new Oviparous(true,2,true,false);
 
weirdAnimal.eat('mutants');

console.log(weirdAnimal);

const ave = new Oviparous(false,4,true,false);
console.log(ave);

const perro = new Animal(true,2,true,false);
perro.eat('meat');
console.log(perro.heart);

