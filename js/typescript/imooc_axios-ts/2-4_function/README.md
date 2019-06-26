# function

- basic demo
- function type
- optional & default params
- rest params
- this
- overloads(重载)

## basic demo

```typescript
function add(x, y) {
  return x + y;
}

// anonymous function.
let myAdd = function(x, y) {
  return x + y;
}

let z = 100;

function addToZ(x,y) {
  return x + y + z;
}
```

## function type

```typescript
function add(x: number, y: number): number {
  return x + y;
}


// full version
let myAdd:(baseValue: number, increment: number) => number = function (x: number, y:number): number {
  return x + y;
}

// this is okay;
let myAdd1: (baseValue: number, increment: number) => number = function(x, y) {
  return x + y;
}

let myAdd11: (baseValue: number, increment: number) => number;

myAdd11 = function(x , y) {
  return x + y;
}

// this is also okay;
let myAdd2 = function (x: number, y:number): number {
  return x + y;
}
```

## optional & default params

optional params

```typescript
// ? means the param is optional, but it or they should show up at the end of the params.
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + "" + lastName;
  } else {
    return firstName;
  }
}

// would error if there were not optional param.
let result1 = buildName("Bob");
// error, too much params.
let result2 = buildName("Bob", "Adams", "Sr.");
let result3 = buildName("Bob", "Adams");

```

default params

```typescript
function buildName(firstName: string, lastName = 'Smith'): string {
    return firstName + ' ' +lastName;
}

// Bob Smith, same as buildName('Bob', undefined);
let result1 = buildName('Bob');

function buildName1(firstName = 'Will', lastName: string): string {
  return firstName + ' ' + lastName;
}

// error, we must pass a param to the lastName; but 'Bob' is the first name;
let result11 = buildName1('Bob');
// we can pass the undefined to use the default firstName;
let result2 = buildName1(undefined, 'Adams');
```

## rest params

```typescript
function buildName(firstName: string, lastName: string, ...restOfName: string[]): string {
  return firstName + ' ' + lastName + '' + restOfName[0];
}

let result1 = buildName('Bob', 'Adams', 'Sr.');

function buildName1(firstName, ...restName) {
  return firstName + ' ' + restName;
}

let buildNameFn: (firstName: string, ... restName: string[]) => string = buildName1;

let result2 = buildName1('Bob', 'Adams', 'Sr.');
```

## `this`

```typescript
let deck = {
  suits: ['heart', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    return function () {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();


// error
/**
 * suit: this.suits[pickedSuit],
 * ^
 * TypeError: Cannot read property '1' of undefined
 *
 * this point to the global
 *
 *  */
console.log('card: ' + pickedCard.card + ' of' + pickedCard.suit);

```

arrow function can solve the this problem caused by environment change.

```typescript
let deck = {
  suits: ['heart', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();


// okay
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

```

but in the typescript, this is `any`, so we should explicitly declare the this type.

```typescript
// this cannot be used inside the function.
function (this: void) {

}

```

```typescript
interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ['heart', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();


// okay
console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
```

`this` in `callback`

```typescript
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
  type: string;

  onClickBad(this: Handler, e: Event) {
    this.type = e.type;
  }
  onClickBad1(this: void, e: Event) {
    this.type = e.type;
  }
  // we can use arrow function to meet the void declaration and meanwhile use `this`
  onClickOkay = (e: Event) => {
    this.type = e.type;
  }
}

let h = new Handler();

let uiElement: UIElement = {
  addClickListener() {

  }
}

/**
 * error!
 * `this` of `h` is `Handler`,
 * but the `this` of `addCLickListener` function param is `void`.
 */
uiElement.addClickListener(h.onClickBad);
```

## overloads

```typescript
let suits = ['heart', 'spades', 'clubs', 'diamonds'];

function pickCard(x): any {
  if (Array.isArray(x)) {
    let pickCard = Math.floor(Math.random() * x.length);
    return pickCard;
  } else if (typeof x === 'number') {
    let pickSuit = Math.floor(x / 13);
    return { suit: suits[pickSuit], card: x % 13};
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2},
  { suit: 'spades', card: 10},
  { suit: 'hearts', card: 4},
]

let pickCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickCard1.card + ' of ' + pickCard1.suit);

let pickCard2 = pickCard(15);
console.log('card: ' + pickCard2.card + ' of ' + pickCard2.suit);

// typescript said okay, but the param is not checked.
pickCard('s');

```

```typescript
let suits = ['heart', 'spades', 'clubs', 'diamonds'];

// overload, the commoner should be at the former.
function pickCard(x: {suit: string; card: number} []): number
function pickCard(x: number): {suit: string; card: number};

function pickCard(x): any {
  if (Array.isArray(x)) {
    let pickCard = Math.floor(Math.random() * x.length);
    return pickCard;
  } else if (typeof x === 'number') {
    let pickSuit = Math.floor(x / 13);
    return { suit: suits[pickSuit], card: x % 13};
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2},
  { suit: 'spades', card: 10},
  { suit: 'hearts', card: 4},
]

let pickCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickCard1.card + ' of ' + pickCard1.suit);

let pickCard2 = pickCard(15);
console.log('card: ' + pickCard2.card + ' of ' + pickCard2.suit);

// this time the error get its deserved.
pickCard('s');

```
