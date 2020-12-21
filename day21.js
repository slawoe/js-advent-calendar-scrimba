function sumOfTwo(nums1, nums2, value) {
  let result = false;
  nums1.forEach((num) => {
    for (let i = 0; i <= nums2.length; i++) {
      if (num + nums2[i] === value) {
        result = true;
      }
    }
  });
  return result;
}

/**
 * Test Suite
 */
describe("sumOfTwo()", () => {
  it("returns true if a value can be found that by adding one number from each list", () => {
    // arrange
    const nums1 = [1, 2, 3];
    const nums2 = [10, 20, 30, 40];
    const value = 42;

    // act
    const result = sumOfTwo(nums1, nums2, value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(true);
  });
});
