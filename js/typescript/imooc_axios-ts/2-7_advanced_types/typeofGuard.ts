/**
 * use `typeof` to guard the type.
 */
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function isString(x: any): x is string {
  return typeof x === 'string';
}

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got ${padding}`);
}

/**
 * we can simplify the `typeof` usage.
 * `typeof x === 'number'` | `typeof x !== 'number'`
 * we can only use the primitive types to guard the type.
 */
function padLeft1(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got ${padding}`);
}
