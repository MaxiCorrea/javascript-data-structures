import { Factorial } from "./Factorial";

test("the factorial of 5 is 120", () => {
  expect(Factorial.recursive(5)).toBe(120);
});

test("the factorial of 4 is 24", () => {
  expect(Factorial.recursive(4)).toBe(24);
});

test("the factorial of 10 is 3628800", () => {
  expect(Factorial.recursive(4)).toBe(24);
});

test("the factorial of 5 is 120", () => {
  expect(Factorial.iterative(5)).toBe(120);
});

test("the factorial of 4 is 24", () => {
  expect(Factorial.iterative(4)).toBe(24);
});

test("the factorial of 10 is 3628800", () => {
  expect(Factorial.iterative(4)).toBe(24);
});
