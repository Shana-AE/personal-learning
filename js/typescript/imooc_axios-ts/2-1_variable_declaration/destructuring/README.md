# Destructuring assignment

```typescript
let input = [1, 2];
let [first, second] = input;
/*
<=>
let first = input[0];
let second = input[1];
*/
```

```typescript
// without [number, number], it will throw an error
/*
Argument of type 'number[]' is not assignable to parameter of type '[number, number]'.
  Type 'number[]' is missing the following properties from type '[number, number]': 0, 1ts(2345)
*/
let input:[number, number] = [1, 2];
function f([first, second]: [number, number]) {
  console.log(first);
  console.log(second);
}

f(input);
```

```typescript
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4];

let [, second, , fourth] = [1, 2, 3, 4];
console.log(second); // 2
console.log(fourth); // 4
```

```typescript
let o = {
  a: 'foo',
  b: 12,
  c: 'bar',
}

let {a, b} = o;
let {a, ...passthrough} = o;
let total = passthrough.b + passthrough.c.length;
console.log(total); // 15
```

rename

```typescript
// can be confusing in typescript
let {a: newName1, b: newName2} = o;

let {a: newName1, b: newName2}: {a: string, b: number} = o;
```

default value;

```typescript
function keepWholeObject(wholeObject: {a: string, b?: number}) {
  let {a, b = 1001} = wholeObject;
}
```

function declaration

```typescript
type C = { a: string, b?: number };
function f({a, b}: C): void {

}

function f({a, b = 0} = {a: ''}): void {

}

f({a: 'yes'}); // okay {a: 'yes', b: 0}
f(); // {a: ''}
f({}); // error
```
