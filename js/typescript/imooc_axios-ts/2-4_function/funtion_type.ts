function add(x: number, y: number): number {
  return x + y;
}


// full version
let myAdd:(baseValue: number, increment: number) => number = function (x: number, y:number): number {
  return x + y;
}

// this is okay;
let myAdd1: (baseValue: number, increment: number) => number = function(x, y) {
  return x + y;
}

let myAdd11: (baseValue: number, increment: number) => number;

myAdd11 = function(x , y) {
  return x + y;
}

// this is also okay;
let myAdd2 = function (x: number, y:number): number {
  return x + y;
}