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
