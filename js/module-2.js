// init
function alert(args) {
  console.log(`%c${args}`, "color: yellow;");
}

//* вивчити принцип роботи розгалужень та розрізняти інструкції з if, оператор switch, if {} // else if {}
// 6 випадків, які приводять Boolean до false:
// 0
// ""
// Nan
// null
// underfined
// false

//* тернарний оператор;
// <condition> ? <expression if condition is true (if) > : <expression if condition is false (else) >
// x>y // condition
//   ? console.log(“x > y”) // expression if condition true
//   : console.log(“x =< y”) // expression if condition false
// ;
//

function checkPassword(password) {
  const correctPassword = "jqueryismyjam";
  return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
}

//* switch
alert(`// swith`);
//
function fruitReserv(fruit) {
  switch (
    fruit // === суворо (strict)
  ) {
    case `pear`:
      console.log(`pear`);
      break; // return undefinded
    case `apple`:
      console.log(`apple`);
      break; // return undefinded
    case `doggy`:
      return `whoof`;
    default: // тільки 1 default, він завжди має бути останнім
      return `none of above`;
  }
  return false;
}
console.log(fruitReserv(`apple`));

// використовувати розгалуження у простих операціях присвоєння або повернення;
// розрізняти основні типи логічних операторів && (and), || (or), ! (not), ?? та вміти їх застосовувати;

// result = value1 && value2 && value3;
// Оператор && (and) робить наступне: (логічне "і") повертає перше "хибне" значення.
// Обчислює операнди зліва направо.
// Перетворює кожен операнд на булевий. Якщо результат false, зупиняється і повертає оригінальне значення того операнда на якому зупинився.
// Якщо всі операнди були обчисленні (тобто усі були правдиві), повертає останній операнд.
// Іншими словами, І повертає перше хибне значення, або останнє значення, якщо жодного хибного не було знайдено.

// Пріоритет && (and) вище за || (or)
// Отже, код a && b || c && d по суті є таким самим, як код з виразами && у дужках: (a && b) || (c && d).

//
const xx = 10;
const yy = 10;
xx > yy // condition
  ? (console.log(`x > y`), xx === 10 && console.log(`x = 10`)) // expression if condition true then if true do only && right part
  : (console.log(`x =< y`), yy === 10 && console.log(`y = 10`)); // expression if condition false then if true do only && right part

//
function isNumberInRange(start, end, number) {
  return number >= start && number <= end;
} // true or false

//*   || (or) використовується в інструкціях if, щоб перевірити, чи є будь-яка із заданих умов true.
// result = value1 || value2 || value3;
// Оператор АБО || робить наступне: логічне "або") повертає перше "істинне" значення
// Обчислює операнди зліва направо.
// Перетворює значення кожного операнда на булеве. Якщо результат true, зупиняється і повертає початкове значення цього операнда.
// Якщо всі операнди були обчисленні (тобто усі були false), повертає останній операнд.
// Значення повертається у первісному вигляді без конвертації.
// Іншими словами, ланцюжок з АБО || повертає перше правдиве значення або останнє, якщо правдивого значення не знайдено.

console.log(0 || "Фолбек"); // "Фолбек" (бо 0 - falsy)
console.log(0 ?? "Фолбек"); // 0 (бо це визначене значення)
// ?? ігнорує тільки null і undefined, а || – всі "falsy" значення (0, "", false).

function checkAccess(subType) {
  return subType === "pro" || subType === "vip";
} // true or false
console.log(checkAccess(`pro`));

// завдання не виводити хвилини якщо час хх:00
let x = 14;
let y = 10;
console.log(`${x} г.${(y && y !== 0 && ` ${y} хв.`) || ""}`);
console.log(`${x} г.${(y && " " + y + " хв.") || ""}`);
console.log(`${x} г.${(!!y && ` ${y} хв.`) || ""}`);
console.log(`${x} г.${y ? ` ${y} хв.` : ""}`);

//* ! (not)
// Оператор приймає один аргумент і виконує наступне:
// Перетворює операнд на булевий тип: true/false.
// Повертає зворотне значення.

alert(!true); // false
alert(!0); // true
// Подвійний !! (not) іноді використовується для перетворення значення на булевий тип:

alert(!!"не пустий рядок"); // true
alert(!!null); // false
// Тобто, перший НЕ перетворює значення на булеве і повертає зворотне, а другий НЕ інвертує його знову. Зрештою ми маємо просте перетворення значень на булевий тип.

//
// знати методи рядків: slice(), toLowerCase(), toUpperCase(), includes(), startsWith(), endsWith(), indexOf(), trim() та використовувати їх у розв’язанні типових задач;

// Дані мають набір властивостей і методів, до яких можна звертатися в коді. Цей набір називається інтерфейсом.
// Для доступу до властивості використовується синтаксис із крапкою: objectName.property
// Для виклику методу наприкінці додаються круглі дужки, як при виклику функції: objectName.method()

// stringText.slice(startIndex [, endIndex]) // повертає частину рядка починаючи від startIndex до (але не включно) endIndex. Параметр endIndex є необов'язковим. Можна задати відʼємне < 0 значення - це означає, що позиція буде рахуватися з кінця рядка

// stringText.substring(start [, end]) // повертає частину рядка між start та end (не включаючи end. Цей метод майже такий самий що і slice, але він дозволяє задати start більше ніж end (у цьому випадку він просто міняє значення start і end місцями).

// stringText.substr(start [, length]) // повертає частину рядка з позиції start, із заданою довжиною length.

// stringText.toLowerCase() та stringText.toUpperCase()

// stringText.includes(substr [, pos]) повертає true/false в залежності від того чи є substr в рядку stringText. pos не є обов’язковим, але вказує одну точну позицію для пошуку

// stringText.startsWith(substr) та stringText.endsWith(substr) перевіряють, чи починається і чи закінчується рядок певним підрядком.

// stringText.trim() , stringText.trimStart() та stringText.trimEnd() видаляє (“обрізає”) пробіли з початку та кінця рядка.

// stringText.indexOf(substr [, pos]) - шукає підрядок substr в рядку str, починаючи з позиції pos, і повертає позицію, де знаходиться збіг, або -1 якщо збігів не було знайдено.

// stringText.lastIndexOf(substr, position) - теж саме тільки пошук з кінця до начала

// stringText.at(0) або stringText[0] або stringText.charAt(0) - перший символ
// stringText.at(-1) - останній символ

// stringText.replace("origin", "change_to"); // Замінює перше входження "origin" на "change_to" у рядку stringText
// .replace(/World/g, “AnotherWorld”) // регулярний вираз (regExp) у // дужках, g - прапорець глобального пошуку по рядку, а не тільки першого збігу
// stringText.replaceAll("origin", "change_to"); // Замінює всі входження "origin" на "change_to" у рядку stringText

// stringText.padStart(count, string) // Додає рядок string на початок stringText, доки довжина stringText не досягне count символів

// stringText.padEnd(count, string) // теж саме на прикинці stringText

//
function normalizeInput(input, to) {
  return to == "upper" ? input.toUpperCase() : to == "lower" ? input.toLowerCase() : undefined;
}
console.log(normalizeInput("SomeText", "lower"));

//* знати типи циклів (for, while, do…while);
// реалізовувати багаторазове виконання однотипних дій за допомогою циклів.

alert(`// while`);
//* while (перевірка умови перед ітерацією)
let count = 0;
while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}

//
function calculateTotal(number) {
  let calculateNumbers = 0;
  while (number > 0) {
    calculateNumbers += number;
    number -= 1;
  }
  return calculateNumbers;
}
console.log(calculateTotal(3)); //6

//* do … while (перевірка умови після ітерації)
alert(`// do ... while`);
//
let countA = 0;
do {
  console.log(`Count: ${countA}`);
  countA += 1;
} while (countA < 5);

// for (перевірка умови перед ітерацією)
// for (початок; умова (якщо true - переходимо до тіла циклу); крок (виконується після виконання тіла циклу)) {  // ... тіло циклу … }
alert(`// for`);
//
for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}

//
function calculateTotal(number) {
  let calculateNumbers = 0;
  for (; number > 0; calculateNumbers += number, number -= 1) {}
  return calculateNumbers;
}
console.log(calculateTotal(24)); // 300

//
const start = 6;
const end = 17;
let number;
for (number = start; number <= end; number++) {
  if (number % 5 === 0) {
    break;
  }
}
console.log(number);

//* Оператор break не припиняє виконання функції, а тільки перериває цикл. Щоб переривати виконання одразу циклу і функції і повернути результат у зовнішній код, є оператор return.
alert(`// Оператор break`);
//
const startA = 2;
const endA = 11;
let numberA;
numberA = startA;
while (numberA <= endA) {
  if (numberA % 5 === 0) {
    break;
  }
  numberA++;
}
console.log(number);

//
function findNumber(start, end, divisor) {
  for (let calc = start; calc <= end; calc++) if (calc % divisor == 0) return calc;
}
console.log(findNumber(2, 7, 5));

//
const findNumberArrow = (start, end, divisor) => {
  for (; start <= end; start++) if (start % divisor === 0) return start;
};
console.log(findNumberArrow(3, 8, 5));

// Інкремент і декремент
// Префіксний інкремент (++value) спочатку збільшує (декремент --value зменьшує) значення змінної, а потім використовує нове значення у виразі.
alert(`// Інкремент і декремент`);
//
let xB = 5;
const yB = ++xB;
console.log(xB); // 6
console.log(yB); // 6

// Постфіксний інкремент (value++) спочатку використовує поточне значення змінної у виразі, а потім виконує збільшення значення ((декремент --value зменьшує).
//
let xC = 5;
const yC = xC++;
console.log(xC); // 6
console.log(yC); // 5

//
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

//
function calculateEvenTotal(number) {
  let calc = 0;
  while (number > 0) {
    if (number % 2 !== 0) {
      number--;
    }
    calc += number;
    number--;
  }
  return calc;
}

//
function calculateEvenTotalA(number) {
  let calc = 0;
  for (; number > 0; number -= 2) {
    calc += number % 2 ? --number : number;
  }
  return calc;
}

//
function calculateEvenTotalB(number) {
  for (var calc = 0; number > 0; number -= 2) calc += number % 2 ? --number : number;
  return calc;
}

console.log(calculateEvenTotal(7)); // 12 (6 + 4 + 2)
console.log(calculateEvenTotal(3)); // 2 (2 парне)
console.log(calculateEvenTotal(18)); // 90 (18 + 16 + 14 + ... + 2)
console.log(calculateEvenTotal(27)); // 182 (26 + 24 + ... + 2)

// У тернарному операторі вираз calc += виконується після того, як буде обчислено результат умови number % 2 ? --number : number. Тобто, оператор += застосовується в останню чергу, після того як тернарний оператор повертає значення.

// 	робимо % 2 - якщо залишок є - це true =>
// 	робимо ? --number та потім calc += number
//  - якщо залишок 0 тобто false =>
//  робимо : number (тобто нічого) та потім calc += number
