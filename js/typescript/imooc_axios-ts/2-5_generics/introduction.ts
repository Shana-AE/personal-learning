// when we want to get the return value which meets the type of we passed argument. `any` can not achieve this.
function identity(arg: any): any {
  return arg
}

// T is help to catch the user passed type.
function identityGeneric<T>(arg: T): T {
  return arg
}

let output = identityGeneric<string>('myString');

let output1 = identityGeneric('myString');
