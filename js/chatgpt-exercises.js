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
  (acc, entity) => (entity.type === "income" ? acc + entity.amount : entity.type === "expense" ? acc - entity.amount : acc),
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
const averageScore = (scores.length && scores.reduce((total, student) => total + student.score, 0) / scores.length) || 0;
console.log(averageScore); // 86.25

//9
const words = ["яблуко", "банан", "кавун", "ананас", "виноград"];
const longestWord = words.reduce((biggest, word) => (word.length > biggest.length ? word : biggest), "");
console.log(longestWord); // "виноград"

//10
const transactions10 = [
  { type: "income", amount: 1000 },
  { type: "expense", amount: 200 },
  { type: "income", amount: 500 },
  { type: "expense", amount: 300 },
];
const balance10 = transactions10.reduce(
  (balance, record) => (record.type === "income" ? balance + record.amount : balance - record.amount),
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
const passedStudents13 = students13.filter(student => student.score > 75).map(student => student.name);
console.log(passedStudents13); // ["Анна", "Віктор"]

//14
const tasks14 = [
  { task: "Зробити домашку", status: "completed" },
  { task: "Прочитати книгу", status: "pending" },
  { task: "Написати код", status: "completed" },
  { task: "Подивитись фільм", status: "pending" },
];

const completedTasks14 = tasks14.filter(task => task.status === "completed").map(task => task.task);
console.log(completedTasks14); // ["Зробити домашку", "Написати код"]
//15
const orders15 = [
  { product: "Ноутбук", quantity: 2 },
  { product: "Смартфон", quantity: 3 },
  { product: "Планшет", quantity: 4 },
];

const orderDetails15 = orders15.map(order => ({ [order.product]: order.quantity }));
// Використовуємо квадратні дужки [order.product] для динамічного створення ключа в об'єкті, який відповідає імені продукту.
console.log(orderDetails15);
