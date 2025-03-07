// init
function alert(args) {
  console.log(`%c${args}`, "color: yellow;");
}

// короткі властивості (shorthand properties)
alert(`// короткі властивості`);
//
const propName = `rating`;

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  // обчислювальні властивості (computed properties)
  [propName]: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
const firstTag = apartment.tags[0];
const aptRating = apartment["rating"];
apartment.tags.push("trusted");
apartment.rating = 4.7;
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};
console.log(apartment);

// Global `name` is depricated
const name = "Henry Sibola";
console.log(name);

const createHenry = {
  fullName: "Henry Sibola",
  age: 25,
  sex: `male`,
};
console.log(typeof createHenry, createHenry);

//
const emailInputName = "email";
const passwordInputName = "password";
createHenry.credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

//* Цикл for...in
// for (key in object) { інструкції } перебирає Ключі властивостей в об'єктах {}
// використовується для ітерації по ключах (властивостях) об'єкта.
// перебирає всі перераховані властивості об'єкта, включаючи успадковані властивості (якщо вони перераховані) та Object.prototype.

//* Цикл for...of
// for (value of iterable) { інструкції } перебирає Значення масивів [], Set, Map, рядків
// використовується для ітерації по значеннях ітерованих об'єктів - масиви, рядки, Map, Set тощо.
// перебирає значення (values) колекції, а не її ключі (keys).

alert(`// Цикл for...in`);
//

const keys = [];
const values = [];
for (const key in createHenry) {
  keys.push(key);
  values.push(createHenry[key]);
  console.log(key); // Ключ
  console.log(createHenry[key]); // Властивість ключа
}
console.log(keys);
console.log(values);

//* Object. - це конструктор об'єктів (або вбудовані глобальні об'єкти) та набір методів для роботи з ними.
alert(`// Object.keys`);
const keys2 = Object.keys(createHenry); // Повертає масив ключів об'єкта
console.log(keys2);

alert(`// Object.values`);
const values2 = Object.values(createHenry); // Повертає масив значень об'єкта
console.log(values2);

alert(`// Object.entries`);
const entries2 = Object.entries(createHenry); // Повертає масив [ключ, значення]
console.log(entries2);

const mirrorHenry = [];
Object.assign(mirrorHenry, createHenry); // Копіює властивості в інший об'єкт
Object.freeze(mirrorHenry); // Заморожує об'єкт (забороняє зміну значень)
Object.seal(mirrorHenry); // Забороняє додавати/видаляти властивості

// Глибока копія (навіть вкладених об'єктів) окрім вкладених функцій (function) у oldCard, бо JSON.stringify() їх не зберігає
const cleanCard = JSON.parse(JSON.stringify(createHenry, (key, value) => (key ? "" : value)));
console.log(cleanCard);

// Перевіряє, чи є ключ у об'єкті (сучасна версія hasOwnProperty)
alert(`// Перевіряє, чи є ключ у об'єкті`);
const isPasswordExists = Object.hasOwn(createHenry.credentials, passwordInputName);
console.log(isPasswordExists);

// Cтворює новий об'єкт, який успадковує всі властивості та методи від переданого об'єкта proto.
const copyHenry = Object.create(createHenry);
copyHenry.fullName = "John Doe";
alert(`// зміни у копії не змінить прототип`);
console.log(`new ${copyHenry.fullName} vs old ${createHenry.fullName} `); // 'John Doe'

// Додавання методу у Object (функція, що є властивістю об'єкта, яка викликається через цей об'єкт)
copyHenry.greet = function () {
  console.log("Hello!");
};
copyHenry.greet(); // 'Hello!' - доступ до методу через прототип

// Додавання вкладеного method (функція, яка є частиною вкладеного об'єкта, і викликається через цей вкладений об'єкт)
// Різниця в тому, що вкладені методи організовані в більш складну структуру, що дозволяє краще групувати пов'язані дані й функції, тоді як функції, що додаються безпосередньо до об'єкта, є більш прямими та простими.

copyHenry.nested = {
  number: 42,
  method: function () {
    console.log(`Nested method ${arguments}`);
  },
};
copyHenry.nested.method(33);
// при використанні в шаблонному рядку, як у console.log(Nested method ${arguments}), він виводиться як [object Arguments] — тобто як рядок, що представляє об'єкт.Замість цього використання ...args (rest-параметр) дозволяє зібрати аргументи як масив, що дає змогу коректно їх обробляти.

copyHenry.nested = {
  number: 42,
  method: function (...args) {
    console.log(`Nested method ${args}`);
  },
};
copyHenry.nested.method(33);

console.log(copyHenry.nested.number); // 42 - доступ через прототип

// Сворюємо метод об'єкту (прототип) для підрахування всіх values об'єкту
const salaries = { mango: 100, poly: 150, alfred: 80 };

Object.defineProperty(salaries, "totalSalary", {
  value: function () {
    return (
      Object.keys(salaries).length && Object.values(salaries).reduce((acc, num) => acc + num, 0)
    );
  },
  enumerable: false, // Робить метод невидимим при логуванні і не включає його в Object.values()
});

const total = salaries.totalSalary();
console.log(total); // Виведе: 330
console.log(salaries); // Виведе: { mango: 100, poly: 150, alfred: 80 }

// Object.prototype — це об'єкт, від якого успадковуються всі об'єкти в JavaScript.
// Методи, додані до Object.prototype, стають доступними для всіх об'єктів. Наприклад, методи hasOwnProperty, toString і valueOf є методами Object.prototype.
// Якщо ви додасте метод до Object.prototype, він буде доступний для всіх об'єктів, що може бути корисно, але також може призвести до конфліктів імен, якщо не бути обережним.

Object.prototype.customMethod = function () {
  console.log("Це власний метод для всіх об'єктів");
};
let objC = {};
objC.customMethod(); // Це власний метод для всіх об'єктів

// Якщо Ви не хочете, щоб customMethod впливав на всі об'єкти, видаліть його:
// delete Object.prototype.customMethod;
// Але якщо customMethod потрібен для інших об'єктів, краще використовувати методи for...of або hasOwnProperty.

// Object — це конструктор, який використовується для створення нових об'єктів.
// Методи, додані безпосередньо до Object, не успадковуються об'єктами, створеними цим конструктором. Ці методи зазвичай є статичними і використовуються для виконання операцій на об'єктах.
// Приклади таких методів включають Object.keys, Object.assign, Object.create тощо.

let objS = Object.create({});
Object.myStaticMethod = function () {
  console.log("Це статичний метод об'єкта");
};
Object.myStaticMethod(); // Це статичний метод об'єкта
// obj.myStaticMethod(); // Помилка: obj.myStaticMethod не є функцією

///* Масиви об’єктів
// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
//
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

//
alert(`for value of object => Colors1`);
const hexColors1 = [];
const rgbColors1 = [];

for (const color of colors) {
  console.log(color);
  if ("hex" in color) hexColors1.push(color.hex);
  if ("rgb" in color) rgbColors1.push(color.rgb);
}

//
alert(`for index in array => Colors2`);
const hexColors2 = [];
const rgbColors2 = [];

for (const color in colors) {
  if (Object.prototype.hasOwnProperty.call(colors, color)) {
    console.log(color);
    if ("hex" in colors[color]) hexColors2.push(colors[color].hex);
    if ("rgb" in colors[color]) rgbColors2.push(colors[color].rgb);
  }
}
alert(`Colors1 [${hexColors1.length}] == Colors2 [${hexColors2.length}]`);

// JSON (JavaScript Object Notation), XML (eXtensible Markup Language), бінарна серіалізація.
// Серіалізація дозволяє зберігати складні об'єкти в текстовому або бінарному форматі, який можна легко передати або зберегти.
// JSON.parse не може обробити функції, undefined, або спеціальні типи даних, такі як Date або RegExp.Якщо ваш об'єкт містить такі дані, вони будуть втрачені при серіалізації та десеріалізації.

// Серіалізація об'єкта у string для передачі
const objectUser = { name: "Alice", age: 25 };
const jsonString = JSON.stringify(objectUser);
console.log(jsonString); // {"name":"Alice","age":25}

// Десеріалізація - серіалізованому string повернуто формат об'єкта
const objectParse = JSON.parse(jsonString);
console.log(objectParse); // {name: `Alice`, age: 25}

// шукає об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
//
function getProduct(productName, func) {
  // example 1
  //   for (const product of products) {
  //     if (product.name === productName) return product.price;
  //   }
  //   return null;

  // example 2
  // const product = products.find((product) => product.name === productName);
  // return product ? product.price : null;

  switch (func) {
    case `avgPrice`:
      // ми отримуємо відповідь у вигляді об'єкта та робимо його деструктуризацію у окремі змінні total та count
      const { total, count } = products.reduce(
        (acc, product) => {
          if (product.name === productName) {
            acc.total += product.price;
            acc.count += 1;
          }
          return acc;
        },
        // .reduce (acc, product) => {expression}, {акумулятор acc},
        // другий аргумент .reduce це аккумулятор acc, якому на початку метода .reduce присвоюється
        // значення acc = {total: 0, count: 0}, а на виході .reduce він через деструктурізацію повернесться у змінні total та count
        { total: 0, count: 0 }
      );
      return Math.floor(total / count);

    case `price`:
      return (products.find(product => product.name === productName) || { price: null }).price;
    // якщо знайдено
    // return {product}.price з запису / entity, наприклад {name: "Radar", price: 1300, quantity: 4} - тобто price (typeof number)
    // якщо незнайдено
    // return {price: null}.price - тобто null
    case `name`:
      return products.filter(product => product.name === productName);

    default:
      if (typeof func === "number") {
        products.map(product => {
          if (product.name === productName) {
            product.price = func;
          }
        });
      }
      return getProduct(productName, `name`);
    // змінили всі ціни з name та робимо рекурсівний запит всіх записів name щоб поврнути у вигляді відповіді при typeof func = number
  }
}

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Grip", price: 1100, quantity: 3 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Grip", price: 1500, quantity: 4 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
  { name: "Droid", price: 700, quantity: 3 },
];

alert(`object. filter reduce find map`);
console.log(getProduct("Droid", `price`)); // повертає ціну)
console.log(getProduct("Grip", `name`)); // повертає всі записи name)
console.log(getProduct("Droid", 1000)); // змінює всі ціни name )
console.log(getProduct("Grip", `avgPrice`)); // обчислення середньої ціни

// Деструктурізація - це синтаксис, який дозволяє розпакувати властивості об'єкта або елементи масиву в окремі змінні
// const { count, total }
// та переназначення внутрішніх змінніх на зовнішні, якщо є потреба
// const { count: countA, total: totalA }
alert(`Деструктурізація `);
// Стрілкова самовиконувана функція (IIFE - Immediately Invoked Function Expression).
// Ця функція створюється і одразу викликається, тому її ще називають самовиконуваною функцією (IIFE).
// (() => { Тіло функції } )();
const { count: countA, total: totalA } = (() => {
  let count = 10;
  let total = 0;
  for (; count > 0; total += count--) {}
  return { count, total }; // Повертаємо результати у вигляді об'єкта
})();

console.log(countA, totalA); //

// Числа Фібоначчі — це послідовність, у якій: Перші два числа — 0 і 1. Кожне наступне число дорівнює сумі двох попередніх.
// Напиши функцію fibonacci(n), яка приймає число n і повертає масив із перших n чисел Фібоначчі.
// (c)chatgpt
alert(`fibonacci !розібрати`);
const fibonacci = n =>
  [...Array(n)].map((_, i, arr) => (arr[i] = (i && arr[i - 1] + arr[i - 2]) || i));
// function fibonacci(n) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr.push(i < 2 ? i : arr.at(-1) + arr.at(-2));
//   }
//   return arr;
// }
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

// Напиши функцію maxDigit(n), яка приймає додатне ціле число n і повертає його найбільшу цифру.
// Вимоги: Використовуй цикл (while або for). Не перетворюй число в рядок (без .toString() або .split() тощо).
// (c)chatgpt
alert(`maxDigit %10 та рекурсия`);
function maxDigit(n) {
  const last = n % 10;
  const next = Math.floor(n / 10);
  return (next == 0 && last) || Math.max(last, maxDigit(next)); // Рекурсія
}
// function maxDigit(n) {
//   let max = 0;
//   while (n > 0) {
//     n % 10 > max ? (max = n % 10) : (n = Math.floor(n / 10));
//   }
//   return max;
// }
console.log(maxDigit(123456789)); // 9

// Функція приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
//
alert(`getAllPropValues`);
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  // example 4
  return products.reduce(
    (AllPropValues, object) =>
      propName in object ? [...AllPropValues, object[propName]] : AllPropValues,
    []
  );

  // example 3
  // return products.reduce((AllPropValues, object) => {(propName in object) && AllPropValues.push(object[propName]); return AllPropValues;}, []);

  // example 2
  // return products.map(object => object[propName]).filter(value => value !== undefined);
  //
  // products.map(object => object[propName]) ми сворюємо масив з object[propName] або з undefined якщо у масиві об'єктів нема propName і одразу передаємо цей масив до .filter - який створює з нього новий масив але без undefined

  // exaple 1.1
  // const result = []
  // for (const object of products) {
  //       (propName in object) && (result.push(object[propName]))}

  // exaple 1
  // const result = []
  // for (const object of products) {
  //      (object[propName] !== undefined) && result.push(object[propName])}
  return result;
}
console.log(getAllPropValues("name")); //    повертає ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("price")); //    повертає [1300, 2700, 400, 1200]

//
alert(`calculateTotalPrice .reduce`);
function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  return products.reduce(
    (totalAmount, product) =>
      product.name === productName ? product.price * product.quantity : totalAmount,
    `Product ${productName} not found!`
  );
  // Accumulator - це змінна яка задається другим параметром метода .reduce (.reduce(accumulator, key) => (expression), accumulatorDefault). Кожна ітерація .reduce() _може_ змінити акумулятор (в даному випадку це totalAmount) і якщо після першого збігу акумулятор змінився то його значення зберігається до останньої ітерації. Таким чином, якщо перший продукт знайдений, accumulator тримає результат, а в нашому випадку в наступних ітераціях вже не змінюється адже не буде збігов по productName.
}
console.log(calculateTotalPrice("Grip"));
console.log(calculateTotalPrice("Robot"));

///* Методи об'єкта
//
alert(`atTheOldToad`);
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    return this.potions.reduce((totalPrice, potion) => totalPrice + potion.price, 0);
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      potion.name == oldName && (potion.name = newName);
    }
  },
};
atTheOldToad.addPotion({ name: "Power potion", price: 270 });
atTheOldToad.updatePotionName(`Stone skin`, `May flower`);
console.log(atTheOldToad.getPotions());
alert(atTheOldToad.getTotalPrice());

///* spread та rest
//
alert(`// spread та rest`);
//
function addOverNum(value, ...args) {
  // example 1
  // function addOverNum(value, ...args) {
  //   let total = 0
  //   for (const index of args) {
  //       index > value && (total += index)
  //   }
  //   return total
  // }

  // example 2
  // return args.reduce((total, currentNum) => value < currentNum ? total + currentNum : total, 0)}

  // example 2.1
  return args.reduce(
    (total, currentNum) => (value < currentNum && total + currentNum) || total,
    0
  );
}
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 218
//
alert(`// getExtremeScores`);
//
function getExtremeScores(scores) {
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  const object = { best: max, worst: min };
  const array = [...scores, max, min];
  console.log(array);
  console.log(object);
  return object;
}
getExtremeScores([89, 64, 42, 17, 93, 51, 26]);

//
//
function calcAverageCalories(days) {
  return days.length === 0
    ? 0
    : days.reduce((sumCalories, currentDay) => sumCalories + currentDay.calories, 0) /
        days.length;
}

alert(
  `Calories average per day: ${calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 },
  ])}`
);
alert(`Calories average with empty object: ${calcAverageCalories([])}`);

//
alert(`// Object конструктор`);
//
// Car - це конструктор - визначає функцію-конструктор для створення об'єктів
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.greetings = function (args) {
    return `xxx`;
  };
}

// carNewParams - це об'єкт, який не є прототипом
const carNewParams = {
  make: "DeLorean",
  model: "DMC-12",
  year: 1981,
  greetings: function (args) {
    console.log(`Привіт ${args}`);
    return this instanceof Car;
  },
};
// Оператор instanceof перевіряє ланцюг прототипів: Якщо об'єкт є екземпляром конструктора, то в нього є посилання на прототип конструктора в ланцюзі прототипів. Якщо в ланцюгу прототипів знайдеться зазначений конструктор, то перевірка повертає true, в іншому випадку — false.

// Додавання методу до прототипу конструктора Car - метод буде доступний лише для екземплярів, створених за допомогою цього конструктора.
Car.prototype.goodEvening = function (args) {
  console.log(`Доброго вечора ${args}`);
  return;
};

// console.log(Car.greetings("world")); //
// Метод, доданий до прототипу через Car.prototype.greetings, доступний лише для екземплярів конструктора, а не для самого конструктора.

//
const carTemp = new Car("Tesla", "Model S", 2020);
alert(carTemp.greetings("world")); // xxx
alert(carTemp.goodEvening("time traveler")); // Доброго вечора time traveler

//
const cars = [];
cars.push(new Car("Eagle", "Talon TSi", 1993));
cars.push({ ...cars[0], ...carNewParams });
cars.push(Object.assign(new Car(), cars[0], carNewParams, { make: "Sonic" }));
cars.push(
  Object.assign(Object.create(Object.getPrototypeOf(cars[0])), cars[0], carNewParams, {
    make: "Stellar",
    year: cars[0].year,
    model: cars[0].model,
  })
);

alert(`// Перевірка методу Object після створення`);
//
function carsTest() {
  return cars.reduce((acc, entry, entryIndex, inputArray) => {
    acc++;
    console.log(`Запис ${entryIndex} / ${inputArray.length - 1}`);
    if (typeof entry.greetings === "function") {
      console.log(`Повернула ${entry.greetings(`світ!`)}`);
    }
    return acc;
  }, 0);
}

//
function carsAvgYear() {
  return cars.reduce((acc, car) => acc + car.year, 0) / cars.length;
}

alert(`Total cars entries ${carsTest()}`); // Total cars entries 4
alert(`The average year of the cars is ${carsAvgYear()}`); // The average year of the cars is 1987

const carsSorted1 = cars.sort((a, b) => a.year - b.year);
console.log(carsSorted1.every(car => car instanceof Car)); // false

const carsSorted2 = cars.map(car => Object.assign(new Car(), car));
// Метод map() проходить по кожному елементу cars і повертає новий масив.
// Object.assign(new Car(), car) cтворює новий об'єкт Car() (без аргументів make, model, year)
// Копіює всі властивості car у новий об'єкт Car.

const carsSorted3 = carsSorted2.sort((a, b) => a.year - b.year);
// sort((a, b) => a.year - b.year) відсортовує новий масив за year у порядку зростання.
// Масив вже містить нові об'єкти Car, тому .sort() працює без змін.

const carsSorted4 = [...cars].sort((a, b) => a.year - b.year);
console.log(carsSorted4.every(car => car instanceof Car)); // false
//При використанні оператору spread (...) для копіювання масиву об'єктів, ви не копіюєте методи, що знаходяться в прототипі. Але, оскільки метод greetings знаходиться безпосередньо в кожному об'єкті (в середині конструктора), він все одно буде доступний після копіювання об'єктів, навіть якщо ви використовуєте spread.

console.log(carsSorted3.every(car => car instanceof Car)); // true
// Всі об'єкти залишаються instanceof Car, тому every(car => car instanceof Car) === true.
console.log(new Car().greetings()); // xxx
console.log(carsSorted1[0].greetings()); // Привіт undefined
console.log(carsSorted2[0].greetings(`console`)); // Привіт console
console.log(carsSorted3[0].greetings()); // Привіт undefined
console.log(carsSorted4[0].greetings()); // Привіт undefined
console.log(carsSorted4);

// Додавання методу до прототипу конструктора Car - метод буде доступний лише для екземплярів, створених за допомогою цього конструктора.
Car.prototype.goodEvening = function (args) {
  return `Bad ${args}`;
};

const car1 = new Car("Tesla", "Model S", 2020);
const car2 = Object.assign(new Car(), car1, carNewParams);
const car3 = { ...car2 }; // spread (...) створює поверхневу копію об'єкта, копіюючи лише властивості та методи, які безпосередньо належать об'єкту

console.log(car1.greetings(), "world!"); // Good world!
console.log(car1.goodEvening("time traveler")); // Bad time traveler
console.log(car2.greetings()); // Ugly car

console.log(car3.greetings()); // Ugly car - тобто Spread копіює всі властивості та методи, які безпосередньо належать об'єкту car2, але не прототипи

// console.log(car3.goodEvening()); // error `car3.goodEvening is not a function` - Spread не копіює прототипи об'єкту

// console.log(Car.greetings("world")); // error - метод, доданий до прототипу через Car.prototype.greetings, доступний лише для екземплярів конструктора, а не для самого конструктора.

function exampleHuman() {
  const human = {
    name: `Petro`,
    surname: `Petrenko`,
    age: 22,
  };

  console.log(human.name);

  const varSurname = `surname`;
  console.log(human[varSurname]);

  const { name } = human;
  console.log(name);

  const values = Object.values(human);
  console.log(values[2]);

  for (let index in human) console.log(index + `: ` + human[index]);

  Object.keys(human)
    .filter(key => key !== `age`)
    .forEach(key => console.log(key + `: ` + human[key]));
}
exampleHuman();
