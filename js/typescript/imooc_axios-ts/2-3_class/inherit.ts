class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('woof! woof!');
  }
}

const dog = new Dog();
dog.bark()
dog.move(10);