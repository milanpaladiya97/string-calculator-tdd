const add = require("./stringCalculator");

test('returns 0 for an empty string', () => {
    const input = "";
    const output = add(input);
    console.log(`Input: "${input}", Output: ${output}`);
    expect(output).toBe(0);
});

test('returns the number itself when a single number is passed', () => {
    const input = "1";
    const output = add(input);
    console.log(`Input: "${input}", Output: ${output}`);
    expect(output).toBe(1);
});

test('returns sum when two numbers are passed', () => {
    const input = "1,5";
    const output = add(input);
    console.log(`Input: "${input}", Output: ${output}`);
    expect(output).toBe(6);
});

test('returns sum for multiple numbers', () => {
    const input = "1,2,3";
    const output = add(input);
    console.log(`Input: "${input}", Output: ${output}`);
    expect(output).toBe(6);
});

test('handles new line as a delimiter', () => {
    const input = "2\n3,4";
    const output = add(input);
    console.log(`Input: "${input}", Output: ${output}`);
    expect(output).toBe(9);
});

test('supports custom delimiters', () => {
    const input = "//;\n1;2;3";
    const output = add(input);
    console.log(`Input: "${input}", Output: ${output}`);
    expect(output).toBe(6);
});

test('throws an error for negative numbers', () => {
    const input = "-1,2,-3";
    try {
        add(input);
    } catch (error) {
        console.log(`Input: "${input}", Output: ${error.message}`);
        expect(error.message).toBe("negative numbers not allowed -1,-3");
    }
});

test('throws an error for number and alpha', () => {
    const input = "1,43,ab,fg,34";
    try {
        add(input);
    } catch (error) {
        console.log(`Input: "${input}", Output: ${error.message}`);
        expect('number and alpha numbers not allowed ab, fg');
    }
});

