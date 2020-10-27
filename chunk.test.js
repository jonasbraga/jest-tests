const chunckArray = require("./chunk");

test("chunkArray function exists", () => {
  expect(chunckArray).toBeDefined();
});

test("Chunk an array of 10 values with length of 2", () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const len = 2;
  const chunckArr = chunckArray(numbers, len);

  expect(chunckArr).toEqual([
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
    [8, 9],
  ]);
});

test("Chunk an array of 3 values with length of 1", () => {
  const numbers = [0, 1, 2];
  const len = 1;
  const chunckArr = chunckArray(numbers, len);

  expect(chunckArr).toEqual([[0], [1], [2]]);
});
