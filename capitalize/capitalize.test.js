import capitalize from "./capitalize";

test("capitalize hello to match Hello", () => {
  expect(capitalize("hello")).toMatch("Hello");
});
