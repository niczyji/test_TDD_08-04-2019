const indexController = require("../controller/indexController");
const jsonPlaceholder = require("../jsonPlaceholder");

/**
Unit testing check for controllers
tools: JEST
 */

//test 01: summation test

//test(string, callback)

test("Test 01: test summation function", () => {
  //expect() function can check the result
  expect(indexController.sum(1, 2)).toBe(3);
});

test("Test 02: test summation function", () => {
  //expect() function can check the result
  expect(indexController.sum(1, 5)).toBe(6);
});

// test object
test("Test 03: Object test", () => {
  expect(indexController.getMyData()).toBeObject();
});

// test string
test("Test 04: String test", () => {
  expect(indexController.getString()).toBeString();
});

// test null
test("Test 05: Test Null value", () => {
  expect(indexController.getNull()).toBeNil();
});

// test jsonPlaceholder
test("Test 06: jsonTest array", () => {
  expect(jsonPlaceholder.readJson()).toBeArray();
});

// test jsonPlaceholder
test("Test 07: jsonTest toBeObject", () => {
  expect(jsonPlaceholder.readJson()).toBeObject();
});

// test jsonPlaceholder
test("Test 08: jsonTest .toBeNil()", () => {
  expect(jsonPlaceholder.readJson()).toBeNil();
});
