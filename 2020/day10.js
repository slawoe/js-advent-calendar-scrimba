function adjacentElementsProduct(nums) {
  const lengthOfNums = nums.length;
  const arrayOfProducts = [];
  for (let i = 0; i < lengthOfNums - 1; i++) {
    arrayOfProducts.push(nums[0] * nums[1]);
    nums.shift();
  }
  return Math.max(...arrayOfProducts);
}

/**
 * Test Suite
 */
describe("adjacentElementsProduct()", () => {
  it("returns largest product of adjacent values", () => {
    // arrange
    const nums = [3, 6, -2, -5, 7, 3];

    // act
    const result = adjacentElementsProduct(nums);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(21);
  });
});
