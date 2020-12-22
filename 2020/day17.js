function differentSymbolsNaive(str) {
  let uniqueCharacters = [];
  const charactersArray = str.split("").sort();
  charactersArray.forEach((element) => {
    if (!uniqueCharacters.includes(element)) {
      uniqueCharacters.push(element);
    }
  });
  return uniqueCharacters.length;
}

/**
 * Test Suite
 */
describe("differentSymbolsNaive()", () => {
  it("returns count of unique characters", () => {
    // arrange
    const str = "cabca";

    // act
    const result = differentSymbolsNaive(str);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(3);
  });
});
