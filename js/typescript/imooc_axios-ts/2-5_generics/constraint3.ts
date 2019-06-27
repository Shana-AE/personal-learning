// factory function.
function create<T>(c: {new(): T}): T {
  return new c()
}

class BeeKeeper {
  hasMask: boolean;
}

class LionKeeper {
  nameTag: string;
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: LionKeeper
}

function createInstance<T extends Animal> (c: new() => T): T {
  return new c();
}

// it can infer the class property.
createInstance(Lion).keeper.nameTag;
createInstance(Bee).keeper.hasMask;
