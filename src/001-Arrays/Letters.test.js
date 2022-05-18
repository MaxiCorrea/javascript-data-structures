import { Letters } from "./Letters";

test("Letters Testing basic functionality", () => {
  let letters = new Letters();
  letters.push("a");
  letters.push("b");
  letters.push("c");
  let expected = "abc";
  let actual = letters.toString();
  expect(actual).toEqual(expected);
});
