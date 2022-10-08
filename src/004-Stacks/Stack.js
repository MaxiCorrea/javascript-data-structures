/**
 * Implementation Of Stack ADT Object
 */
export class Stack {
  #size;

  constructor() {
    this.#size = 0;
  }

  size = () => {
    return this.#size;
  };
}
