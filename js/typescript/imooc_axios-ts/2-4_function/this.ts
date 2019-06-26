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
