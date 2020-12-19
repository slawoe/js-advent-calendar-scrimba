function alphabetSubsequence(str) {
  const letterArray = str.toLowerCase().split("");
  let result = 0;
  for (let i = 0; i < letterArray.length - 1; i++) {
    if (letterArray[i].charCodeAt() < letterArray[i + 1].charCodeAt()) {
      result++;
    } else {
      result--;
    }
  }
  if (result === letterArray.length - 1) {
    return true;
  } else if (result > letterArray.length - 1) {
    return console.log("This is impossible buddy");
  } else {
    return false;
  }
}

/**
 * Test Suite
 */
describe("alphabetSubsequence()", () => {
  it("returns false when it has duplicate letters", () => {
    // arrange
    const str = "effg";

    // act
    const result = alphabetSubsequence(str);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(false);
  });

  it("returns false when NOT in ascending a - z order", () => {
    // arrange
    const str = "cdce";

    // act
    const result = alphabetSubsequence(str);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(false);
  });

  it("returns true whenno duplicates and is ascending a - z order ", () => {
    // arrange
    const str = "ace";

    // act
    const result = alphabetSubsequence(str);

    // log
    console.log("result 3: ", result);

    // assert
    expect(result).toBe(true);
  });
});
