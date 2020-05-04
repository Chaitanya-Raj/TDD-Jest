import reverse from "./reverse";

test("reverse hello to match olleh", () => {
  expect(reverse("hello")).toMatch("olleh");
});
