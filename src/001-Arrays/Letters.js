/**
 * Letters Class Implementation
 */
export class Letters {
  #characters;

  constructor() {
    this.#characters = [];
  }

  push = (ch) => {
    this.#characters.push(ch);
  };

  toString = () => {
    return this.#characters.reduce((prev, curr) => {
      return prev + curr;
    });
  };
}
