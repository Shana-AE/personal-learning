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