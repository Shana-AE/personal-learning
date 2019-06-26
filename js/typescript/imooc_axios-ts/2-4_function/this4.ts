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