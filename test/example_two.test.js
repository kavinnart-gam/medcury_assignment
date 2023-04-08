const _sum = require("../app/example_two");
describe("test interestingTime function", () => {
  test("15:15:00 to 15:15:12 should be return 1", () => {
    expect(_sum.interestingTime("15:15:00", "15:15:12")).toBe(1);
  });

  test("22:22:21 to 22:22:23 should be return 3", () => {
    expect(_sum.interestingTime("22:22:21", "22:22:23")).toBe(3);
  });

});
