import cipher from "./cipher";

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
