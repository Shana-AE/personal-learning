interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;

myArray = ['Foo', 'Bar'];

let myStr: string = myArray[0];

class Animal {
  name: string;
}

class Dog extends Animal {
  breed: string;
}

// interface NotOkay {
//   [x: number]: Animal;

//   [x: string]: Dog;
// }

interface Okay {
  [x: number]: Dog;
  [x: string]: Animal;
}

let test1: Okay = {'test1': {name:'test'}, test2: {name:'test'}};
test1[0] = {name:'dog', breed:'small'};

// interface should be an object(not sure)
let test2: Okay = [{name: 'dog', breed: 'dog'}]; 


interface NumberDictionary {
  [index: string]: number;
  length: number;
  // name: string; // error
}

interface ReadonlyStringArray {
  readonly [index: number]: string
}

let myArray1: ReadonlyStringArray = ['foo', 'bar'];
myArray1[2] = 'not-allowed'; // error
