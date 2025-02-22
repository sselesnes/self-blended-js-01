
function doubleNumbers1(numbers) {
  const evenNumbers = [];
    numbers.forEach(number => {
      if (number % 2 === 0) {
        evenNumbers.push(number);
      }
    });
  return evenNumbers;
  }
  console.log(doubleNumbers1([1, 2, 3, 4, 5, 6]));
  
const doubleNumbers2 = numbers => numbers
  .reduce((acc, num) => (num % 2 === 0
    ? acc.concat(num > 4 
      ? num * 2 
      : num) 
    : acc),
  []);
console.log(doubleNumbers2([1, 2, 3, 4, 5, 6, 7, 8]));

const doubleEvenNumbersOverFour = numbers => numbers
  .filter(num => num % 2 === 0)
  .map(num => num > 4 ? num * 2 : num);
console.log(doubleEvenNumbersOverFour([1, 2, 3, 4, 5, 6, 7, 8]));