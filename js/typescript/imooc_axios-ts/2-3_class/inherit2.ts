class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance:number = 5) {
    console.log('Slithering...');
    super.move(distance);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance: number = 45) {
    console.log('Galloping...');
    super.move(distance);
  }
}

let sam: Snake = new Snake('Sammy');
let tom: Animal = new Horse('Tommy');

sam.move();
tom.move(34);