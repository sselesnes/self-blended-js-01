// init
function alert(args) {
  console.log(`%c${args}`, "color: yellow;");
}

//* змінна та вміти оголошувати за допомогою const та let і перевизначати змінні;
// const - оголошує незмінну константу (local scope)
// let - оголошує змінну (local scope)
// var - змінна з попередньої js (global scope)

//* number, string, boolean, null та undefined та прості арифметичні обчислення;
// const isBoolean = true; // typeof = boolean;
// const varibleName = null; // typeof = object
// let varibleName; // typeof = undefined
// () / ^√ / * / + -
// % - повертає остачу від ділення одного числа на інше
// ** - x до степеня y
// x += y // x = x + y
// x -= y // x = x - y
// x *= y // x = x * y
// x /= y // x = x / y
// x %= y // x = x % y
// '' та "" одне і теж саме, але `` (дозволяють рядку охоплювати кілька ліній у коді)
// \', \", \`	- Лапки
// \\ - Зворотний слеш

//* конкатенація будь-який тип даних буде приведено до рядка та поєднано з іншим рядком:
// ("Mango" + true); // "Mangotrue"
// (1 + 2 + "4"); // "34"
// Багаторядкові літерали: "string text line 1\n" + "string text line 2";
// Шаблонні літерали (шаблонні рядки = template strings = template literals) - рядкові літерали, що допускають використання виразів усередині, вони огорнуті у ` ` зворотні лапки, мають вираз ${template} та застосовують інтерполяцію виразів

//* вміти перетворювати типи та використовувати оператори порівняння;
// явне (Explicit) перетворення типу - String(variableNum); // “33” ; Number(false або null); // 0
// + неявне (Implicit або Type coercion) перетворення (variableNum + “ text”); // “33 text”
// / , - , та * здійснюють аріфметічні операції з неявним пертворенням

//* властивости
// variableName.length // повертає довжину рядкового літералу
// string[index] // повертає вміст рядкового літералу з індексом від нуля; lastStringCharacter = [someVariable.length - 1];
// string[x] = y // не змінює вміст по індексу x

//* розуміти, як працюють функції, що таке параметри та аргументи, і вміти використовувати функції для нескладних обчислень.
// основні оператори порівняння // повертають boolelan
// > / < / = / >= / <= працюють з неявним (Implicit) перетворенням з результатом у boolean
// == // дорівнює не суворо (non strict) ; (5 == "5") // true
// != // не дорівнює не суворо; (1  !=  true) // false
// === / !== // (5 !== "5") // true (не)дорівнює суворо (strict), не перетворює тип

//* Клас Math
// Math.floor(num) ціле в меньшу сторону // 1.2 = 1
// Math.ceil(num) ціле в більшу стотону // 1.2 = 2
// Math.round(num) округляє
// Math.max(num1, num2, ...) повертає найбільше з набору
// Math.min(num1, num2, ...) повертає найменше з набору
// Math.random(): повертає випадкове від 0 до 1
// Метод Number.parseInt(“39e8ww33”) // 39 перетворює у рядковий якщо потрібно та результатом видає числовий літерал або з
// “re234ek” NaN (Not an Number)
//
// // Метод Number.parseFloat теж саме, але з плаваючою точкою
// 	(0.1 + 0.2).toFixed(1)); // "0.3"; (5).toFixed(2));  //  ”5.00”

//* function (гнучкий контекст this (змінюється залежно від того, як викликається функція (контекст виклику), підйом (hoisting) функції на початок області видимості, тому їх можна викликати до їхнього оголошення).

//
function multiply(x, y, z) {
  return x * y * z;
}

const result = multiply(2, 3, 5);
console.log(result); // 30

//
function makeMessage(name, price) {
  return `You picked ${name}, price per item is ${price} credits`;
}

result1 = makeMessage("product", "1200");
console.log(result);

//або
console.log(makeMessage("product", "1200"));

function someFunction(x, y) {
  return x + y;
}
someVariable = someFunction(3, 5);
console.log(someVariable);

function someFunction(x, y) {
  return x + y;
}
console.log(someFunction(3, 5));

// arrow function (фіксований this)
const findNumber = (a, b, c) => {
  x * y * z;
};

// приймає додатне ціле число n і повертає його найбільшу цифру.
// Використовуй цикл (while або for).
// Не перетворюй число в рядок(без.toString() або.split()).
alert(`// maxDigit`);
// function maxDigit(n) {
//   let max = 0;
//   while (n > 0) {
//     n % 10 > max && (max = n % 10);
//     n = Math.floor(n / 10);
//   }
//   return max;
// }

