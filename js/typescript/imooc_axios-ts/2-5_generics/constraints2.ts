/**
 * `K extends key of T` means
 * `K` should be the key of the `T`
 * then we can constraint `key` should 
 * be in the `obj`.
 * 
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4};

// okay, 'a' is one of the x's keys
getProperty(x, 'a');
// error, 'm' does not belong to x
getProperty(x, 'm');
