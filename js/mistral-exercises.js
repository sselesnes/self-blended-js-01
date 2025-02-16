//1
function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}
console.log(doubleNumbers([1, 2, 3, 4, 5])); // Виведе: [2, 4, 6, 8, 10]

//2
const sumNumbers = (numbers) =>
  numbers.reduce((calc, number) => (calc += number), 0);
console.log(sumNumbers([1, 2, 3, 4, 5])); // Виведе: 15

const sumNumbers0 = (numbers) =>
  numbers.reduce((calc, number) => calc + number, 0);
console.log(sumNumbers0([1, 2, 3, 4, 5])); // Виведе: 15

//3
function filterEvenNumbers(numbers) {
  return numbers.filter((number) => (number % 2 ? null : number));
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе: [2, 4, 6]

function filterEvenNumbers0(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
console.log(filterEvenNumbers0([1, 2, 3, 4, 5, 6])); // Виведе: [2, 4, 6]

//4
function productNumbers(numbers) {
  return numbers.reduce((multiply, num) => multiply * num);
}
console.log(productNumbers([1, 2, 3, 4, 5])); // Виведе: 120

function productNumbers0(numbers) {
  return numbers.reduce((multiply, num) => multiply * num, 1);
}
console.log(productNumbers0([1, 2, 3, 4, 5])); // Виведе: 120

//5
function squareNumbers(numbers) {
  return numbers.map((num) => num ** 2);
}
console.log(squareNumbers([1, 2, 3, 4, 5])); // Виведе: [1, 4, 9, 16, 25]

//6
function totalProductValue(products) {
  return products.reduce((acc, entity) => acc + entity.price, 0);
}
const products = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 50 },
  { name: "Orange", price: 75 },
];
console.log(totalProductValue(products)); // Виведе: 225

//7
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

function getUserNames(users) {
  return users.map((users, userName) => users.name);
}
console.log(getUserNames(users)); // Виведе: ["Alice", "Bob", "Charlie"]

function getUserNames0(users) {
  return users.map((user) => user.name);
}
console.log(getUserNames0(users)); // Виведе: ["Alice", "Bob", "Charlie"]

//8
const numbers = [1, 2, 3, 4, 5];
function findMaxNumber(numbers) {
  return numbers.reduce((max, num) => max < num && (max = num), 0);
}
console.log(findMaxNumber([1, 2, 3, 4, 5])); // Виведе: 5

function findMaxNumber0(numbers) {
  return numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
}

console.log(findMaxNumber0([1, 2, 3, 4, 5])); // Виведе: 5

//9
const products1 = [
  { name: "Apple", price: 100 },
  { name: "Banana", price: 50 },
  { name: "Orange", price: 75 },
  { name: "Grapes", price: 30 },
];

function filterExpensiveProducts(products1) {
  return products1.filter((product) => product.price > 50);
}
console.log(filterExpensiveProducts(products1));

//10
const students = [
  { name: "Alice", grades: [90, 85, 92] },
  { name: "Bob", grades: [78, 84, 88] },
  { name: "Charlie", grades: [95, 91, 89] },
];

const calculateAverageGrade = (students) =>
  students
    .flatMap((student) => student.grades)
    .reduce((acc, num, _, array) => acc + num / array.length, 0);
console.log(calculateAverageGrade(students)); // Виведе: 88

function calculateAverageGrade0(students) {
  const grades = students.flatMap((student) => student.grades);
  return grades.reduce((acc, num) => acc + num, 0) / grades.length;
}
console.log(calculateAverageGrade0(students)); // Виведе: 88

//11
// Напишіть функцію filterAndDoubleQuantity, яка приймає масив об'єктів продуктів і повертає новий масив з продуктами, ціна яких менша за 100, і їхньою кількістю, подвоєною.
const products11 = [
  { name: "Apple", price: 50, quantity: 10 },
  { name: "Banana", price: 75, quantity: 5 },
  { name: "Orange", price: 120, quantity: 8 },
  { name: "Grapes", price: 95, quantity: 12 },
];
function filterAndDoubleQuantity(products11) {
  return products11
    .filter((product) => product.price < 100)
    .map((product) => ({ ...product, quantity: product.quantity * 2 }));
}
console.log(filterAndDoubleQuantity(products11));

//12
const students12 = [
  { name: "Alice", grades: [90, 85, 92] },
  { name: "Bob", grades: [78, 84, 88] },
  { name: "Charlie", grades: [95, 91, 89] },
];
function sortStudentsByAverageGrade(students12) {
  return [...students].sort((a, b) => {
    const avgA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return avgB - avgA; // Сортуємо за спаданням середнього балу
  });
}
console.log(sortStudentsByAverageGrade(students12));

//13
const numbers13 = [5, 2, 9, 1, 5, 6];
function sortNumbersAscending(numbers13) {
  return numbers13.sort((a, b) => a - b);
}
console.log(sortNumbersAscending(numbers13));

//14
const numbers14 = [5, 2, 9, 1, 5, 6];
function sortNumbersDescending(numbers14) {
  return numbers14.sort((a, b) => b - a);
}
console.log(sortNumbersDescending(numbers14));

//15
const originalArray = [1, 2, 3, 4, 5];
function copyArray(originalArray) {
  return [...originalArray];
}
console.log(copyArray(originalArray));

//16
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}
console.log(mergeArrays(array1, array2));

//17
const numbers17 = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(numbers17) {
  // example 1
  //   return [...new Set(numbers17)];

  // example 2
  // const seen = new Set();
  //   return (result = numbers17.filter((number) => {
  //     if (seen.has(number)) {
  //       return false;
  //     } else {
  //       seen.add(number);
  //       return true;
  //     }
  //   }));

  // example 3
  return numbers.filter(
    (number, index, array) => array.indexOf(number) === index
  );
}
console.log(removeDuplicates(numbers17));

//18
const numbers18 = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(numbers18) {
  return numbers18.filter((number) => !(number % 2));
}
console.log(filterEvenNumbers(numbers18));

//19
const numbers19 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function countEvenOddNumbers(numbers19) {
  //
  // example 1
  //   const even = numbers19.reduce((acc, number) => (number % 2 === 0 ? ++acc : acc), 0);
  //   const odd = numbers19.reduce((acc, number) => (number % 2 !== 0 ? ++acc : acc), 0);
  //   return { even: even, odd: odd };
  //
  // example 2
  //   return {
  //     even: numbers19.reduce((acc, number) => (number % 2 === 0 ? ++acc : acc), 0),
  //     odd: numbers19.reduce((acc, number) => (number % 2 !== 0 ? ++acc : acc), 0),
  //   };
  //
  // example 3
  return numbers19.reduce(
    (acc, number) => {
      acc[number % 2 === 0 ? "even" : "odd"]++;
      // acc[...] — це динамічний доступ до властивості об'єкта acc.
      // Якщо число парне, acc["even"]++ (або acc.even++) збільшується на 1.
      // Якщо число непарне, acc["odd"]++ (або acc.odd++) збільшується на 1.
      return acc;
    },
    { even: 0, odd: 0 }
  );
}
console.log(countEvenOddNumbers(numbers19));

//20
const numbers20 = [5, 2, 9, 1, -5, 6, 3, 8, 7];
function findMinMax(numbers20) {
  //
  // example 1
  // return { min: Math.min(...numbers20), max: Math.max(...numbers20) };
  // example 2
  return numbers20.reduce(
    (acc, number) => {
      number > acc.max || acc.max === undefined
        ? (acc.max = number)
        : number < acc.min || acc.min === undefined
        ? (acc.min = number)
        : number;
      return acc;
    },
    { max: undefined, min: undefined }
  );
}
console.log(findMinMax(numbers20));

const result = Infinity - Infinity;
console.log(result);
