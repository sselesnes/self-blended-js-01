// асинхронна функція завжди повертає проміс.
// Якщо функція повертає значення, воно обгортається в проміс.
// Якщо не повертає значення, створюється проміс із undefined.
// Асинхронні функції спрощують роботу з промісами, дозволяючи уникнути вкладених .then() і роблячи код читабельнішим.

function asynсExample1() {
  // async function fetchData() {
  const fetchData1 = async function () {
    return Promise.resolve("someanswer1");
  };
  // Тут ми явно створюємо проміс за допомогою Promise.resolve(). Хоча Promise.resolve() створює проміс, який негайно розв'язується, є невелика затримка, пов'язана з внутрішнім механізмом обробки промісів. Ця невелика затримка може бути достатньою, щоб console.log(fetchData1()) виконався до того, як проміс fetchData1() повністю розв'язався. Тому ви бачите Promise {<pending>} при цьому виведення someanswer1 в консоль не означає, що проміс fetchData1() повністю розв'язався на момент виклику console.log(fetchData1()).

  fetchData1().then(async value => {
    console.log(await fetchData1()); // someanswer1
    console.log(value); // someanswer1
    console.log(fetchData1()); // Promise pending
  });

  async function main() {
    console.log(await fetchData1()); // "someanswer1"
    // await призупиняє виконання функції, доки проміс не завершиться. Це означає, що await можна використовувати тільки всередині асинхронних функцій (async). Якщо проміс успішний, await повертає його значення. Якщо проміс відхилено, await генерує помилку, яку потрібно обробляти через try/catch.
  }
  main();

  const fetchData2 = async () => {
    return "someanswer2";
    // У цьому випадку JavaScript автоматично обертає рядок "someanswer2" у проміс, який негайно розв'язується з цим значенням. Тому, коли ви викликаєте fetchData2() у console.log(fetchData2()), проміс вже розв'язаний, і ви бачите Promise {<fulfilled>: 'someanswer2'}.
  };
  fetchData2().then(value => {
    console.log(value); // someanswer2
    console.log(fetchData2()); // Promise fulfilled
  });

  // const user = {
  //   async getUsername() {

  // class User {
  //   async getUsername() {
}
asynсExample1();

// макропроцеси - це завдання, які виконуються в основному циклі подій. Макропроцеси включають обробку подій, таймери, запити на сервер, та інші подібні завдання. Макропроцеси виконуються в порядку черги, доки черга не буде повністю оброблена. Макропроцеси мають нижчий пріоритет, ніж мікропроцеси. Макропроцеси виконуються в наступному циклі подій, тоді як мікропроцеси виконуються в одному циклі подій. Макропроцеси блокують виконання інших макропроцесів, але не блокують виконання мікропроцесів.

// мікропроцеси - це "будівельні блоки" макропроцесів. Мікропроцеси виконуються після кожного макропроцесу. Мікропроцеси включають обробку промісів, мутації DOM, та інші подібні завдання. Мікропроцеси виконуються в порядку черги, доки черга не буде повністю оброблена. Мікропроцеси мають вищий пріоритет, ніж макропроцеси. Мікропроцеси виконуються в одному циклі подій, тоді як макропроцеси виконуються в наступному циклі подій. Мікропроцеси не блокують виконання інших мікропроцесів, але блокують виконання макропроцесів.

function asynсExample2() {
  console.log("1"); // макропроцес
  setTimeout(() => console.log("2"), 0); // макропроцес, але з затримкою 0 мс, тому буде виконано після всіх мікропроцесів.
  Promise.resolve().then(() => console.log("3")); // мікропроцес
  console.log("4"); // макропроцес
}
asynсExample2(); // 1 4 3 2

function asynсExample3() {
  const startTime = Date.now();
  const res1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentTime = Date.now();
        const deltaTime = currentTime - startTime;
        resolve({ title: "first", time: deltaTime });
      }, 2000);
    });
  };

  const res2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentTime = Date.now();
        const deltaTime = currentTime - startTime;
        reject({ title: "second", time: deltaTime });
      }, 3000);
    });
  };

  const res3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const currentTime = Date.now();
        const deltaTime = currentTime - startTime;
        resolve({ title: "third", time: deltaTime });
      }, 4000);
    });
  };

  // promise.all, promise.race, promise.allSettled, promise.any

  Promise.all([res1(), res2(), res3()])
    .then(res => console.log(res))
    .catch(error => console.log("catch", error))
    .finally(() => console.log("finally"));

  // promise.allSettled - повертає масив об'єктів, в яких буде вказана успішність або помилка.
  Promise.allSettled([res1(), res2(), res3()]).then(res => console.log(res));
}
asynсExample3();
