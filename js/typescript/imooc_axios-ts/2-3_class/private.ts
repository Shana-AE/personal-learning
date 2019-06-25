class Animal {
  private name: string

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