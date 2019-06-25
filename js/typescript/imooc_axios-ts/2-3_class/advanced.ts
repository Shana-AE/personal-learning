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