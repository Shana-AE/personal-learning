/**
 * `string | number` is union type, it means `padding` is
 * either `string` or `number`
 */
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number got ${padding}`);
}

padLeft('Hello world', 4);
