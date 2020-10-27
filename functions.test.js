const functions = require("./functions");

// Basic math tests
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// Null test
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// Boolean tests
test("Should be truthy", () => {
  expect(functions.checkValue(3)).toBeTruthy();
});

test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// Objects
test("User should be Jonas Braga object", () => {
  expect(functions.createUser()).toStrictEqual({
    firstName: "Jonas",
    lastName: "Braga",
  });
});

// Comparative numbers
test("Should be under 1500", () => {
  const num1 = 300;
  const num2 = 100;
  expect(num1 + num2).toBeLessThan(1500);
  // expect(num1 + num2).toBeLessThanOrEqual(1500);
});

test("Should be over 1500", () => {
  const num1 = 300;
  const num2 = 1300;
  expect(num1 + num2).toBeGreaterThan(1500);
  // expect(num1 + num2).toBeGreaterThanOrEqual(1500);
});

// Regex
test('There is "sleep" in phrase', () => {
  expect("Jonas likes to sleep").toMatch(/Sleep/i);
});

// Arrays
test("Guitar hero should be a favorite game", () => {
  const favoritesGames = ["God of war", "Call of Duty", "Guitar Hero"];
  expect(favoritesGames).toContain("Guitar Hero");
});

// Async data

// Promisse
test("User fatch name should be Leanne Graham using promisse", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toStrictEqual("Leanne Graham");
  });
});

// Async Await
test("User fatch name should be Leanne Graham using async await", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toStrictEqual("Leanne Graham");
});
