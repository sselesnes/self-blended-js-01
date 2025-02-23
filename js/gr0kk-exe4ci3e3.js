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
    formattedName: name[0].toUpperCase() + name.toLowerCase().slice(1, 14) + (name.length > 15 ? "..." : ""),
    formattedPrice: `${price.toFixed(2)}`,
    stockStatus: stock > 0 ? `In stock: ${stock} items` : `Out of stock`,
    formattedDescription: description.slice(0, 30) + (description.length > 30 ? "..." : ""),
  }));
console.log(formatProductText70(products7));
