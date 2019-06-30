// string literal type.
type Easing = 'ease- in' | 'ease-out' | 'ease-in-out';

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === 'ease- in') {
      // ...
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    } else {
      // actually this is useless.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, 'ease- in');
/**
 * we can't pass `'uneasy'` to the params
 * because it's not in the `Easing`.
 */
button.animate(0, 0, 'uneasy');
