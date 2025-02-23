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
// Порахуй кількість true і false для ключа "enabled", враховуючи тільки наявні boolean значення.
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

//3.32
const countIsEnabled332 = items =>
  items.reduce(
    (acc, item) => (
      item.enabled === false ? acc.disabled++ : item.enabled ? acc.enabled++ : acc, acc
    ),
    { enabled: 0, disabled: 0 }
  );

console.log(countIsEnabled332(items33));

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
