/**
 * by default, `null` and `undefined` can
 * be assigned to any type.
 * 
 * but if we use `tsc index.ts --strictNullChecks`
 * typescript will throw us error.
 */
let s = 'foo';
s = null;
let sn: string | null = 'bar';
sn = null;

sn = undefined;

/**
 * `y?number` is same to `y: number | undefined`
 */
function f(x: number, y?: number) {
  return x + (y || 0);
}

f(1, 2);
f(1);
f(1, undefined);
// this will throw an error when --strictNullChecks used.
f(1, null);

class C {
  a: number;
  b?: number;
}

let c = new C();
c.a = 12;
// this will throw an error when --strictNullChecks used.
c.a = undefined;
c.b = 13;
// this will throw an error when --strictNullChecks used.
c.b = undefined;
c.b = null;
