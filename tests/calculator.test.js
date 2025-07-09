const Calculator = require('../src/calculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    const calculator = new Calculator();
    expect(calculator.add('')).toBe(0);
  });

  test('should return 1 for input "1"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1')).toBe(1);
  });
});