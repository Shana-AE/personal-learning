interface Counter {
  (star: number): string;

  interval: number;

  reset(): void;
}

function getCounter(star: number): Counter {
  let counter = (function (star: number) {

  }) as Counter;

  counter.interval = 123;

  counter.reset = function () {

  }
  // comment this to see the error
  return counter;
  // uncomment these code to see the error
  // let a = (function (star: number) {
  //   return '123';
  // });
  // a.interval = 123;
  // a.reset = function(){  }
  
  // return a;


  // uncomment these code to see the error.
  let a = {
    function(star: number) {
      return '123'
    },
    interval: 123,
    reset() {},
  }
  return a;
}

let c = getCounter(1);
c(10);
c.reset();
c.interval = 5;
