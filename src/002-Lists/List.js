/**
 * Implementation Of List ADT Object
 */
export class List {
  #elements;
  #size;

  constructor() {
    this.#elements = [];
    this.#size = 0;
  }

  /**
   *  Add new element to List ADT
   * @param {} e item to append to the list.
   */
  append = (e) => {
    this.#elements[this.#size++] = e;
  };

  /**
   *  Return index of element in the list
   * @param {*} e item to find for in the list.
   * @returns idx of element in the list or -1 if not found .
   */
  find = (e) => {
    for (let idx = 0; idx < this.#elements.length; ++idx)
      if (this.#elements[idx] == e) return idx;
    return -1;
  };

  /**
   *  Size Of Length of the List ADT
   * @returns size
   */
  size = () => {
    return this.#size;
  };
}
