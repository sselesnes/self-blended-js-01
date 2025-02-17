// init
const alert = (...args) => console.log(`%c${args}`, "color: yellow;");

///* Колбек-функції та інлайн-колбеки
//
function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

///* Метод forEach(callback)
//
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  orderedItems.forEach(function (value) {
    totalPrice += value;
  });
  return totalPrice;
}
alert(calculateTotalPrice([412, 371, 94, 63, 176]));

///* Метод reduce(callback, initialValue) - array.reduce((acc, entity) => (expression, result), initialValue)
// callback - це функція, яка приймає чотири аргументи:
// accumulator (акумулятор): значення, яке повертається з попереднього виклику функції callback. На першому виклику це initialValue, якщо він заданий, або перший елемент масиву, якщо initialValue не заданий.
// currentValue (поточний елемент): поточний елемент масиву, який обробляється.
// currentIndex (індекс): індекс поточного елемента в масиві.
// array(масив): масив, над яким виконується reduce.
//

const calculateTotalPrice1 = (orderedItems) =>
  orderedItems.reduce((acc, num, index, orderedItems) => (acc += num), 0);
alert(calculateTotalPrice1([412, 371, 94, 63, 176]));

//
function filterArray1(numbers, value) {
  const filtered = [];
  numbers.forEach((entity) => entity > value && filtered.push(entity));
  return filtered;
}
console.log(filterArray1([1, 2, 3, 4, 5], 3));

///* Стрілкові функції
// явне повернення (explicit return)
const multiply = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
console.log(multiply(5, 10));

// неявне повернення (implicit return)
const multiply1 = (quantity, pricePerItem) => quantity * pricePerItem;
console.log(multiply1(5, 10));

// rest ...args
const add = (...args) => args.reduce((acc, num) => (acc += num), 0);
console.log(add(1, 2, 3));

///* Метод map: array.map((element, index, array) => {expression});
// Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує в новий масив, який і буде результатом виконання методу.
//
//
// Чиста функція (pure function) - не змінює значення аргументів (мутація вихідних даних). За умови однакових аргументів вона завжди повертає один і той самий результат.
//
const changeEven1 = (numbersArray, value) =>
  numbersArray.map((number) => (number % 2 ? number : number + value));

function changeEven(numbersArray, value) {
  return numbersArray.reduce(
    (calculatedArray, number) =>
      calculatedArray.concat(number % 2 ? number : number + value),
    []
  );
}

function changeEven0(numbersArray, value) {
  return numbersArray.reduce((calculatedArray, number) => {
    calculatedArray.push(number % 2 ? number : number + value);
    return calculatedArray;
  }, []);
}

console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
console.log(changeEven0([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
console.log(changeEven1([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]

// example 1 map
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map((planet) => planet.length);

// example 2 reduce explicit
// const planetsLengths = planets.reduce((acc, planet) => {
//   acc.push(planet.length);
//   return acc;
// }, []);

// example 3 reduce implicit
// const planetsLengths = planets.reduce(
//   (acc, planet) => (acc.push(planet.length), acc),
//   []
// );

alert(planetsLengths);

console.log(
  [...Array(14)].map((_, i) =>
    "Iceland".replace("c", String.fromCharCode(99 + i))
  )
);

///* Метод flatMap()
//
const students = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students.map((student) => student.courses);
console.log(mappedCourses); // (3) [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students.flatMap((student) => student.courses);
console.log(flattenedCourses); // (6) ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
console.log([...new Set(flattenedCourses)]); // (4) ['mathematics', 'physics', 'science', 'biology']

const getUserEmails = (users) => users.map((user) => user.email);

console.log(
  getUserEmails([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
  ])
);

///* Метод filter() викликає колбек-функцію для кожного елемента вихідного масиву. Якщо результат її виконання true, поточний елемент додається в новий масив.
//
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
const evenNumbers = numbers.filter((number) => !(number % 2));
const oddNumbers = numbers.filter((number) => number % 2);

//
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

///* Метод find(callback) використовується для пошуку першого елемента, який задовольняє умову, повертає undefined якщо не знайшов
//

///* Метод every(callback) перевіряє, чи задовольняють _УСІ_ елементи умову колбек-функції. Повертає true, якщо всі елементи масиву задовольняють умову.
//

const users6 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: true,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: false,
    balance: 3821,
    gender: "female",
  },
];
const isEveryUserActive = (users) => {
  return users.every((user) => user.isActive === true);
};
console.log(isEveryUserActive(users6));

///* Метод some(callback) перевіряє, чи задовольняє хоча б _ОДИН_ елемент умову колбек-функції.
///* Метод reduce(callback) перевіряє, чи задовольняє хоча б _ОДИН_ елемент умову колбек-функції.
//
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
const totalPlayTime = playtimes.reduce((acc, hours) => acc + hours, 0);
const averagePlayTime = totalPlayTime / playtimes.length;

//
const players56 = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];
const totalAveragePlaytimePerGame = players56.reduce(
  (acc, player) => acc + player.playtime / player.gamesPlayed,
  0
);
alert(totalAveragePlaytimePerGame);

///* Метод toSorted(compareFn) сортує елементи масиву повертачи новий масив. За замовчуванням сортує за зростанням.
// numbers.toSorted((a, b) => a - b) - за зростанням, або numbers.toSorted((a, b) => b - a) - за спаданням чисел
// sort() сортує масив "на місці", тобто змінює оригінальний масив.
//
const students58 = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
const inAlphabetOrder = students58.toSorted((a, b) => a.localeCompare(b));

//
const students57 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];
const inAscendingScoreOrder = students57.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

//
const books58 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];
const sortedByAuthorName = books.toSorted((a, b) =>
  a.author.localeCompare(b.author)
);
const sortedByReversedAuthorName = books.toSorted((a, b) =>
  b.author.localeCompare(a.author)
);
const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);
console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);

//
const books59 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING59 = 8;
const names59 = books59
  .filter((book) => book.rating > MIN_BOOK_RATING59)
  .map((book) => book.author)
  .toSorted();

console.log(names59);
