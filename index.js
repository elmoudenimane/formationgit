const ONE_NUMBER_REG = /^\d+$/;
// const TWO_NUMBERS_REG = /^[1-9]\d(?:,[1-9]\d){0,2}$/;

function sum(numbers) {
  if (numbers.match(ONE_NUMBER_REG)) {
    console.log(parseInt(numbers, 1));
    return parseInt(numbers, 1);
  }
  else return 0;
}