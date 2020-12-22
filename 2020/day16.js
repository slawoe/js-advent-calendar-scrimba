function insertDashes(arr) {
  const arrayedWords = arr.split(" ");
  const splittedUpWords = [];
  const joinedResults = [];
  for (let i = 0; i <= arrayedWords.length - 1; i++) {
    splittedUpWords.push(arrayedWords[i].split(""));
  }
  for (let i = 0; i <= splittedUpWords.length - 1; i++) {
    joinedResults.push(splittedUpWords[i].join("-"));
  }
  return joinedResults.join(" ");
}

/**
 * Test Suite
 */
describe("insertDashes()", () => {
  it("insert dashes in between chars", () => {
    // arrange
    const value = "aba caba";

    // act
    const result = insertDashes(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe("a-b-a c-a-b-a");
  });
});
