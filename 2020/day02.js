function depositProfit(deposit, rate, threshold) {
  calculatedYears = 0;
  while (deposit <= threshold) {
    deposit = deposit + (deposit * rate) / 100;
    calculatedYears++;
  }
  return calculatedYears;
}

/**
 * Test Suite
 */
describe("depositProfit()", () => {
  it("returns number of years it will take to hit threshold based off of deposit & rate", () => {
    // arrange
    const deposit = 100;
    const rate = 20;
    const threshold = 170;

    // act
    const result = depositProfit(deposit, rate, threshold);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(3);
  });
});
