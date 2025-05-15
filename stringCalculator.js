// stringCalculator.js - String Calculator using TDD
// Author: Milan

/**
 * String Calculator Function (TDD Approach)
 * Supports:
 * - Comma (,) and newline (\n) as default delimiters
 * - Custom delimiters (//[delimiter]\n[numbers...])
 * - Throws error for negative numbers
 */

function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const tokens = numbers.split(delimiter);

    // Check for non-numeric (alphabetic or invalid) entries
    for (const token of tokens) {
        if (!/^-?\d+$/.test(token.trim())) {
            throw new Error(`invalid input detected: ${token}`);
        }
    }
    
    const numArray = numbers.split(delimiter).map(num => parseInt(num, 10));

    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;
