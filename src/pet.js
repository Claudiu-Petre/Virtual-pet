
const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet (name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
    

};

const fido = new Pet('Fido');

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0; 
    }
};

Pet.prototype.growUp = function(){
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    }
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function(){
    this.fitness = 4;
}

Pet.prototype.walk = function(){
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    }
    if((this.fitness + 4) <= 10) {
        this.fitness += 4;
    } else {
        this.fitness = 10;
    }
}

Pet.prototype.feed= function(){
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    }
    this.hunger -= 3;
}

Pet.prototype.checkUp = function(){
    if(!this.isAlive){
        throw new Error('Your pet is no longer alive :(');
    }
    if(this.fitness <= 3 && this.hunger >= 5){
        return 'I am hungry AND I need a walk';
    };
    if(this.fitness <= 3){
        return 'I need a walk';
    };
    if(this.hunger >= 5){
        return 'I am hungry';
    };
    
    if(!(this.fitness <= 3) && !(this.hunger >= 5)){
        return 'I feel great';
    };
    
    }

// having a baby using dependency injection

Pet.prototype.adoptChild = function(child) {
    this.children.push(child);
}

/*parent.adoptChild(child);
parent.children;

parent.children[0].feed();
*/













module.exports = Pet;