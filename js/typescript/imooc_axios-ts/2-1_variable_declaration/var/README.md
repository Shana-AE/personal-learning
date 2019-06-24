# `var`

```typescript
(function() {
  function f() {
    var a = 10;
    return function g() {
      var b = a + 1;
      return b;
    };
  }

  var g = f();
  g(); // 11
  // a is used by g(), so even though f() has finished running,
  // a hasn't released yet.

  function f1(shouldInitialize) {
    if (shouldInitialize) {
      var x = 10;
    }
    return x;
  }

  f1(true); // 10
  f1(false); // undefined; hoist

  function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
      var currentRow = matrix[i];
      for (var i = 0; i < currentRow.length; i++) {
        sum += currentRow[i];
      }
    }
    return sum;
  }
  // error. inner i will overwrite outer i.
  
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  }
  // =>
  // conosle.log i one by one by 100ms
  for (var i = 0; i < 10; i++) {
    (function(i){
      setTimeout(function () {
        console.log(i);
      }, 100 * i);
    })(i)
  }
  // console.log all of i after 100ms
  for (var i = 0; i < 10; i++) {
    (function(i){
      setTimeout(function () {
        console.log(i);
      }, 100);
    })(i)
  }
});
```
