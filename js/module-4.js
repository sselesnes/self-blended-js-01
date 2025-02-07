// init
function alert(args) {
  console.log(args);
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

//* Цикл for...in // for (key in object) { інструкції }
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
let obj = {};
obj.customMethod(); // Це власний метод для всіх об'єктів

// Object — це конструктор, який використовується для створення нових об'єктів.
// Методи, додані безпосередньо до Object, не успадковуються об'єктами, створеними цим конструктором. Ці методи зазвичай є статичними і використовуються для виконання операцій на об'єктах.
// Приклади таких методів включають Object.keys, Object.assign, Object.create тощо.

let obj = Object.create({});
Object.myStaticMethod = function () {
  console.log("Це статичний метод об'єкта");
};

// Object.myStaticMethod(); // Це статичний метод об'єкта
// obj.myStaticMethod(); // Помилка: obj.myStaticMethod не є функцією

///* Масив об’єктів
