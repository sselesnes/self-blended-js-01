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

///* Метод reduce(callback)
// array.reduce((acc, entity) => (expression, result), initialValue)
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
const changeEven = (array, value) =>
  array.map((number) => (number % 2 ? number : number + value));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// example 1
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets.map((planet) => planet.length);

// example 2
// const planetsLengths = planets.reduce((acc, planet) => {
//   acc.push(planet.length);
//   return acc;
// }, []);

// example 3
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
