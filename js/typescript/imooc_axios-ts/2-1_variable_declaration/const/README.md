# `const`

same as `let`, but immutable while its value property can be changed.

```typescript
const numLivesForCat = 9;
const kitty = {
  name: 'kitty',
  numLives: numLivesForCat,
}
// error
kitty = {
  name: 'Tommy',
  ...
}

// okay
kitty.name = 'tom';
kitty.numLives --;
```
