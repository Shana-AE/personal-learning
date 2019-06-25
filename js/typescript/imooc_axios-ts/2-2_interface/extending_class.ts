class Control {
  private state: any
}

interface SelectableControl extends Control {
  select()
}

class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

// error! because the ImageC doesn't has the private state.
// Property 'state' is missing in type 'ImageC' but required in type 'SelectableControl'.
class ImageC implements SelectableControl {
  select() {}
}