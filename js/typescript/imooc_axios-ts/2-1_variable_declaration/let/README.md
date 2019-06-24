# `let`

## block scope

```typescript
function f(input: boolean) {
  let a = 100;

  if (input) {
    let b = a + 1;
    return b;
  }
  return b; // Error!
}
```

try-catch

```typescript
try {
  throw 'Oh no'
} catch (e) {
  console.log('catch it');
}

console.log(e); // Error!
```

```typescript
a++ // Error! temporal dead zone.
let a = 1;
```

`tsc xxx.ts --target es2015`

```typescript
function foo() {
  return a;
}

foo(); // Error! a is not defined

let a;
```

```typescript
// no error
function f(x) {
  var x;
  var x;
  if (true) {
    var x;
  }
}

// error
let x = 10;
let x = 20;
// error
function f(x){
  let x;
}

// no error
function f(condition, x) {
  if (confition) {
    let x = 100;
    return x
  }
  return x
}

f(false, 0);
```

```typescript
// okay but not clear.
function sumMatrix(matrix: number[][]) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i];
    for (let i = 0; i < currentRow.length; i++) {
      sum += currentRow[i];
    }
  }
  return sum
}
```

```typescript
// okay
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)
  }, 100 * i);
}
```
