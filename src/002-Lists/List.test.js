import { List } from "./List";

describe("List ADT Basic Funtionality", () => {
  test("should initially have a size of 0", () => {
    let list = new List();
    let expected = 0;
    let actual = list.size();
    expect(actual).toBe(expected);
  });

  test("should be able to add a new item", () => {
    let list = new List();
    list.append(10);
    let expected = 1;
    let actual = list.size();
    expect(actual).toBe(expected);
  });

  test("should find the index of an element in the list", () => {
    let list = new List();
    for (let v of [34, 56, 7, 89]) list.append(v);
    let expected = 2;
    let actual = list.find(7);
    expect(actual).toBe(expected);
  });

  test("should return -1 if find for the element is not found in the list", () => {
    let list = new List();
    for (let v of [34, 56, 7, 89]) list.append(v);
    let expected = -1;
    let actual = list.find(70);
    expect(actual).toBe(expected);
  });
  
});
