function arrayPreviousLess(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      result.push(nums[i - 1]);
    } else {
      result.push(-1);
    }
  }
  return result;
}

/**
 * Test Suite
 */
describe("arrayPreviousLess()", () => {
  it("shift previous postions from the left to a smaller value or store -1", () => {
    // arrange
    const nums = [3, 5, 2, 4, 5];

    // act
    const result = arrayPreviousLess(nums);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([-1, 3, -1, 2, 4]);
  });
});
