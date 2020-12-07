function countVowelConsonant(str) {
  const newArray = str.split("");
  let sum = 0;
  for (letter of newArray) {
    const i = newArray.indexOf(letter);
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      sum++;
    } else {
      sum += 2;
    }
  }
  return sum;
}

/**
 * Test Suite
 */
describe("countVowelConsonant()", () => {
  it("returns total of vowels(1) and consonants(2) to be added", () => {
    // arrange
    const value = "abcde";

    // act
    const result = countVowelConsonant(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(8);
  });
});
