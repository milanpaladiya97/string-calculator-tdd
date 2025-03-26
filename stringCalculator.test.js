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

test("returns sum for multiple numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
});

test("handles new line as a delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
});