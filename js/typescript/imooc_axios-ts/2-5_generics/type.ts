function identity<T>(arg: T): T {
  return arg;
}

// generic type
let myIdentity: <T>(arg: T) => T

// we can write generic type as object literal type.
let myIdentity1: { <T>(arg: T): T }

interface GenericIdentityFn {
  <T>(arg: T): T
}

// generic interface
let myIdentity2: GenericIdentityFn

// we can also move the param to be the interface param.  then we can use the `T` in other properties in the interface.
interface GenericIdentityFn1<T> {
  (arg: T): T
  another: T
}

let myIdentity3: GenericIdentityFn1<number>