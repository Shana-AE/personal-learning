function buildName(firstName: string, lastName = 'Smith'): string {
    return firstName + ' ' +lastName;
}

// Bob Smith, same as buildName('Bob', undefined);
let result1 = buildName('Bob');

function buildName1(firstName = 'Will', lastName: string): string {
  return firstName + ' ' + lastName;
}

// error, we must pass a param to the lastName; but 'Bob' is the first name;
let result11 = buildName1('Bob');
// we can pass the undefined to use the default firstName;
let result2 = buildName1(undefined, 'Adams');
