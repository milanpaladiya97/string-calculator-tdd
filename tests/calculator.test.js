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

  test('should return 6 for input "1,5"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,5')).toBe(6);
  });

  test('should return 10 for input "1,2,3,4"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1,2,3,4')).toBe(10);
  });

  test('should return 6 for input "1\n2,3"', () => {
    const calculator = new Calculator();
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('should return 3 for input "//;\n1;2"', () => {
    const calculator = new Calculator();
    expect(calculator.add('//;\n1;2')).toBe(3);
  });
});