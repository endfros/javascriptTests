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