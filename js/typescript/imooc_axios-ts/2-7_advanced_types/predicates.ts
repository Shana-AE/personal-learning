interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  class Pet {
    fly() {}
    layEggs() {}
    swim() {}
  }
  return new Pet();
  //
}

let pet = getSmallPet();

/**
 * to avoid the error we meet above, we can use
 * type assertion, but it's too complicated.
 */
if ((pet as Fish).swim) {
  (pet as Fish).swim();
} else if ((pet as Bird).fly) {
  (pet as Bird).fly();
}

/**
 * use the type predicate `pet is Fish` to define
 * a type predicate.
 * `parameterName is Type`
 *
 */
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

/**
 * now use the `isFish` make typescript infer
 * the type of the `pet` is `Fish`, and it can also
 * know the type when it's not `Fish`
 */
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

function isNumber(x: any): x is string {
  return typeof x === 'number';
}

function isString(x: any): x is number {
  return typeof x === 'string';
}

function padLeft(value: string, padding: string | number) {
  if(isNumber(padding)) {
    return Array(padding + 1).join(' ') + value;
  }
  if(isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got ${padding}`);
}
