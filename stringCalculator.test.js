const add = require("./stringCalculator");

test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number itself when a single number is passed", () => {
    expect(add("5")).toBe(5);
});

test("returns sum when two numbers are passed", () => {
    expect(add("1,2")).toBe(3);
});