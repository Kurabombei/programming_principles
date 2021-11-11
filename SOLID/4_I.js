// Interface Segregation Principle


/**
 *  I in SOLID means:
 *  ENG: "Many client-specific interfaces are better than one general-purpose interface."
 *
 *  UA: Багато спеціалізованих інтерфейсів краще за один універсальний.
 *  Інтерфейс може бути поділений на спеціалізовані ще на стадії проектування,
 *  заради майбутньої гнучкості програмних компонентів.
 *  **/


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     walk() {
//         console.log(`${this.name} does some top top top top...`);
//     }
//     swim() {
//         console.log(`${this.name} does some plub plub plub...`);
//     }
//     fly() {
//         console.log(`${this.name} does some paw paw paw...`);
//     }
// }
//
// class Dog extends Animal {
//     fly(){
//         return null;
//     }
// }
//
// class Eagle extends Animal {
//     swim(){
//         return null;
//     }
// }
//
// class Whale extends Animal {
//     walk(){
//         return null;
//     }
//     fly(){
//         return null;
//     }
// }
//
// const dog = new Dog('Rex');
//
// dog.walk();
// dog.swim();
// dog.fly(); // shouldn't fly
//
// const eagle = new Eagle('Sokol');
//
// eagle.walk();
// eagle.swim(); // shouldn't swim
// eagle.fly();
//
// const whale = new Whale('Reeba');
//
// whale.walk(); // shouldn't walk
// whale.swim(); // shouldn't swim
// whale.fly();

class Animal {
    constructor(name) {
        this.name = name;
    }
}

const walker = {
    walk() {
        console.log(`${this.name} does some top top top top...`);
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} does some plub plub plub...`);
    }
}

const flier = {
    fly() {
        console.log(`${this.name} does some paw paw paw...`);
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer);
Object.assign(Eagle.prototype, walker, flier);
Object.assign(Whale.prototype, swimmer);


const dog = new Dog('Rex');
dog.walk();
dog.swim();
// dog.fly(); // shouldn't fly throws error, correct way

const eagle = new Eagle('Sokol');
eagle.walk();
// eagle.swim(); // shouldn't swim throws error, that is the way
eagle.fly();

const whale = new Whale('Reeba');
// whale.walk(); // shouldn't walk  throws error, correct way
// whale.fly(); // shouldn't fly  throws error, correct way
whale.swim();
