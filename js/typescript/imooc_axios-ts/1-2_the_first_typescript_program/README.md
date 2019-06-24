# The first typescript program

typescript is the superset of javascript. it add some type check.

## convert ts to js

`tsc ./greeter.ts`

```typescript
function greeter(person: string) {
    return "Hello " + person;
}

let user = [0, 1, 2];

console.log(greeter(user, 1)); // Error!
//                  ~~~~  ~

```

tsc will throw error but compilation would not fail if there is type error in ts file.

## Interface

```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello " + person.firstName + '' + person.lastName;
}

let user = {
    firstName: 'foo',
    lastName: 'bar',
};

console.log(greeter(user));

```

## Class demo

```typescript
class User {
  fullName: string;
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + ' ' + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello " + person.firstName + " " + person.lastName;
}

let user = new User('foo', 'bar');

console.log(greeter(user));
```
