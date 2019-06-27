# Generics

- introduction
- generic type variable
- generic types
- generic classes
- generic constraints

## introduction

```typescript
// when we want to get the return value which meets the type of we passed argument. `any` can not achieve this.
function identity(arg: any): any {
  return arg
}

// T is help to catch the user passed type.
function identityGeneric<T>(arg: T): T {
  return arg
}

let output = identityGeneric<string>('myString');

let output1 = identityGeneric('myString');
```

## generic type variable

```typescript
function identity<T>(arg: T): T {
  return arg;
}

function loggingIdentity<T>(arg: T): T {
  // `arg` may not have the property 'length'
  console.log(arg.length);
  return arg;
}

// `T` like a variable, you can use it to make a array
function loggingIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}
```

## generic type

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// generic type
let myIdentity: <T>(arg: T) => T

// we can write generic type as object literal type.
let myIdentity1: { <T>(arg: T): T }

interface GenericIdentityFn {
  <T>(arg: T): T
}

// generic interface
let myIdentity2: GenericIdentityFn

// we can also move the param to be the interface param.  then we can use the `T` in other properties in the interface.
interface GenericIdentityFn1<T> {
  (arg: T): T
  another: T
}

let myIdentity3: GenericIdentityFn1<number>
```

## generic classes

```typescript
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
  // static property cannot use the class type parameter.
  static x: T
}

let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
}

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = '';
stringNumeric.add = function (x, y) {
  return x + y;
}

console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'));
```

## generic constraints

```typescript
interface Lengthwise {
  length: number;
}

// use the interface to constraint the generic
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// doesn't have the property length. error
loggingIdentity(3);

// okay
loggingIdentity({length: 1});

```

```typescript
/**
 * `K extends key of T` means
 * `K` should be the key of the `T`
 * then we can constraint `key` should 
 * be in the `obj`.
 * 
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4};

// okay, 'a' is one of the x's keys
getProperty(x, 'a');
// error, 'm' does not belong to x
getProperty(x, 'm');

```

factory function

```typescript
// factory function.
function create<T>(c: {new(): T}): T {
  return new c()
}

class BeeKeeper {
  hasMask: boolean;
}

class LionKeeper {
  nameTag: string;
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: LionKeeper
}

function createInstance<T extends Animal> (c: new() => T): T {
  return new c();
}

// it can infer the class property.
createInstance(Lion).keeper.nameTag;
createInstance(Bee).keeper.hasMask;
```
