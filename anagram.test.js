const isAnagram = require("./anagram");

test("isAnagram function exists", () => {
  expect(typeof isAnagram).toEqual("function");
});

test("\"Dormitory\" is a anagram of \"dirty room###\"", () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test("\"Piano\" is a anagram of \"opina\"", () => {
  expect(isAnagram('Piano', 'opina')).toBeTruthy();
});

test("\"Hello\" is a anagram of \"Konnichiwa\"", () => {
  expect(isAnagram('Hello', 'Konnichiwa')).toBeFalsy();
});
