//this
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);
    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }
    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};
console.log(pizzaPalace.order("Smoked"));
console.log(pizzaPalace.order("Big Mike"));

// Метод call()
function greet1(name) {
  console.log(`Hello, ${name}! I am ${this.person}`);
}
const person = "John";
const context = {
  person: "Alice",
};
greet1.call(context, "Bob");

function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}
const mango = {
  username: "Mango",
  room: 27,
};
const poly = {
  username: "Poly",
  room: 191,
};
greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// Метод apply()
greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// Метод bind()
const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
function makeMessage(callback) {
  const username = callback();
  console.log(`Processing an application from ${username}`);
}
makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"
// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')

//
const library = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};
const showBooks = library.logBookCount.bind({ books: 724 });
showBooks();

//

const library1 = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};

function showBooks1(callback) {
  callback();
}
showBooks1(library1.logBookCount.bind(library1)); // 1923
// showBooks1(library1.logBookCount); // TypeError: Cannot read properties of undefined (reading 'books')

// Стрілочні функції
const showThis = () => {
  console.log("this in showThis: ", this);
};
showThis(); // this in showThis: Window

