function buildName(firstName: string, lastName: string, ...restOfName: string[]): string {
  return firstName + ' ' + lastName + '' + restOfName[0];
}

let result1 = buildName('Bob', 'Adams', 'Sr.');

function buildName1(firstName, ...restName) {
  return firstName + ' ' + restName;
}

let buildNameFn: (firstName: string, ... restName: string[]) => string = buildName1;

let result2 = buildName1('Bob', 'Adams', 'Sr.');