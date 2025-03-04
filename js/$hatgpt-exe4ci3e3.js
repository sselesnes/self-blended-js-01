// init
const alert = (...args) => console.log(`%c${args}`, "color: yellow;");

//1
const students = [
  { name: "Анна", age: 22 },
  { name: "Борис", age: 24 },
  { name: "Віктор", age: 20 },
];
const upperCaseNames = students.map(student => student.name.toUpperCase());
console.log(upperCaseNames); // ["АННА", "БОРИС", "ВІКТОР"]

//2
const products = [
  { name: "Телефон", price: 12000 },
  { name: "Ноутбук", price: 32000 },
  { name: "Планшет", price: 15000 },
];
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log(totalPrice); // 59000

//3
const users = [
  { name: "Іван", isActive: true },
  { name: "Марія", isActive: false },
  { name: "Олексій", isActive: true },
  { name: "Наталя", isActive: false },
];
const activeUserNames = users.filter(user => user.isActive).map(user => user.name);
console.log(activeUserNames); // ["Іван", "Олексій"]

//4
// сума "income" мінус сума всіх "expense").
const transactions = [
  { amount: 5000, type: "income" },
  { amount: 2000, type: "expense" },
  { amount: 3000, type: "income" },
  { amount: 1000, type: "expense" },
];
const balance = transactions.reduce(
  (acc, entity) =>
    entity.type === "income"
      ? acc + entity.amount
      : entity.type === "expense"
      ? acc - entity.amount
      : acc,
  0
);

console.log(balance); // 5000

//5
const books = [
  { title: "Книга 1", pages: 150 },
  { title: "Книга 2", pages: 250 },
  { title: "Книга 3", pages: 300 },
  { title: "Книга 4", pages: 180 },
];
const longBooks = books.filter(book => book.pages > 200).map(book => book.title);
// const longBooks = books.filter(book => book.pages > 200).map(book => book.title);
console.log(longBooks); // ["Книга 2", "Книга 3"]

//6
const people = [
  { name: "Олександр", age: 30 },
  { name: "Марина", age: 25 },
  { name: "Дмитро", age: 35 },
];
// const ageByName = people.reduce((acc, man) => {
//   acc[man.name] = man.age; // Додаємо пару "ключ:значення"
//   return acc; // Повертаємо acc для наступної ітерації
// }, {}); // Початкове значення - порожній об'єкт

const ageByName = people.reduce((acc, man) => ((acc[man.name] = man.age), acc), {});
// (expression, acc) — Повертаємо acc для наступної ітерації
console.log(ageByName); // { Олександр: 30, Марина: 25, Дмитро: 35 }

//7
const orders = [
  { product: "Ноутбук", quantity: 2 },
  { product: "Смартфон", quantity: 5 },
  { product: "Планшет", quantity: 3 },
];
const totalQuantity = orders.reduce((total, order) => total + order.quantity, 0);
console.log(totalQuantity); // 10

//8
const scores = [
  { name: "Анна", score: 90 },
  { name: "Борис", score: 75 },
  { name: "Віктор", score: 85 },
  { name: "Діана", score: 95 },
];
const averageScore =
  (scores.length &&
    scores.reduce((total, student) => total + student.score, 0) / scores.length) ||
  0;
console.log(averageScore); // 86.25

//9
const words = ["яблуко", "банан", "кавун", "ананас", "виноград"];
const longestWord = words.reduce(
  (biggest, word) => (word.length > biggest.length ? word : biggest),
  ""
);
console.log(longestWord); // "виноград"

//10
const transactions10 = [
  { type: "income", amount: 1000 },
  { type: "expense", amount: 200 },
  { type: "income", amount: 500 },
  { type: "expense", amount: 300 },
];
const balance10 = transactions10.reduce(
  (balance, record) =>
    record.type === "income" ? balance + record.amount : balance - record.amount,
  0
);
console.log(balance10); // 1000

//11
const people11 = [
  { name: "Олександр", age: 30 },
  { name: "Марина", age: 25 },
  { name: "Дмитро", age: 35 },
  { name: "Ірина", age: 40 },
];
const averageAge = people11.reduce((total, entity) => total + entity.age, 0) / people11.length;
console.log(averageAge); // 32.5

//12
const orders12 = [
  { product: "Ноутбук", quantity: 2 },
  { product: "Смартфон", quantity: 3 },
  { product: "Планшет", quantity: 4 },
  { product: "Мишка", quantity: 5 },
];
const totalQuantity12 = orders12.reduce((acc, order) => acc + order.quantity, 0);
console.log(totalQuantity12); // 14

//13
const students13 = [
  { name: "Анна", score: 80 },
  { name: "Борис", score: 70 },
  { name: "Віктор", score: 85 },
  { name: "Діана", score: 60 },
];
const passedStudents13 = students13
  .filter(student => student.score > 75)
  .map(student => student.name);
console.log(passedStudents13); // ["Анна", "Віктор"]

//14
const tasks14 = [
  { task: "Зробити домашку", status: "completed" },
  { task: "Прочитати книгу", status: "pending" },
  { task: "Написати код", status: "completed" },
  { task: "Подивитись фільм", status: "pending" },
];

const completedTasks14 = tasks14
  .filter(task => task.status === "completed")
  .map(task => task.task);
console.log(completedTasks14); // ["Зробити домашку", "Написати код"]
//15
const orders15 = [
  { product: "Ноутбук", quantity: 2 },
  { product: "Смартфон", quantity: 3 },
  { product: "Планшет", quantity: 4 },
];

const orderDetails15 = orders15.map(order => ({ [order.product]: order.quantity }));
// Використовуємо квадратні дужки [order.product] для динамічного створення ключа в об'єкті, який відповідає імені продукту.
console.table(orderDetails15);

//16
const users16 = [
  { name: "Анна", friends: ["Олег", "Ірина"] },
  { name: "Борис", friends: ["Оксана", "Петро"] },
  { name: "Віктор", friends: ["Марина", "Стас"] },
];
const allFriends16 = users16.flatMap(friend => friend.friends);
console.log(allFriends16);
// ["Олег", "Ірина", "Оксана", "Петро", "Марина", "Стас"]

//17
const products17 = [
  { name: "Телефон", price: 200 },
  { name: "Ноутбук", price: 800 },
  { name: "Планшет", price: 300 },
];
const priceByName17 = products17.reduce(
  (acc, product) => ((acc[product.name] = product.price), acc),
  {}
);
console.log(priceByName17); // { Телефон: 200, Ноутбук: 800, Планшет: 300 }

//18
const students18 = [
  { name: "Анна", scores: [90, 85, 88] },
  { name: "Борис", scores: [70, 75, 78] },
  { name: "Віктор", scores: [76, 80.1, 84] },
];
//example 1
const topStudents181 = (students, lvl) =>
  students
    .map(student => ({
      name: student.name,
      average: student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length,
    }))
    .filter(student => student.average > lvl)
    .map(({ name }) => name);
console.log(topStudents181(students18, 80));

//example 2
const topStudents182 = (students, lvl) =>
  students
    .filter(
      student =>
        student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length > lvl
    )
    .map(student => student.name);
console.log(topStudents182(students18, 80));
// ["Анна", "Віктор"]

//19 не вирішив за допомогою .reduce
const products19 = [
  { category: "electronics", price: 1200 },
  { category: "clothing", price: 200 },
  { category: "electronics", price: 800 },
  { category: "clothing", price: 100 },
  { category: "food", price: 50 },
];

const totalPriceByCategory19 = raw =>
  raw.reduce(
    (unique, raw) => ((unique[raw.category] = (unique[raw.category] || 0) + raw.price), unique),
    {}
  );
console.table(totalPriceByCategory19(products19));
// { electronics: 2000, clothing: 300, food: 50 }
// Оператор || 0 тут підстраховує від undefined, щоб уникнути помилок, якщо у unique ще не існує поточної категорії raw.category

//20
const students20 = [
  { name: "Анна", scores: [80, 85, 90] },
  { name: "Віктор", scores: [60, 70, 80] },
  { name: "Олександр", scores: [90, 95, 100] },
];
const avgScore20 = students =>
  students.map(student => ({
    name: student.name,
    avgScore: Math.floor(
      student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length
    ),
  }));
console.table(avgScore20(students20));

// 21 не вирішив - плутанина з назвами ключів у новому масиві
const orders21 = [
  { category: "electronics", quantity: 2, price: 100 },
  { category: "clothing", quantity: 3, price: 50 },
  { category: "electronics", quantity: 1, price: 200 },
  { category: "clothing", quantity: 2, price: 60 },
  { category: "spare", quantity: 1, price: 50 },
];

const totalPriceByCategory21 = orders =>
  orders.reduce((acc, { category, quantity, price }) => {
    // деструктуризація об'єкта - розкладається на окремі змінні
    let existingCategory = acc.find(item => item.category === category);
    // Шукаємо, чи є вже об'єкт з цією категорією в акумуляторі
    if (existingCategory) {
      // Якщо є, додаємо в нього вартість поточного замовлення
      existingCategory.price += quantity * price;
    } else {
      // Якщо немає, створюємо новий об'єкт і додаємо в масив
      acc.push({ category, price: quantity * price });
    }
    return acc;
  }, []); // Початкове значення - порожній масив
console.table(totalPriceByCategory21(orders21));

const totalPriceByCategory211 = orders =>
  orders.reduce((acc, { category, quantity, price }) => {
    acc.find(
      item =>
        (orders.category !== category && acc.push({ category, price: quantity * price })) ||
        (orders.price += quantity * price)
    );
  }, []);
console.table(totalPriceByCategory21(orders21));

//22
const orders22 = [
  { product: "apple", quantity: 4 },
  { product: "banana", quantity: 2 },
  { product: "apple", quantity: 1 },
  { product: "orange", quantity: 3 },
  { product: "banana", quantity: 5 },
];
const totalQuantityByProduct22 = orders =>
  orders.reduce(
    (acc, { product, quantity }) => ((acc[product] = (acc[product] || 0) + quantity), acc),
    {}
  );
console.table(totalQuantityByProduct22(orders22));

//
const toCamelCase = str =>
  str
    .split(/[-_]/)
    .reduce(
      (acc, word, index) =>
        acc +
        ((index && word.charAt(0).toUpperCase()) || word.charAt(0).toLowerCase()) +
        word.slice(1),
      ""
    );

console.log(toCamelCase("the-stealth-warrior")); //"theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "theStealthWarrior"
console.log(toCamelCase("the_stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("A-B-C")); // "aBC"

//
const getVowelCount1 = sentence => sentence.match(/[aeiouAEIOU]/g).length;
console.log(getVowelCount1(`Lorem, ipsum. Dolor`)); // 6

const getVowelCount2 = sentence => sentence.replace(/[^aeiouAEIOU]/g, "").length;
console.log(getVowelCount2(`Lorem, ipsum. Dolor`)); // 6
