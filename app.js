const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
calculator.plus(5, 1);
calculator.minus(5, 1);
calculator.divide(5, 1);
calculator.power(5, 1);

const plusResult = calculator.plus(5, 1);
const minusResult = calculator.minus(plusResult, 1);
const divideResult = calculator.divide(plusResult, minusResult);
const powerResult = calculator.power(divideResult, plusResult);

powerResult;
minusResult;
plusResult;
divideResult;
