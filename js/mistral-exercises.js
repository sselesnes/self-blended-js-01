// init
const alert = (...args) => console.log(`%c${args}`, "color: yellow;");

//1
function doubleNumbers(numbers) {
  return numbers.map(number => number * 2);
}
console.log(doubleNumbers([1, 2, 3, 4, 5])); // Виведе: [2, 4, 6, 8, 10]

//2
const sumNumbers = numbers => numbers.reduce((calc, number) => (calc += number), 0);
console.log(sumNumbers([1, 2, 3, 4, 5])); // Виведе: 15

const sumNumbers0 = numbers => numbers.reduce((calc, number) => calc + number, 0);
console.log(sumNumbers0([1, 2, 3, 4, 5])); // Виведе: 15

//3
function filterEvenNumbers(numbers) {
  return numbers.filter(number => (number % 2 ? null : number));
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Виведе: [2, 4, 6]

function filterEvenNumbers0(numbers) {
  return numbers.filter(number => number % 2 === 0);
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
  return numbers.map(num => num ** 2);
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
  return users.map(user => user.name);
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
  return products1.filter(product => product.price > 50);
}
console.log(filterExpensiveProducts(products1));

//10
const students = [
  { name: "Alice", grades: [90, 85, 92] },
  { name: "Bob", grades: [78, 84, 88] },
  { name: "Charlie", grades: [95, 91, 89] },
];

const calculateAverageGrade = students =>
  students
    .flatMap(student => student.grades)
    .reduce((acc, num, _, array) => acc + num / array.length, 0);
console.log(calculateAverageGrade(students)); // Виведе: 88

function calculateAverageGrade0(students) {
  const grades = students.flatMap(student => student.grades);
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
    .filter(product => product.price < 100)
    .map(product => ({ ...product, quantity: product.quantity * 2 }));
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
    const avgA = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
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
  return numbers.filter((number, index, array) => array.indexOf(number) === index);
}
console.log(removeDuplicates(numbers17));

//18
const numbers18 = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers2(numbers18) {
  return numbers18.filter(number => !(number % 2));
}
console.log(filterEvenNumbers2(numbers18));

//19
const numbers19 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function countEvenOddNumbers(numbers19) {
  //
  // example 1
  const even = numbers19.reduce((acc, number) => (number % 2 === 0 ? ++acc : acc), 0);
  const odd = numbers19.reduce((acc, number) => (number % 2 !== 0 ? ++acc : acc), 0);
  return { even: even, odd: odd };

  // example 2
  //   return {
  //     even: numbers19.reduce((acc, number) => (number % 2 === 0 ? ++acc : acc), 0),
  //     odd: numbers19.reduce((acc, number) => (number % 2 !== 0 ? ++acc : acc), 0),
  //   };
  //
  // example 3
  return numbers19.reduce((acc, number) => (acc[number % 2 === 0 ? "even" : "odd"]++, acc), {
    even: 0,
    odd: 0,
  });
  // acc[...] — це динамічний доступ до властивості об'єкта acc.
  // Якщо число парне, acc["even"]++ (або acc.even++) збільшується на 1.
  // Якщо число непарне, acc["odd"]++ (або acc.odd++) збільшується на 1.
}
console.log(countEvenOddNumbers(numbers19));

//20
const numbers20 = [-5, -2, -9, -1, 0, 3, 7];
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

//21
const numbers21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumArray = numbers => numbers.reduce((acc, num) => acc + num);
console.log(sumArray(numbers21)); //55

//22
const numbers22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const averageArray = numbers => numbers.reduce((acc, num) => acc + num) / numbers.length;
console.log(averageArray(numbers22)); // Виведе 5.5

alert(`//22 findMedian`);
//23 Знаходження медіани масиву. Спочатку відсортуйте масив. Якщо кількість елементів непарна, медіана — це центральний елемент. Якщо парна, медіана — це середнє значення двох центральних елементів.
const numbers23 = [5, 2, 9, 1, 5, 6, 3, 8, 7, 6];

// example 1
// const findMedian = numbers => {
//   const sortedNumbers = numbers.toSorted((a, b) => a - b);
//   return sortedNumbers.length % 2
//     ? sortedNumbers[(sortedNumbers.length + 1) / 2 - 1]
//     : (sortedNumbers[sortedNumbers.length / 2 - 1] + sortedNumbers[sortedNumbers.length / 2]) / 2;
// };

// example 2
const findMedian = numbers => {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
};

console.log(findMedian(numbers23)); // Виведе 5.5

// 24 Просте число (prime number) не вирішив
const number24 = 31;
const isPrime = number => {
  if (number <= 1) return false; // Числа менше або рівні 1 не є простими
  if (number <= 3) return true; // 2 і 3 — прості числа
  if (number % 2 === 0 || number % 3 === 0) return false; // Виключаємо парні числа і кратні 3
  for (let i = 5; i * i <= number; i += 6) {
    // Перевіряємо дільники від 5 до √number з кроком 6
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
};
console.log(isPrime(number24)); // Виведе: true

// 24.1 Формула Біне https://tinyurl.com/2tepa36m не вирішив
const arrayPrime = n => {
  const isPrime = Array(n + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0 і 1 не є простими
  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p]) {
      for (let i = p * p; i <= n; i += p) {
        isPrime[i] = false;
      }
    }
  }
  return isPrime.map((isPrime, num) => (isPrime ? num : null)).filter(num => num !== null);
};
console.log(arrayPrime(31)); // Виведе: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]

alert(`//25 isPerfectNumber`);
// 25 перевіряє, чи є число досконалим.
// Досконале число — це число, яке дорівнює сумі всіх своїх власних дільників (тобто дільників, окрім самого себе).
// 1. Знайдіть всі власні дільники числа(від 1 до number / 2)
// 2. Підсумуйте їх.
// 3. Перевірте, чи дорівнює сума самому числу.
// 6 — досконале число, бо його власні дільники (1, 2, 3) у сумі дають 6.
// 28 — досконале число, бо його власні дільники (1, 2, 4, 7, 14) у сумі дають 28.

const number25 = 28;
//example 1
// const isPerfectNumber = number => {
// const numberArray = [];
// for (let i = 1; i <= number25 / 2; i++) !(number25 % i) && numberArray.push(i);
// return number25 === numberArray.reduce((acc, num) => acc + num, 0);
// };

//example 2 chatgpt
// return number === Array.from({ length: number / 2 }, (_, i) => i + 1).reduce((acc, i) => (!(number % i) ? acc + i : acc), 0);

//example 3 mistral
const isPerfectNumber = number => {
  const numberArray = Array.from({ length: number / 2 }, (_, i) => i + 1)
    .filter(i => number % i === 0)
    .reduce((acc, num) => acc + num, 0);
  return number === numberArray;
};
console.log(isPerfectNumber(number25)); // Виведе: true

//26
const numbers26 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getEvenNumbers = numbers => numbers.filter(number => !(number % 2));
console.log(getEvenNumbers(numbers26)); // Виведе: [2, 4, 6, 8, 10]

//27
const words27 = ["apple", "banana", "cat", "dog", "elephant", "fish"];
const filterLongWords = words => words.filter(word => word.length > 5);
console.log(filterLongWords(words27)); // Виведе: ["banana", "elephant"]

//28
const numbers28 = [10, 30, 50, 70, 90];
const avgNumbers28 = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
console.log(avgNumbers28(numbers28));

//29
const students29 = [
  { name: "Alice", scores: [85, 90, 92] },
  { name: "Bob", scores: [78, 82, 80] },
  { name: "Charlie", scores: [95, 91, 89] },
];

const averageScore29 = students =>
  students.map(student => ({
    name: student.name,
    average: student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length,
  }));
console.log(averageScore29(students29));

//30
const books30 = [
  { title: "Book One", author: "Author A", pages: 250 },
  { title: "Book Two", author: "Author B", pages: 320 },
  { title: "Book Three", author: "Author C", pages: 180 },
];

//example 1
// const findLargeBook = books => [...books].sort((a, b) => b.pages - a.pages)[0]; //сортує масив зворотньо та повертає [0] - першу запис

//example 2
const findLargeBook = books =>
  books.reduce((largest, current) => (largest.pages < current.pages ? current : largest)); //, books[0]); // якщо задана intialValue = {} порівняння не працює. Тобто або взагалі без нього або books[0]

console.log(findLargeBook(books30));

//31
const salesData = [
  { product: "apple", quantity: 10, price: 0.5 },
  { product: "banana", quantity: 5, price: 0.3 },
  { product: "orange", quantity: 8, price: 0.7 },
];

const calculateTotalSales = salesData =>
  salesData.reduce((total, { quantity, price }) => total + quantity * price, 0);
console.log(calculateTotalSales(salesData)); // 11.5

//32
const products32 = [
  { name: "apple", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" },
];
const getUniqueProducts = products => [...new Set(products.map(product => product.name))];
console.table(getUniqueProducts(products32)); // ["apple", "banana", "carrot"]

//33
const products33 = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
  { name: "banana", category: "fruit" },
  { name: "potato", category: "vegetable" },
  { name: "orange", category: "fruit" },
];

const groupProductsByCategory33 = products =>
  products.reduce((unique, { name, category }) => 
    (
      !unique[category] && (unique[category] = []),
      unique[category].push(name), unique
    ),
    {}
  );

console.table(groupProductsByCategory33(products33));

// console.table(products33);
