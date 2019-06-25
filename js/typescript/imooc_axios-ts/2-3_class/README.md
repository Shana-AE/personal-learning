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

## accessor

```typescript
let passCode = 'secret1 pass code';

class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if(passCode && passCode == 'secret pass code') {
      this._fullName =newName;
    } else {
      console.log('Error: Unauthorized update of employee!!')
    }
  }
}

let employee = new Employee();
employee.fullName = 'Bob Smith';
if (employee.fullName) {
  console.log(employee.fullName);
}

```

typescript convert to es3 by default, so we should use `tsc accessor.ts --target es5` to convert to es5.

## static properties

```typescript
class Grid {
  static origin = {x: 0, y: 0};

  scale: number;

  constructor(scale: number) {
    this.scale = scale;
  }

  calculateDistanceFromOrigin(point: {x: number; y: number}) {
    // you can use Grid.origin.x since it's static
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
  }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x:3, y: 4}));

console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}));
```

## abstract

```typescript
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earth...');
  }
}

```

```typescript
abstract class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printName(): void {
    console.log('Department name ' + this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing');
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }

  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}

let department: Department;
// error, we cannot directly use the abstract class.
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
// error, we cannot use this method because the abstract class doesn't have the method.
// department.generateReports();
```

## advanced technology

```typescript
class Greeter {
  static standardGreeting = 'Hello, there';

  greeting: string;

  constructor(message?: string) {
    this.greeting = message;
  }

  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter: Greeter;
greeter = new Greeter('world');
let greeter1: Greeter = new Greeter();
console.log(greeter.greet());
console.log(greeter1.greet());
// typeof make the greetMaker become the Greeter type, and it can overwrite the static property.
let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = 'Hey there';

let greeter2: Greeter = new greeterMaker();
let greeter3: Greeter = new Greeter();
console.log(greeter2.greet());
console.log(greeter2.greet());
```

we can also use class as interface, but not recommended.

```typescript
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```
