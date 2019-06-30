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
pet.layEggs();
/**
 * we can just use the shared property of
 * the union type.
 */
pet.swim();
