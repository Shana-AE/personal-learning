# some pieces need to be noted

- Use forEach instead of for-in and for-of

## `&&` and `||` return value

```javascript
// we can understand this by short-circuit evaluation.

// both true
1 && 2 // && return the later one.
1 || 2 // || return the former one.

// former is false
false && 2 // return former one.
false || 2 // return later one.
```
