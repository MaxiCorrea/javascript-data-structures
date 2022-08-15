export class Customer {
  #name;
  #movie;

  constructor(name, movie) {
    this.#name = name;
    this.#movie = movie;
  }

  toString = () => {
    return `${this.#name} ${this.#movie}`;
  };
}
