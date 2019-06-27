function identity<T>(arg: T): T {
  return arg;
}

function loggingIdentity<T>(arg: T): T {
  // `arg` may not have the property 'length'
  console.log(arg.length);
  return arg;
}

// `T` like a variable, you can use it to make a array
function loggingIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}