import {
  capitalize,
  reverseString,
  calculator,
  cipher,
  analyze,
} from "./index";

test("capitalize hello to match Hello", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

test("reverse hello to match olleh", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("add 1+2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract 1-2 to equal -1", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("divide 1/2 to equal 0.5", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});

test("multiply 1*2 to equal 2", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("analyze an array [3,5,1,7]", () => {
  expect(analyze([3, 5, 1, 7])).toEqual({
    average: 4,
    max: 7,
    min: 1,
    length: 4,
  });
});

test("it ciphers 1", () => {
  expect(cipher("abc", 1)).toBe("bcd");
});

test("it ciphers 5", () => {
  expect(cipher("abc", 5)).toBe("fgh");
});

test("keeps case", () => {
  expect(cipher("AbC", 1)).toBe("BcD");
});

test("wraps around", () => {
  expect(cipher("xyz", 1)).toBe("yza");
});

test("ignores punctuation", () => {
  expect(cipher("Hello!", 1)).toBe("Ifmmp!");
});
