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
// for (key in object) { інструкції }
// використовується для ітерації по ключах (властивостях) об'єкта.
// перебирає всі перераховані властивості об'єкта, включаючи успадковані властивості (якщо вони перераховані) та Object.prototype.

//* Цикл for...of
// for (value of iterable) { інструкції }
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
const cleanCard = JSON.parse(
  JSON.stringify(createHenry, (key, value) => (key ? "" : value))
);
console.log(cleanCard);

// Перевіряє, чи є ключ у об'єкті (сучасна версія hasOwnProperty)
alert(`// Перевіряє, чи є ключ у об'єкті`);
const isPasswordExists = Object.hasOwn(
  createHenry.credentials,
  passwordInputName
);
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
      Object.keys(salaries).length &&
      Object.values(salaries).reduce((acc, num) => acc + num, 0)
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

///* Масив об’єктів

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
    // ми отримуємо відповідь у вигляді об'єкта та робимо деструктуризацію total та count у окремі змінні
    const { total, count } = products.reduce((acc, product) => {
          if (product.name === productName || acc.count === 0) {acc.total += product.price; acc.count += 1;}
          return acc;
      },
    // перший аргумент .reduce це аккумулятор acc, другий це масив
    // .reduce (acc, product) => {expression}, {початковий акумулятор acc}
    // тобто { total: 0, count: 0 } це буде acc на виході .reduce та він піде у const { total, count } наприкінці
      { total: 0, count: 0 }
  );
  return Math.floor(total / count);
       
    case `price` :
        return (products.find((product) => product.name === productName) || { price: null }).price;

    case `name` :
        return (products.filter((product) => product.name === productName));

    default:
        if (typeof func === "number") { 
        products.map((product) => {if (product.name === productName) {product.price = func;} });
        }      
        return getProduct(productName, `name`)
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

alert(`object. filter reduce find map`)
console.log(getProduct("Droid", `price`)); // повертає ціну)
console.log(getProduct("Grip", `name`)); // повертає всі записи name)
console.log(getProduct("Droid", 1000)); // змінює всі ціни name )
console.log(getProduct("Grip", `avgPrice`)); // обчислення середньої ціни

// Деструктурізація - це синтаксис, який дозволяє розпакувати властивості об'єкта або елементи масиву в окремі змінні
// const { count, total }
// та переназначення внутрішніх змінніх на зовнішні, якщо є потреба
// const { count: countA, total: totalA }
alert(`деструктурізація `)
// Стрілкова самовиконувана функція (IIFE - Immediately Invoked Function Expression).
// Ця функція створюється і одразу викликається, тому її ще називають самовиконуваною функцією (IIFE).
// (() => { Тіло функції } )();
const { count: countA, total: totalA } = (() => {
  let count = 10;
  let total = 0;
  for (; count > 0; total += count--) {}
  return { count, total }; // Повертаємо об'єкт для деструктуризації
})();

console.log(countA, totalA); //