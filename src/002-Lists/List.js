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
   * Removes the element e from the list.
   * @param {} e  Item to remove from the list.
   * @returns  true if the element was removed. or false otherwise.
   */
  remove = (e) => {
    let idx = this.find(e);
    if (idx !== -1) {
      this.#elements.splice(idx, 1);
      this.#size--;
      return true;
    }
    return false;
  };

  /**
   * Insert a new item in the list.
   * @param {*}  e  Item to insert from the list.
   * @param {*} afterE
   * @returns true if the element was inserted. or false otherwise.
   */
  insert = (e, afterE) => {
    let idx = this.find(afterE);
    if (idx !== -1) {
      this.#elements.splice(idx + 1, 0, e);
      this.#size++;
      return true;
    }
    return false;
  };

  /**
   *  Size Of Length of the List ADT
   * @returns size
   */
  size = () => {
    return this.#size;
  };

  /**
   * Clear all elements from de list
   */
  clear = () => {
      this.#elements = [];
      this.#size = 0;
  }

  /**
   *  Returns a string representation of the List .
   * @returns  string representation
   */
  toString = () => {
    return `${this.#elements}`;
  };
}
