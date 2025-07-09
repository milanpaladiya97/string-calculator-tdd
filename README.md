String Calculator TDD Kata
This project implements the String Calculator TDD Kata in Node.js using Jest for testing. The calculator handles comma-separated or newline-separated numbers, custom delimiters, and throws exceptions for negative numbers.
Setup

Clone the repository:git clone <repository-url>
Install dependencies:npm install
Run tests:npm test



Features
=====================
Returns 0 for an empty string.
Sums single or multiple comma-separated numbers.
Supports newlines as delimiters (e.g., "1\n2,3").
Supports custom delimiters (e.g., "//;\n1;2").
Throws an exception for negative numbers, listing all negatives in the message.

Project Structure
=====================
src/calculator.js: The main Calculator class implementation.
tests/calculator.test.js: Jest tests for the calculator.

Running the Code
=====================
To use the calculator in your code:
const Calculator = require('./src/calculator');
const calc = new Calculator();
console.log(calc.add('1,2,3')); // Outputs 6