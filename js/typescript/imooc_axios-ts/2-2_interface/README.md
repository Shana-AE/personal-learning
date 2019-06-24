# interface

- interface basic
- optional property
- read-only peroperty
- extra property check
- function type
- indexable type
- class type
- inherit interface
- mixin type
- interface inherited class

## interface basic

duck typing.(structural subtyping, the opposite of nominal typing)

```typescript
function printLabel (labelledObject: {label: string}) {
  console.log(labelledObject.label)
}

let myObj = {size: 10, label: 'Size 10 Object.'}

printLabel(myObj);
```

```typescript
interface LabelledValue {
  label: string;
}

function printLabel (labelledObject: LabelledValue) {
  console.log(labelledObject.label)
}

let myObj = {size: 10, label: 'Size 10 Object.'}

printLabel(myObj);
```

## optional props

```typescript
interface Square {
  color: string;
  area: number;
}

interface SquareConfig {
  color?: string; // ?: optional
  width?: number;
}

function createSquare(config: SquareConfig): Square {
  let newSquare = {
    color: 'white',
    area: 100,
  };
  if (config.color) { // if typo, ts show the error.
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width ** 2;
  }
  return newSquare;
}

let mySquare = createSquare({color: 'black', width: 100});
```

## read-only props

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20};

// p1.x = 5; // error!
```

```typescript
// generic readonly array.

let a:number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// ro[0] = 4; // error!

// ro.push(5) // error!

// ro.length = 100; // error!

// you even cannot assign ro to a
// a = ro; // error!

// can bypass by type assertion.
a = ro as number[];
```

how to decide whether use `const` or `readonly`?

variable -> `const` property -> `readonly`

## Extra property check

in last two example

```typescript
// in the basic
// ...
let myObj = {size: 10, label: 'Size 10 Object.'}
//           --------
// extra props, but no error
printLabel(myObj);

// in the optionalProps.ts
// ...
let mySquare = createSquare({colour: 'black', width: 100});
//                           ~~~~~~~~~~~~~~
// if we mistype 'color', similar to add an additional props like `size` above. ts will throw an error.
```

literal params will be checked like the later one.

solution

```typescript
let mySquare = createSquare({colour: 'black', width: 100} as SquareConfig); // not recommended.
```

```typescript
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // can have any additional props.
}
```

```typescript
let squareOptions = {colour: 'black', width: 100};
let mySquare = createSquare(squareOptions);
```

you'd better not bypass the extra type checking, if you need extra params, you should define it in the interface.

## function type

```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function (source: string, subString: string): boolean {
  let result = source.search(subString);
  return result > -1;
}
```

// `source`, `subString` can be other name. and the type of these params and return type can be omiited.

```typescript
mySearch = function (src, sub) {
  let result = src.search(sub);
  return result > -1;
}
```

## indexable interface

```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;

myArray = ['Foo', 'Bar'];

let myStr: string = myArray[0];
```

There are two types of supported index signatures: `string` and `number`. *It is possible to support both types of indexers, but the type returned from a numeric indexer must be a subtype of the type returned from the string indexer.* This is because when indexing with a `number`, JavaScript will actually convert that to a `string` before indexing into an object. That means that indexing with `100` (a `number`) is the same thing as indexing with `"100"` (a `string`), so the two need to be consistent.

```typescript
class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

interface NotOkay {
  [x: number]: Animal; // error, Numeric index type 'Animal' is not assignable to string index type 'Dog'.

  [x: string]: Dog;
}
```

string index signature is a good way to describe 'dictionary' object.

```typescript
interface NumberDictionary {
  [index: string]: number;
  length: number;
  name: string; // error, conflict with the index signature.
}
```

index signature can also be readonly.

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20};

// p1.x = 5; // error!


// generic readonly array.

let a:number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// ro[0] = 4; // error!

// ro.push(5) // error!

// ro.length = 100; // error!

// you even cannot assign ro to a
// a = ro; // error!

// can bypass by type assertion.
a = ro as number[];
```

## Class Type

```typescript
interface ClockInterface {
  // instance type
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;

  constructor(h: number, m: number) {

  }

  setTime(d: Date) {
    this.currentTime = d;
  }
}


interface ClockConstructor {
  new(hour: number, minute: number)
}

class Clock1 implements ClockConstructor { // error
  // static type.
  constructor(h: number, m: number) {

  }
}
```

### static side of class
