import { Customer } from "./Customer";

describe("The Customer class features", () => {
  test("Should print name & movie attributes", () => {
    let customer = new Customer("Maxi", "Fight Club");
    expect(customer.toString()).toBe("Maxi Fight Club");
  });
});
