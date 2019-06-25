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