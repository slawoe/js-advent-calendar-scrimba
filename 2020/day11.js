function avoidObstacles(nums) {
  const sortArr = nums.sort();
  for (let i = 2; Math.max(...nums); i++) {
    if (sortArr.every((num) => num % i !== 0)) return i;
  }
}

/**
 * Test Suite
 */
describe("avoidObstacles()", () => {
  it("returns minimal number of jumps in between numbers", () => {
    // arrange
    const nums = [5, 3, 6, 7, 9];

    // act
    const result = avoidObstacles(nums);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(4);
  });
});
