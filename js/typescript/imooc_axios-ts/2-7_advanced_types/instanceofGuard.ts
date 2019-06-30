/**
 * just like `typeof` guard.
 */
class Bird {
  fly() {
    console.log('bird fly');
  }
  layEggs() {
    console.log('bird lay eggs');
  }
}

class Fish {
  swim() {
    console.log('fish swim');
  }
  layEggs() {
    console.log('fish lay eggs');
  }
}

function getRandomPet(): Fish | Bird {
  return Math.random() > 0.5 ? new Bird() : new Fish();
}

let pet = getRandomPet();

if (pet instanceof Bird) {
  pet.fly();
}

if (pet instanceof Fish) {
  pet.swim();
}
