// boolean
{
  let isDone: boolean = true;
}

// number

{
  let decLiteral: number = 20;
  let hexLiteral: number = 0x14;
  let binLiteral: number = 0b10100;
  let octalLiteral: number = 0o24;
}

// string
{
  let name1: string = "foo";
  // template string
  let age: number = 18;
  let sentence: string = `hello, my name is ${name1}. 


I'll be ${age} years old next month.
`;
}

// Array
{
  let list1: number[] = [1, 2, "3"]; // Error!
  // let list1: number[] = [1, 2, 3];

  // use Generic
  let list2: Array<number> = [1, 2, "3"]; // Error!
  // let list2: Array<number> = [1, 2, 3];
}
// Tuple
{
  let x: [string, number];
  x = [10, 'hello']; // Error!
  x = ["hello", 10];
  console.log(x[0].substring(1));
  console.log(x[1].substring(1)); // Error!
  x[2] = 1; // Error! this is different from the lesson.
  // in the lesson, x[2] = 1 is ok. since it's the one of the string and number.
  // since version 3.1 this is an error.
}

// Enum
{
  enum Color {
    Red = 1, // 1 can be assign manually.
    Green, // 2
    Blue,  // 3
    // increase by 1 by default.
  }
  let c: Color = Color.Blue;
  let colorName: string = Color[2];
  
  console.log(colorName); // Green
}

// any
{
  let notSure: any = 4;
  notSure = 'maybe a string, too.';
  notSure = false;

  // combine with array
  let list: any[] = [1, true, 'any'];
  list[1] = 100;
}

// void
{
  function warnUser(): void {
    console.log('this is a warn');
  }
  
  let unusable: void = null; // only undefined and null is ok.
}

// undefined & null
{
  let u: undefined = undefined;
  u = null;
  let n: null = null;
  n = undefined;
}

// never 
// used when there throws an error. 
// or infinite loop.
// even any can't assign to never
{
  function error(message: string): never {
    throw new Error(message)
  }
  function fail() {
    return error('something failed');
  }

  function infiniteLoop(): never {
    while(true) {

    }
  }
}

// object
// Object.create
{
  // declare should be placed at the top of the file.
  declare function create(o:object | null): void;
  
  create({prop: 0});
  create(null);

  create(42); // error
  create('string'); // error
  create(false); // error
  create(undefined);
}

// type assertion
{
  let someValue: any = 'this is a string';
  let stringLength: number = (<string>someValue).length;
  let strLength: number = (someValue as string).length;
}
