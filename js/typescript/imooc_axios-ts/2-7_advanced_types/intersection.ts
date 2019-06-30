function extend<T, U>(first: T, second: U): T & U {
  let result = {} as T & U;
  for (let id in first) {
    (result as T)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (result as U)[id] = second[id] as any;
    }
  }
  return result;
}

class Person {
  constructor(public name:string) {

  }
}

interface Loggable {
  log(): void;
}

class ConsoleLogger implements Loggable {
  log() {

  }
}

let jim = extend(new Person('jim'), new ConsoleLogger());
// jim has both the Person's property `name`
// and ConsoleLogger's method `log()`
jim.name
jim.log()