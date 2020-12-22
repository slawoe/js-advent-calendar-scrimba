function extractMatrixColumn(matrix, column) {
  const result = [];
  matrix.forEach((row) => {
    if (
      isNaN(row[column]) ||
      row[column] === null ||
      row[column] === undefined
    ) {
      result.push(
        `No number found in row: ${matrix.indexOf(row) + 1} & column: ${
          column + 1
        }`
      );
    } else {
      result.push(row[column]);
    }
  });
  return result;
}

/**
 * Test Suite
 */
describe("extractMatrixColumn()", () => {
  it("returns largest positive integer possible for digit count", () => {
    // arrange
    const matrix = [
      [1, 1, 1, 2],
      [0, 5, 0, 4],
      [2, 1, 3, 6],
    ];
    const column = 2;

    // act
    const result = extractMatrixColumn(matrix, column);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual([1, 0, 3]);
  });
});
