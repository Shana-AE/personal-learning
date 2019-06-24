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