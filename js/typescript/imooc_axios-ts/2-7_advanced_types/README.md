# Advanced Types

- Intersection Types
- Union Types
- Type Guards
- Nullable Types
- String Literal Types

## Intersection Types

```typescript
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
```

## Union Types

```typescript
/**
 * `string | number` is union type, it means `padding` is
 * either `string` or `number`
 */
function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number got ${padding}`);
}

padLeft('Hello world', 4);

```

```typescript
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  class Pet {
    fly() {}
    layEggs() {}
    swim() {}
  }
  return new Pet();
  //
}

let pet = getSmallPet();
pet.layEggs();
/**
 * error! we can just use the shared property of
 * the union type.
 */
pet.swim();

```

## Type Guards

using type predicates

```typescript
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  class Pet {
    fly() {}
    layEggs() {}
    swim() {}
  }
  return new Pet();
  //
}

let pet = getSmallPet();

/**
 * to avoid the error we meet above, we can use
 * type assertion, but it's too complicated.
 */
if ((pet as Fish).swim) {
  (pet as Fish).swim();
} else if ((pet as Bird).fly) {
  (pet as Bird).fly();
}

/**
 * use the type predicate `pet is Fish` to define
 * a type predicate.
 * `parameterName is Type`
 *
 */
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

/**
 * now use the `isFish` make typescript infer
 * the type of the `pet` is `Fish`, and it can also
 * know the type when it's not `Fish`
 */
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

```

`typeof` type guard

```typescript
/**
 * use `typeof` to guard the type.
 */
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function isString(x: any): x is string {
  return typeof x === 'string';
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got ${padding}`);
}

/**
 * we can simplify the `typeof` usage.
 * `typeof x === 'number'` | `typeof x !== 'number'`
 * we can only use the primitive types to guard the type.
 */
function padLeft1(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got ${padding}`);
}

```

`instanceof` guard

```typescript
/**
 * just like `typeof` guard.
 */
class Bird {
  fly() {
    console.log('bird fly');
  }
  layEggs() {
    console.log('bird lay eggs');
  }
}

class Fish {
  swim() {
    console.log('fish swim');
  }
  layEggs() {
    console.log('fish lay eggs');
  }
}

function getRandomPet(): Fish | Bird {
  return Math.random() > 0.5 ? new Bird() : new Fish();
}

let pet = getRandomPet();

if (pet instanceof Bird) {
  pet.fly();
}

if (pet instanceof Fish) {
  pet.swim();
}

```

## Nullable Types

```typescript
/**
 * by default, `null` and `undefined` can
 * be assigned to any type.
 * 
 * but if we use `tsc index.ts --strictNullChecks`
 * typescript will throw us error.
 */
let s = 'foo';
s = null;
let sn: string | null = 'bar';
sn = null;

sn = undefined;

/**
 * `y?number` is same to `y: number | undefined`
 */
function f(x: number, y?: number) {
  return x + (y || 0);
}

f(1, 2);
f(1);
f(1, undefined);
// this will throw an error when --strictNullChecks used.
f(1, null);

class C {
  a: number;
  b?: number;
}

let c = new C();
c.a = 12;
// this will throw an error when --strictNullChecks used.
c.a = undefined;
c.b = 13;
// this will throw an error when --strictNullChecks used.
c.b = undefined;
c.b = null;

```

```typescript
/**
 * we can use this to type guard the `null`
 */
function f(sn: string | null): string {
  if (sn === null) {
    return 'default';
  } else {
    return sn;
  }
}

// this is simpler.
function f2(sn: string | null): string {
  return sn || 'default';
}

function broken(name: string | null): string {
  // compiler can not know that name is not `null`
  function postfix(epithet: string) {
    return name.charAt(0) + '. the' + epithet; // error, 'name' is possibly null
  }

  name = name || 'Bob';
  return postfix(name);
}

// so we give it a `!` signature to remove `null` and `undefined` from the type of `identifier`
function broken1(name: string | null): string {
  // compiler can not know that name is not `null`
  function postfix(epithet: string) {
    return name!.charAt(0) + '. the' + epithet;
  }

  name = name || 'Bob';
  return postfix(name);
}

```

## String Literal Types

```typescript
// string literal type.
type Easing = 'ease- in' | 'ease-out' | 'ease-in-out';

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease- in') {
      // ...
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    } else {
      // actually this is useless.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, 'ease- in');
/**
 * we can't pass `'uneasy'` to the params
 * because it's not in the `Easing`.
 */
button.animate(0, 0, 'uneasy');

```
