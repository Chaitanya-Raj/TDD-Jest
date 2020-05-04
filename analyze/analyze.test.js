import analyze from "./analyze";

test("analyze an array [3,5,1,7]", () => {
  expect(analyze([3, 5, 1, 7])).toEqual({
    average: 4,
    max: 7,
    min: 1,
    length: 4,
  });
});
