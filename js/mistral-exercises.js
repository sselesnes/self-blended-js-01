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
