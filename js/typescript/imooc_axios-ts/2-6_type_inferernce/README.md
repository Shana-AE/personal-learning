# Type Inference

- basic
- best common type
- contextual typing

## basic

```typescript
// typescript automatically infer the x to number type.
let x = 3;
```

## best common type

```typescript
let x = [0, 1, null];

class Animal {
  numLegs: number;
}

class Bee extends Animal {

}

class Lion extends Animal {

}

/**
 * if we don't mark the zoo is Animal Array
 * typescript will infer it be the type (Bee | Lion)[]
 * by default
 *
 * */
let zoo: Animal[] = [new Bee(), new Lion()];
```

## contextual typing

```typescript
class Animal {
  numLegs: number;
}

class Bee extends Animal {}

class Lion extends Animal {}

/**
 * typescript use the property type of
 * `window.onmousedown` to infer the
 * related type. `mouseEvent` is inferred
 * to `MouseEvent` type, and it has no
 * `clickTime` property.
 */
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.clickTime);
};

// because we assign `any` type to the `mouseEvent`.
// this time there is no error.
window.onmousedown = function(mouseEvent: any) {
  console.log(mouseEvent.clickTime);
};

/**
 * there has 3 optional return type
 * Animal, Bee, Lion, but the Animal
 * can be chosen by the algorithm
 */
function createZoo(): Animal[] {
  return [new Bee(), new Lion()];
}

```
