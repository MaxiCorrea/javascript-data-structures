import { Stack } from "./Stack";

describe("Stack ADT Basic Funtionality" , ()=> {
    test("when the stack is empty, its size is zero." , ()=> {
        const stack = new Stack();
        const expectedSize = 0;
        expect(stack.size()).toBe(expectedSize);
    });
});