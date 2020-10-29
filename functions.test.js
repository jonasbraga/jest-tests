const functions = require("./functions");

const initUnitTest   = () => console.info("Iniciando teste");
const closeUnitTest  = () => console.log("Finalizando teste");
const initAllTests   = () => console.info("Iniciando teste completo");
const closeAllTests  = () => console.log("Finalizando teste completo");
const initNameCheck  = () => console.info("Start checking name");
const closeNameCheck = () => console.log("Finish checking name");

describe("Checking names", () => {
  beforeEach(initNameCheck);
  afterEach(closeNameCheck);

  test("User is Jonas", () => {
    const userName = 'Jonas';
    expect(userName).toBe('Jonas')
  });

  test("User is Braga", () => {
    const userName = 'Braga';
    expect(userName).toBe('Braga')
  });
});

beforeEach(initUnitTest);
afterEach(closeUnitTest);

beforeAll(initAllTests);
afterAll(closeAllTests);

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
