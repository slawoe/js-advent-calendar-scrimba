function chunkyMonkey(values, size) {
  const firstSlice = values.slice(0, size);
  const restOfIt = values.slice(size);
  const newArray = [firstSlice, restOfIt];
  return newArray;
}

/**
 * Test Suite
 */
describe("chunkyMonkey()", () => {
  it("returns largest positive integer possible for digit count", () => {
    // arrange
    const values = ["a", "b", "c", "d"];
    const size = 2;

    // act
    const result = chunkyMonkey(values, size);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([
      ["a", "b"],
      ["c", "d"],
    ]);
  });
});
