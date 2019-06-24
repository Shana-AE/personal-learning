# Spread Symbol

## array spread

```typescript
let first = [1, 2];
let second = [3, 4];

let bothPlus = [0, ...first, ...second];

console.log(bothPlus);
```

Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays as the following example shows (it's the same with `Object.assign()` and spread syntax).

```javascript
var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Now array a is affected as well: [[], [2], [3]]
```

## object spread

```typescript
let defaults = {
  food: 'spicy',
  price: '$10',
  ambniance: 'noisy',
}

let search = {...defaults, food: 'rich'}; // later one overwrite former one.

console.log(search);

/*
{
  food: 'rich',
  ...
}
*/
```
