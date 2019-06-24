interface ClockInterface {
  // instance type
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;

  constructor(h: number, m: number) {

  }

  setTime(d: Date) {
    this.currentTime = d;
  }
}


interface ClockConstructor {
  new(hour: number, minute: number)
}

class Clock1 implements ClockConstructor {
  // static type.
  constructor(h: number, m: number) {

  }
}
