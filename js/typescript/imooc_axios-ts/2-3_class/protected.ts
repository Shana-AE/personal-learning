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
