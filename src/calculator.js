class Calculator {
  add(numbers) {
    if (numbers === '') {
      return 0;
    }
    const numberArray = numbers.split(/[\n,]/).map(num => parseInt(num, 10));
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
}

module.exports = Calculator;