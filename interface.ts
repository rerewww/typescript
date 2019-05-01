interface Animal {
    name: string;
    age: number;

    getName(): string;
}

interface AnimalConstructor {
    new (name: string, age: number): Animal;
}

class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}

class Cat implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}

function createAnimal(cstr: AnimalConstructor, name: string, age: number) {
    return new cstr(name, age);
}

const dog = createAnimal(Dog, 'dog', 1);
const cat = createAnimal(Cat, 'flowernim', 5);
console.log(dog.getName())
console.log(cat.getName())