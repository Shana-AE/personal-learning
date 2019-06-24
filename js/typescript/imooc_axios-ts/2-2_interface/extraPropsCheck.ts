interface Square {
  color: string;
  area: number;
}

interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // can have any additional props.
}

function createSquare1(config: SquareConfig): Square {
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

let mySquare1 = createSquare({color: 'black', width: 100});

// or
let squareOptions = {colour: 'black', width: 100};
let mySquare2 = createSquare(squareOptions);