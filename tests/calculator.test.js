const {
  add,
  subtract,
  divide
} = require("../src/calculator");

describe("Calculator unit tests", () => {
  test("adds two numbers", () => {
    expect(add(4, 3)).toBe(7);
  });

  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("divides two numbers", () => {
    expect(divide(12, 3)).toBe(4);
  });

  test("prevents division by zero", () => {
    expect(() => divide(10, 0)).toThrow(
      "Cannot divide by zero"
    );
  });
});