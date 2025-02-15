//1
const students = [
  { name: "Анна", age: 22 },
  { name: "Борис", age: 24 },
  { name: "Віктор", age: 20 },
];
const upperCaseNames = students.map((student) => student.name.toUpperCase());
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
const activeUserNames = users
  .filter((user) => user.isActive)
  .map((user) => user.name);
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
const longBooks = books
  .filter((book) => book.pages > 200)
  .map((book) => book.title);
// const longBooks = books.filter(book => book.pages > 200).map(book => book.title);
console.log(longBooks); // ["Книга 2", "Книга 3"]

//6
const people = [
  { name: "Олександр", age: 30 },
  { name: "Марина", age: 25 },
  { name: "Дмитро", age: 35 }
];
// const ageByName = people.reduce((acc, man) => {
//   acc[man.name] = man.age; // Додаємо пару "ключ:значення"
//   return acc; // Повертаємо acc для наступної ітерації
// }, {}); // Початкове значення - порожній об'єкт

const ageByName = people.reduce((acc, man) => (acc[man.name] = man.age, acc), {});
// (expression, acc) — Повертаємо acc для наступної ітерації
console.log(ageByName); // { Олександр: 30, Марина: 25, Дмитро: 35 }

//7
