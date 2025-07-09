class Calculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    let delimiter = /[\n,]/;
    let numberString = numbers;

    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n', 2);
      delimiter = new RegExp(parts[0].slice(2).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      numberString = parts[1];
    }

    const numberArray = numberString
      .split(delimiter)
      .map(num => parseInt(num, 10))
      .filter(num => !isNaN(num));
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = Calculator;