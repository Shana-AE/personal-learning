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