//1
function doubleNumbers1(numbers) {
  const evenNumbers = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });
  return evenNumbers;
}
console.log(doubleNumbers1([1, 2, 3, 4, 5, 6]));

//1.1
const doubleNumbers2 = numbers =>
  numbers.reduce((acc, num) => (num % 2 === 0 ? acc.concat(num > 4 ? num * 2 : num) : acc), []);
console.log(doubleNumbers2([1, 2, 3, 4, 5, 6, 7, 8]));

//2
const doubleEvenNumbersOverFour = numbers =>
  numbers.filter(num => num % 2 === 0).map(num => (num > 4 ? num * 2 : num));
console.log(doubleEvenNumbersOverFour([1, 2, 3, 4, 5, 6, 7, 8]));

//3
const users3 = [
  { name: "Alex", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Charlie", isActive: true },
  { name: "Dave", isActive: true },
];
// Порахуй кількість true і false для ключа "isActive".
const countIsActive3 = users =>
  users.reduce(
    ({ online, offline }, user) =>
      user.isActive ? { online: online + 1, offline } : { online, offline: offline + 1 },
    { online: 0, offline: 0 }
  );
console.log(countIsActive3(users3));

//3.1
const countIsActive31 = users => {
  const online = users.filter(user => user.isActive).length;
  return {
    online: online,
    offline: users.length - online,
  };
};
console.log(countIsActive31(users3));

//3.3
const items33 = [
  { label: "A", enabled: true },
  { label: "B", enabled: false },
  { label: "C" }, // немає ключа enabled
  { label: "D", enabled: true },
  { label: "E", enabled: undefined }, // значення undefined
];
// Порахуй кількість true і false для ключа "enabled", враховуючи _тільки_ наявні boolean значення.
const countIsEnabled33 = items => {
  const enabled = items.filter(item => item.enabled).length;
  return {
    enabled: enabled,
    disabled: items.length - enabled,
  };
};
console.log(countIsEnabled33(items33));

//3.31
const countIsEnabled331 = items =>
  items.reduce(
    (acc, item) => {
      if (item.enabled === true) acc.enabled++;
      else if (item.enabled === false) acc.disabled++;
      return acc;
    },
    { enabled: 0, disabled: 0 }
  );
console.log(countIsEnabled331(items33));

//5
const countEnabled50 = items =>
  items.reduce(
    (acc, item) => (
      item.enabled === false ? ++acc.disabled : item.enabled ? ++acc.enabled : acc, acc
    ),
    { enabled: 0, disabled: 0 }
  );
console.log(countEnabled50(items33));

//4
const tasks4 = [
  { id: 1, completed: false },
  { id: 2, completed: true },
  { id: 3, completed: false },
  { id: 4, completed: true },
  { id: 5, completed: true },
];
// Порахуй кількість true і false для ключа "completed".

const countCompleted4 = tasks => {
  const result = { completed: 0, uncompleted: 0 };
  tasks.forEach(task => (task.completed ? result.completed++ : result.uncompleted++));
  return result;
};
console.log(countCompleted4(tasks4));

// 6
const products6 = [
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "Shirt", category: "Clothing", price: 25 },
  { name: "Phone", category: "Electronics", price: 800 },
  { name: "Jacket", category: "Clothing", price: 100 },
  { name: "TV", category: "Electronics", price: 1500 },
];

const groupAndSort60 = products => {
  return products.reduce((group, product) => {
    if (!group[product.category]) {
      group[product.category] = [];
    }
    group[product.category].push(product);
    group[product.category].sort((a, b) => a.price - b.price);
    return group;
  }, {});
};
console.table(groupAndSort60(products6));

const groupAndSort61 = products => {
  const group = products.reduce((group, product) => {
    if (!group[product.category]) {
      group[product.category] = [];
    }
    group[product.category].push(product);
    return group;
  }, {});

  for (const category in group) {
    group[category].sort((a, b) => a.price - b.price);
  }
  return group;
};
console.table(groupAndSort61(products6));

const groupAndSort621 = products => {
  const group = products.reduce((group, product) => {
    if (!group[product.category]) group[product.category] = [];
    group[product.category].push(product);
    return group;
  }, {});

  console.log(Object.keys(group));

  Object.keys(group).forEach(category => group[category].sort((a, b) => a.price - b.price));
  return group;
};
console.table(groupAndSort621(products6));

const groupAndSort622 = products => {
  const group = products.reduce((group, product) => {
    if (!group[product.category]) group[product.category] = [];
    group[product.category].push(product);
    return group;
  }, {});

  Object.values(group).forEach(items => items.sort((a, b) => a.price - b.price));
  return group;
};
console.table(groupAndSort622(products6));

//7
const products7 = [
  {
    name: "Wireless Mouse",
    price: 29.99,
    stock: 15,
    description: "High-quality wireless mouse with ergonomic design",
  },
  {
    name: "Gaming Keyboard",
    price: 89.5,
    stock: 0,
    description: "RGB backlit gaming keyboard with customizable keys",
  },
  {
    name: "Laptop Stand",
    price: 45.0,
    stock: 8,
    description: "Adjustable laptop stand for better ergonomics",
  },
];
const formatProductText70 = products =>
  products.map(({ name, price, stock, description }) => ({
    formattedName:
      name[0].toUpperCase() + name.toLowerCase().slice(1, 14) + (name.length > 15 ? "..." : ""),
    formattedPrice: `${price.toFixed(2)}`,
    stockStatus: stock > 0 ? `In stock: ${stock} items` : `Out of stock`,
    formattedDescription: description.slice(0, 30) + (description.length > 30 ? "..." : ""),
  }));
console.log(formatProductText70(products7));

// 8.1
const obj81 = {
  name: "Test",
  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  },
};
obj81.sayHello(); // "Hello, Test"

obj81.sayHello.call(obj81);
obj81.sayHello.apply(obj81);
const fnBind = obj81.sayHello.bind(obj81);

// const fn = obj81.sayHello;
// Чому fn() виводить undefined? Як можна зафіксувати this для fn, щоб він завжди посилався на obj?
fnBind(); // "Hello, undefined" (глобальний контекст)

// 8.2
const obj82 = {
  name: "ArrowTest",
  // sayHello: () => {
  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  },
};
obj82.sayHello(); // "Hello, undefined"
// Чому стрілочна функція не бачить name з obj82? Як this працює в стрілочних функціях?
// стрілочні функції не мають власного this - змінюємо стрілочну на звичайну

// 8.3
const obj83 = {
  numbers: [1, 2, 3],
  logNumbers: function () {
    // this.numbers.forEach(function (num) {
    this.numbers.forEach(num => {
      console.log(`${num} from ${this.name}`);
    });
  },
  name: "CallbackTest",
};

obj83.logNumbers(); // TypeError: obj3.bind is not a function
// Чому this.name не працює в колбеці forEach? Як виправити, щоб виводилося "1 from CallbackTest", "2 from CallbackTest", "3 from CallbackTest"?
// якщо в середені forEach зробити стрілкову функцію замість звичайної - фокус перейде на рівень вверх і з'явиться this від obj83

//8.3.1
const obj831 = {
  numbers: [1, 2, 3],
  logNumbers: function () {
    // З bind
    this.numbers.forEach(
      function (num) {
        console.log(`${num} from ${this.name}`);
      }.bind(this)
    );

    // З call (треба передати кожен num окремо, тому складніше для forEach)
    // this.numbers.forEach(num => this.logNumbers.call(this, num)); // Потребує окремої логіки

    // З apply (те саме, але з масивом)
    // this.numbers.forEach(num => this.logNumbers.apply(this, [num])); // Складніше для масивів
  },
  name: "CallbackTest",
};

obj831.logNumbers();

// 8.4
const obj84 = {
  name: "BindTest",
  greet: function (greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  },
};

// 1. call: викликає одразу з аргументами
obj84.greet.call({ name: "CallTest" }, "Hi", "!"); // "Hi, CallTest!"
obj81.sayHello.call(obj81);

// 2. apply: викликає одразу з масивом аргументів
obj84.greet.apply({ name: "ApplyTest" }, ["Hello", "?"]); // "Hello, ApplyTest?"
obj81.sayHello.apply(obj81);

// 3. bind: створює нову функцію, яку можна викликати пізніше
const boundGreet = obj84.greet.bind({ name: "BindTest" }, "Hey");
boundGreet("!"); // "Hey, BindTest!"
const fnBind2 = obj81.sayHello.bind(obj81);
fnBind2();

// call може викликати з певним this контекстом та передавати аргументи
// apply теж саме що call але аргументи передаються як масив
// bind робе теж саме але за його допомогою можна зробити окрему функцію з вказаним контекстом та аргументами

// 9 async
// const posts91 = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return response.json();
// };
// posts91().then(console.log);

// const posts93 = () => {
//   let result;
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => (result = data));

//   return result; // Не спрацює, бо fetch асинхронний
// };
// console.log(posts93()); // undefined

// const fetchPosts = async () => {
// const markupPosts = await fetchPosts();

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const promise = await response.json();
    return promise
      .map(({ userId, id, title, body }) => ({
        postNumber: id,
        user: userId,
        title:
          title[0].toUpperCase() +
          title.slice(1, 20).toLowerCase() +
          (title.length > 20 ? "..." : ""),
        body: body.slice(0, 50) + (body.length > 50 ? "..." : ""),
      }))
      .filter(({ user }) => user === 2)
      .slice(0, 5);
  } catch (error) {
    console.error("Error:", error);
  }
}

function markupPosts(posts) {
  const table = document.querySelector("table");
  if (table) {
    const tableFilteredPosts = posts.map(({ postNumber, user, title, body }) => {
      return `<tr>
          <td>${postNumber}</td>
          <td>${user}</td>
          <td>${title}</td>
          <td>${body}</td>
        </tr>`;
    });
    table.innerHTML += tableFilteredPosts.join("");
  }
  console.log(`%cfetchPosts ${new Date() - dateStart0} ms`, "color: green;");
}

const table =
  document.querySelector("table") ?? document.body.appendChild(document.createElement("table"));

table.innerHTML = `<thead><tr>
      <th>id</th>
      <th>user</th>
      <th>title</th>
      <th>body</th>
    </tr></thead>`;

const dateStart0 = new Date();
fetchPosts().then(markupPosts);

// 9.1
async function fetchAndMarkupPosts2() {
  const dateStart = new Date();
  const response = await fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
    console.log(`Network response was ${response.status}`);
    return response.json();
  });

  const markup = response
    .filter(({ userId }) => userId === 3)
    .slice(2, 5)
    .map(({ userId, id, title, body }) => {
      const formatTitle =
        title[0].toUpperCase() +
        title.slice(1, 32).toLowerCase() +
        (title.length > 32 ? "..." : "");
      const formatBody = body.slice(0, 64) + (body.length > 50 ? "..." : "");
      return `<tr>
          <td>${id}</td>
          <td>${userId}</td>
          <td>${formatTitle}</td>
          <td>${formatBody}</td>
        </tr>`;
    })
    .join("");

  let table2 = document.querySelector(".table92");
  if (!table2) {
    table2 = document.createElement("table");
    table2.classList.add("table92");
    document.body.appendChild(table2);
  }

  table2.innerHTML = `<thead><tr>
    <th>id</th>
    <th>user</th>
    <th>title</th>
    <th>body</th>
    </tr></thead>
    ${markup}`;
  console.log(`%cfetchAndMarkupPosts2 ${new Date() - dateStart} ms`, "color: green;");
}
fetchAndMarkupPosts2();

// 9.2
// import axios from "axios";
// import _ from "lodash";
async function fetchDataAndDisplay() {
  const dateStart = new Date();
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const data = response.data;

    const lightenWord = "delectus";

    function lightenToBold(text) {
      return _.replace(
        text,
        new RegExp(`\\b${lightenWord}\\b`, "gi"),
        `<strong>${lightenWord}</strong>`
      );
    }

    const filteredData = _.filter(data, item => {
      return _.some(item, value => {
        return _.includes(String(value).toLowerCase(), lightenWord);
      });
    });

    let postIdMin, postIdMax, postIdSum, postIdMean;

    const takePosts = _.take(filteredData, 5);
    const processedData = _.map(takePosts, post => {
      postIdMin = _.min([post.id, postIdMin]);
      postIdMax = _.max([post.id, postIdMax]);
      postIdSum = _.sum([post.id, postIdSum]);
      postIdMean = _.round(_.mean([post.id, postIdMean]), 2);

      const formattedTitle = lightenToBold(post.title);
      const truncatedTitle = _.truncate(formattedTitle, { length: 64 });
      const formattedBody = lightenToBold(post.body);
      const truncatedBody = _.truncate(formattedBody, { length: 180 });
      return `<tr><td>${post.id}</td><td>${post.userId}</td><td>${truncatedTitle}</td><td>${truncatedBody}</td></tr>`;
    });

    const tableMarkup = `<thead><tr><th>id</th><th>user</th><th>title</th><th>body</th></tr></thead>
    <tbody>${processedData.join("")}</tbody>`;

    const processedStats = `<tr><td>${postIdMin}</td><td>${postIdMax}</td><td>${postIdSum}, ${postIdMean}`;
    const tableStats = `<thead><tr><th>min</th><th>max</th><th>sum, mean</th></thead>
    <tbody>${[processedStats].join("")}</tbody>`;

    let table93 = document.querySelector(".table93");
    table93 = document.createElement("table");
    table93.classList.add("table93");
    document.body.appendChild(table93);
    table93.innerHTML = tableMarkup + tableStats;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  console.log(`%cfetchDataAndDisplay ${new Date() - dateStart} ms`, "color: green;");
}

fetchDataAndDisplay();

//
