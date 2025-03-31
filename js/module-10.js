/// timout timeinterval
//const timerId = setTimeout(callback, delay, arg1, arg2, ...);
const greet = (str = "world") => {
  console.log(`Hello, ${str}!`);
};
const timerId1 = setTimeout(() => greet(1), 2000);
const timerId2 = setTimeout(() => greet(2), 3000);
const timerId3 = setTimeout(greet, 1000, `Mary`);
const timerId4 = setTimeout(greet, 500);
clearTimeout(timerId1);

//
//const intervalId = setInterval(callback, delay, arg1, arg2, ...);
const timerId5 = setInterval(greet, 1000, `John`);
setTimeout(() => clearInterval(timerId5), 5000);
console.log(`timer cleared`);

/// date
const dateTemp = new Date();
console.log(typeof dateTemp, dateTemp, dateTemp.toLocaleTimeString()); // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
console.log(typeof dateTemp.toLocaleTimeString(), dateTemp.toLocaleTimeString());
// const date = new Date(); // Поточна дата та час
// const date = new Date("2030-03-16");
// console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"
// const date = new Date("2030-03-16T14:25:00");
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"
// console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// const time = new Date("T14:25:00"); // JavaScript інтерпретує це як час у поточному дні.

// Unix час - відлік часу рахується в мілісекундах що минули після опівночі 1 січня 1970 року в часовому поясі UTC (Coordinated Universal Time).
// console.log(new Date(0)); // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"
// console.log(new Date(15000)); // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"
console.log(dateTemp.getTime()); // 1624021654154
const timeNow = Date.now(); // 1693237207904
console.log(typeof timeNow, timeNow);

/// геттери сеттери
// setHours(), setMinutes(), setSeconds()
// setDate(day), setMonth(month), setFullYear(year)
// getHours(), getMinutes(), getSeconds()
// getDate(day), getMonth(month), getFullYear(year)
// date.setHours(14, 25, 0); // Встановлюємо 14:25:00

/// promises
// const promise = new Promise((resolve, reject) => { }
// Очікування (pending) — початковий стан під час створення промісу.
// Виконано (fulfilled) — операція виконана успішно з будь-яким результатом.
// Відхилено (rejected) — операція відхилена з помилкою.

const promiseExample = () => {
  const isSuccess = true;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Success! Value passed to resolve function");
      } else {
        reject("Error! Error passed to reject function");
      }
    }, 2000);
  });
  console.log(promise); // Об'єкт промісу
};
promiseExample();

// promise fulfilled / rejected / fulfilled or rejected
//
// promise.then(onResolve, onReject)
// promise.then(onResolve).catch(onReject)
// promise.then(onResolve).catch(onReject).finally(onFinally)

function promiseExample2() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5);
    }, 2000);
  });

  promise
    .then(value => {
      console.log(value); // 5
      return value * 2;
    })
    .then(value => {
      console.log(value); // 10
      return value * 3;
    })
    .then(value => {
      console.log(value); // 30
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log("finally");
    });
}
promiseExample2();

// Промісифікація — це перетворення функції з колбеками таким чином, щоб вона не приймала колбеки, а повертала проміс. Така функція називається промісифікована.

// Колбеки — це функції, проміси — це об'єкти.
// Колбеки передаються як аргументи функції, що виконує асинхронну операцію, а проміси створюються всередині цієї функції і повертаються як її результат.
// Колбеки обробляють успішне або неуспішне завершення операції, проміси нічого не обробляють, тільки зберігають поточний стан асинхронної операції.
// Колбеки можуть обробляти декілька подій, проміси пов'язані тільки з однією подією.
// Колбеки не мають методів then, catch, finally, проміси мають.
// Колбеки не мають стану, проміси мають.
// Колбеки не можуть бути скасовані, проміси можуть.

// проміс через new Promise()
new Promise(resolve => resolve("success value"))
  .then(value => console.log(value))
  .catch(error => console.log(error));

new Promise((resolve, reject) => reject("error"))
  .then(value => console.log(value))
  .catch(error => console.log(error));

/// Promise.resolve() і Promise.reject() — це статичні методи для створення промісів, що миттєво успішно виконуються або відхиляються. Вони працюють аналогічно new Promise(), повертають проміс, але мають коротший синтаксис

Promise.resolve("success value")
  .then(value => console.log(value))
  .catch(error => console.log(error));

Promise.reject("error")
  .then(value => console.log(value))
  .catch(error => console.log(error));

//
function promiseExample3() {
  const makePromise = ({ value, delay, shouldResolve = true }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve(value);
        } else {
          reject(value);
        }
      }, delay);
    });
  };

  makePromise({ value: "A", delay: 1000 })
    .then(value => console.log(value)) // "A"
    .catch(error => console.log(error));

  makePromise({ value: "B", delay: 3000 })
    .then(value => console.log(value)) // "B"
    .catch(error => console.log(error));

  makePromise({ value: "C", delay: 2000, shouldResolve: false })
    .then(value => console.log(value))
    .catch(error => console.log(error)); // "C"
}
promiseExample3();

//
function promiseExample4() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fulfilled A");
    }, 1000);
  })
    .then(value => console.log(value))
    .catch(error => console.log(error));

  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fulfilled B");
    }, 3000);
  })
    .then(value => console.log(value))
    .catch(error => console.log(error));

  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected C");
    }, 2000);
  })
    .then(value => console.log(value))
    .catch(error => console.log(error)); // "Rejected C"
}
promiseExample4();

/// Обробка множинних промісів метод Promise.all()
//  Promise.all очікує виконання всіх переданих промісів, і якщо хоча б один із промісів відхилено (завершено з помилкою), то Promise.all також відхилиться та поверне відхилення.

function promiseExample5() {
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);

  Promise.all([p1, p2, p3])
    .then(values => console.log(values)) // [1, 2, 3]
    .catch(error => console.log(error));
}
promiseExample5();

// метод Promise.allSettled() чекає виконання всіх промісів незалежно від того, чи були деякі або навіть всі проміси відхилені.

function promiseExample6() {
  const p1 = Promise.resolve(1);
  const p2 = Promise.reject("Rejected promise 2");
  const p3 = Promise.resolve(3);

  Promise.allSettled([p1, p2, p3]).then(values => console.log(values));
}
promiseExample6();

/// Метод Promise.race()
// Метод Promise.race приймає масив промісів і повертає "найшвидший", тобто перший виконаний або відхилений проміс з переданих, разом зі значенням або причиною його відхилення.

function promiseExample7() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(2), 1000);
  });

  Promise.race([p1, p2])
    .then(value => console.log(value))
    .catch(error => console.log(error)); // 2
}
promiseExample7();

function promiseExample8() {
  const lalala = new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.5) {
        resolve("Ok");
      }
      reject("oops");
    }, 1000);
  });

  console.log(lalala);

  lalala
    .then(tototo => console.log("then", tototo))
    .catch(error => console.log("catch", error))
    .finally(() => console.log("finally"));
}
promiseExample8();
