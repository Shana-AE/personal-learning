# Functions

## Introduction

Functions are the fundamental building block of any application in JavaScript. They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to *do* things. TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.

## Functions

To begin, just as in JavaScript, TypeScript functions can be created both as a named function or as an anonymous function. This allows you to choose the most appropriate approach for your application, whether you’re building a list of functions in an API or a one-off function to hand off to another function.

To quickly recap what these two approaches look like in Javascript:

```typescript
// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y };
```

Just as in JavaScript, functions can refer to variables outside of the function body. When they do so, they’re said to *capture* these variables. While understanding how this works (and the trade-offs when using this technique) is outside of the scope of this article, having a firm understanding how this mechanic works is an important piece of working with JavaScript and TypeScript.

```typescript
let z = 100;

function addToZ(x, y) {
    return x + y + z;
}
```

## Function Types

### Typing the function

Let’s add types to our simple examples from earlier:

```typescript
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y };
```

We can add types to each of the parameters and then to the function itself to add a return type. TypeScript can figure the return type out by looking at the return statements, so we can also optionally leave this off in many cases.

### Writing the function type

Now that we’ve typed the function, let’s write the full type of the function out by looking at each piece of the function type.

```typescript
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { return x + y };
```

A function’s type has the same two parts: the type of the arguments and the return type. When writing out the whole function type, both parts are required. We write out the parameter types just like a parameter list, giving each parameter a name and a type. This name is just to help with readability. We could have instead written:

```typescript
let myAdd: (baseValue: number, increment: number) => number = function(x: number, y:number): number { return x + y }
```

As long as the parameter types line up, it’s considered a valid type for the function, regardless of the names you give the parameters in the function type.

The second part is the return type. We make it clear which is the return type by using a fat arrow (`=>`) between the parameters and the return type. As mentioned before, this is a required part of the function type, so if the function doesn’t return a value, you would use `void` instead of leaving it off.

Of note, only the parameters and the return type make up the function type. Captured variables are not reflected in the type. In effect, captured variables are part of the “hidden state” of any function and do not make up its API.

### Inferring the types

In playing with the example, you may notice that the TypeScript compiler can figure out the type even if you only have types on one side of the equation:

```typescript
// myAdd has the full function type
let myAdd = function(x: number, y: number): number { return x + y; };

// The parameters 'x' and 'y' have the type number

let myAdd: (baseValue: number, increment: number) => number = function(x, y) { return x + y; };
```

This is called “contextual typing”, a form of type inference. This helps cut down on the amount of effort to keep your program typed.

## Optional and Default Parameters


