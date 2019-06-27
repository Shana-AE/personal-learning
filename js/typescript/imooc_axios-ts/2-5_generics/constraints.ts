interface Lengthwise {
  length: number;
}

// use the interface to constraint the generic
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// doesn't have the property length. error
loggingIdentity(3);

// okay
loggingIdentity({length: 1});
