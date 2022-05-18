/**
 *  Factorial class implementation
 */
export class Factorial {
  /**
   *  Implementation factorial iterative
   * @param {*} num
   * @returns factorial of num
   */
  static iterative = (num) => {
    let result = 1;
    for (let value = num; value > 1; --value) result *= value;
    return result;
  };

  /**
   *  Implementation factorial recursive
   * @param {*} num
   * @returns factorial of num
   */
  static recursive = (num) => {
    return num === 0 ? 1 : num * Factorial.recursive(num - 1);
  };
}
