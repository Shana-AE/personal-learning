interface ClockInterface {
  tick();
}

interface ClockConstructor {  // static side.
  // input hour and minute, then return an object 'x', x.tick();
  new(hour: number, minute: number): ClockInterface;
}


// 2. let digital = createClock(DigitalClock, 12, 17); check DigitalClock with ClockConstructor , hour, minutes pass.
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute) // there make the ctor become instance ?
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {

  }
  tick() {
    console.log('beep beep');
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {

  }
  tick() {
    console.log('tick tock');
  }
}

// 1.check whether Digital Clock meets the type of ClockConstructor
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 10, 20);