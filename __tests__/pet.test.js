const Pet = require("../src/pet");

describe ('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('set the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });

    it('set the name property', () => {
        const parent = new Pet('Rex');
        expect(parent.name).toEqual('Rex');
    });

    it('set the name property', () => {
        const child = new Pet('Amelia');
        expect(child.name).toEqual('Amelia');
    });

    it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });

    it('set the hunger property', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toEqual(0);
    });

    it('set the fitness property', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toEqual(10);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });

    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });

    it('decrements the fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
    });

    it('throw an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });
});

describe('walk', () => {
    it('increments the fitness by 4', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });

    it('increases fitness by to a maximum of 10', () => {
        const pet = new Pet('Fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });

    it('throw an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    it('decrements the hunger by 3', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.feed();
        expect(pet.hunger).toEqual(2);
    });

    it('throw an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    it('when fitness is equal or less than 3 ', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        expect(pet.checkUp()).toBe('I need a walk');
    });

    it('when hunger is equal or more than 5', () => {
        const pet = new Pet('Fido');
        pet.hunger = 7;
        expect(pet.checkUp()).toEqual('I am hungry');
    });

    it('when fitness is equal or less than 3 AND hunger is equal or more than 5', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        pet.hunger = 5;
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });

    it('when fitness does not equal or less than 3 AND hunger does not equal or more than 5', () => {
        const pet = new Pet('Fido');
        pet.fitness != 3;
        pet.hunger != 5;
        expect(pet.checkUp()).toEqual('I feel great');
    });

    it('throw an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.fitness = 0;
        expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
    });
    
});

describe('isAlive', () => {
    it('when age is equal or more than 30,hunger is equal or more than 10 and fitness is equal or less than 0', () => {
        const pet = new Pet('Fido');
        pet.age = 31;
        pet.hunger = 12;
        pet.fitness = -1;
        expect(pet.isAlive).toBe(false);
    });
});

describe('adoptChild', () => {
    it('Rex is Amelia father', () => {
        const parent = new Pet('Rex');
        const child = new Pet('Amelia');
        parent.adoptChild(child);
        expect(parent.children).toContain(child)
    })
})
