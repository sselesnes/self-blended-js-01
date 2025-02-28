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

const book111 = {
  updateAuthor(newAuthor) {
    console.log(this, typeof this); // {updateAuthor: ƒ, name: 'Mango'}
    console.log(this.name, typeof this.name); // Mango
  },
  name: "Mango",
};
book111.updateAuthor("Jacob");

const book112 = {
  updateAuthor: newAuthor => {
    console.log(this, typeof this); // undefined у 'use strict' mode, Window без нього (vscode пише {} type Object)
  },
  name: "Mango",
};
book112.updateAuthor("Jacob");

// Асинхронна функція для виконання fetch і фільтрації
async function fetchAndFilterPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const filteredPosts = (await response.json()).slice(0, 5);
    return filteredPosts;
  } catch (error) {
    console.error("Помилка під час виконання запиту:", error);
  }
}
// Own Перебір власних властивостей
const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

console.log(Object.keys(dog)); // ["name"]
console.log(Object.values(dog)); // ["Mango"]

for (const key of Object.keys(dog)) {
  console.log(key);
} // "name"
// Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта

// Ланцюжки прототипів
const objC = { c: "objC prop" };
const objB = Object.create(objC);
objB.b = "objB prop";
const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA); // { a: "objA prop", [[Prototype]]: objB } [[Prototype]]: objC
console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

//* Класи
class User61 {
  constructor(name, email) {
    // Метод constructor використовується для ініціалізації власних властивостей екземпляра класу.
    this.name = name; // публічні властивості класу
    this.email = email; //this усередині конструктора посилається на новостворений об'єкт.
  }
}
const mango61 = new User61("Mango", "someone@ukr.net"); // публічними властивостями класу є name і email
console.log(mango61); // {}

// Приватні методи та інкапсуляція
class User62 {
  name;
  #email;
  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  getEmail() {
    // Методи класу не потребують ключового слова function.
    return this.#email; // Методи класу не стають власними властивостями екземпляра класу.
  }

  // Публічний метод для зміни електронної пошти
  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log("Invalid email format");
    }
  }

  // Приватний метод для валідації електронної пошти
  #validateEmail(email) {
    return email.includes("@");
  }
}

console.log(User62.prototype); // оголошені методи класу зберігаються у властивісті prototype екземпляра
// У властивості [[Prototype]] екземпляра класу зберігається посилання на властивість prototype класу
const mango62 = new User62({ name: "Mango", email: "someone@ukr.net" });
console.log(mango62.email); // undefined
// console.log(mango62.#email)
// приватні властивості класу не доступні ззовні класу
mango62.changeEmail("sometwo@ukr.net");

class User63 {
  #email;
  #role;

  static roles = {
    admin: "admin",
    editor: "editor",
    basic: "basic",
  };
  static count = 0;
  static increment() {
    User63.count += 1;
    console.log("Total users: ", User63.count);
  }

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
    this.#role = params.role || User63.roles.basic;
    User63.increment();
  }

  get role() {
    return this.#role;
  }
  set role(newRole) {
    this.#role = newRole;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    if (!newEmail.includes("@")) {
      console.log("Invalid email format");
      return;
    }
    this.#email = newEmail;
  }
}

const mango63 = new User63({
  name: "Mango",
  email: "mango@mail.com",
  // role: User63.roles.admin,
});

const mango631 = new User63({
  name: "Mangolo",
  email: "mangolo@mail.com",
  role: User63.roles.admin,
});

console.log(mango63.email); // mango@mail.com
mango63.email = "mango@supermail.com";
console.log(mango63.email); // mango@supermail.com

console.log(mango63.role); // "basic"
mango63.role = User63.roles.editor;
console.log(mango63.role); // "editor"

class MyClass65 {
  static b = 5;
  constructor(value) {
    this.a = value;
  }
}
const instance65 = new MyClass65(10);
console.log(instance65.b); // undefined
console.log(MyClass65.b); // 5

const person66 = { name: "Mango" };
function sayHi(age) {
  return `${this.name} is ${age}`;
}
console.log(sayHi.call(person66, 18));
console.log(sayHi.bind(person66, 18));

class User64 extends User63 {
  constructor(params) {
    super(params); // Виклик конструктора батьківського класу
    this.status = params.status;
  }
}

const mango64 = new User64({
  name: "Mango",
  email: "some@ukr.net",
  role: User63.roles.admin,
  status: "active",
});
console.log(mango64);
//

class User65 extends User63 {
  constructor({ name, ...rest }) {
    super(rest); // Call the parent class constructor with rest of the params
    this.name = name + "!";
  }
}

const mango65 = new User65({
  name: "User",
  email: "new@ukr.net",
  status: "offline",
});

console.log(mango65);
