class Calculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    let delimiter = /[\n,]/;
    let numberString = numbers;

    if (numbers.startsWith('//')) {
      const parts = numbers.split('\n', 2);
      delimiter = new RegExp(parts[0].slice(2));
      numberString = parts[1];
    }

    const numberArray = numberString.split(delimiter).map(num => parseInt(num, 10));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = Calculator;