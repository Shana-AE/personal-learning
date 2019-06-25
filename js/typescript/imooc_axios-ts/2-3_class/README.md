# Class

- basic demo
- inherit
- `public`, `private`, `protected` modifier
- `readonly`
- accessor
- static properties
- abstract class
- advanced techniques

## basic demo

```typescript
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('world');
greeter.greet();

```

## inherit

```typescript
class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('woof! woof!');
  }
}

const dog = new Dog();
dog.bark()
dog.move(10);
```

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance:number = 5) {
    console.log('Slithering...');
    super.move(distance);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance: number = 45) {
    console.log('Galloping...');
    super.move(distance);
  }
}

let sam: Snake = new Snake('Sammy');
let tom: Animal = new Horse('Tommy');

sam.move();
tom.move(34);
```

## `public`, `private`, `protected`

```typescript
class Animal {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }
  
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }
}

// Property 'name' is private and only accessible within class 'Animal'
// new Animal('cat').name;

class Rhino extends Animal {
  constructor() {
    super('Rhino');
  }
}

class Employee {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }
  
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }
}

let animal = new Animal('Goat')
let rhino = new Rhino();
let employee = new Employee('Bob');

animal = rhino;

// Type 'Employee' is not assignable to type 'Animal'.
// Types have separate declarations of a private property 'name'.
animal = employee;
```

## protected

class Person {
  protected name: string;

  protected constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`
  }
}

let howard = new Employee('Howard', 'Sales');

console.log(howard.getElevatorPitch());
// child class can access the property, but outside the class, we can't
// console.log(howard.name);

// Constructor of class 'Person' is protected and only accessible within the class declaration.
let john = new Person('John');

## `readonly` modifier

```typescript
class Person {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let john = new Person('john');
// you can read it, but can't modify it.
const a = john.name;
john.name = '1';
```

you can also write like below

```typescript
class Person {
  constructor(readonly name: string) {

  }
}

let john = new Person('john');
console.log(john.name);

```
