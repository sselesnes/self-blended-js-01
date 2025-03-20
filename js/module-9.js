//
function jsonExample() {
  const dog = {
    name: "Mango",
    age: 3,
    isGoodBoy: true,
    bark() {
      console.log("Woof!");
    },
  };

  const json = JSON.stringify(dog);
  console.log(typeof json, json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
  // stringify ігнорує методи об'єкта, тому bark не буде включений у вихідний рядок JSON.

  //
  const dogFromJSON = JSON.parse(json);
  console.log(dogFromJSON); // {name: 'Mango', age: 3, isGoodBoy: true}
  console.log(dogFromJSON.name); // "Mango"
}
jsonExample();

//
function localStorageExample() {
  console.log(window.localStorage);
  console.log(localStorage);
  //
  // localStorage.setItem("key", "value");
  // localStorage.getItem("key");
  // localStorage.removeItem("key");
  // localStorage.clear();
  // якщо нема такого ключа повертає null (не undefined) який можна обробляти через ??

  const settings = {
    theme: "dark",
    isAuthenticated: true,
    options: [1, 2, 3],
  };
  localStorage.setItem("settings", JSON.stringify(settings));

  const savedSettings = localStorage.getItem("settings");
  console.log(savedSettings); // A string

  const parsedSettings = JSON.parse(savedSettings);
  console.log(parsedSettings); // Settings object

  // Якщо необхідно зберегти щось, окрім рядка, наприклад, масив або об'єкт, необхідно перетворити їх у рядок методом JSON.stringify().

  localStorage.removeItem("settings");
  console.log(localStorage.getItem("settings")); // null

  localStorage.clear();
  console.log(localStorage); // Storage {length: 0}
}
// localStorageExample();

//
function feedbackFormExample() {
  const form2 = document.querySelector(".feedback-farm");
  const textarea2 = form2?.elementr.massage; //Опціональний ланцюжок (?.) Якщо будь-яка з проміжних властивостей дорівнює null або undefined, вираз повертає undefined замість того, щоб викликати помилку TypeError.
  console.log(textarea2); // undefined

  const form = document.querySelector(".feedback-form");
  const textarea = form?.elements.message;
  const localStorageKey = "goit-example-message";
  console.log(`localStorage`, localStorage.getItem(localStorageKey));

  textarea.value = localStorage.getItem(localStorageKey) ?? ""; // оператор нульового злиття (nullish coalescing operator) в JavaScript. Він використовується для надання значення за замовчуванням, якщо лівий операнд є null або undefined.

  form.addEventListener("input", evt => {
    localStorage.setItem(localStorageKey, evt.target.value);
  });

  form.addEventListener("submit", evt => {
    evt.preventDefault();
    console.log(evt.target.elements.message.value);
    localStorage.removeItem(localStorageKey);
    form.reset();
  });
}
feedbackFormExample();

// node.js install
// node -v

// git clone `git-hub-teamRepoLink`
// git remote -v
// git remote set-url origin `git-hub-myRepoLink`

// vite init
// https://www.edu.goit.global/uk/learn/29773997/18936918/20332333/training?blockId=20332348

// node --version
// npm --version
// npm config set init-author-name "YOUR_NAME"
// npm config set init-author-email "YOUR_EMAIL"
// npm config get

// npm create vite@latest
// Vanilla
// JavaScript

// npm install // npm i // package.json "dependencies": {}
// npm install package-name --save // залежність, яка увійде до фінального продукту
// npm install package-name --save-dev // залежність розробки, яка не увійде до фінального продукту
// npm uninstall // npm r
// npm run dev

import cookMessage, { makeMessage, userNames as names } from "./module-9-makeMessage.js";
// An import declaration can only be used at the top level of a module.
// import - імпорт за замовчуванням (export default)
// import {} - іменований імпорт (export)
console.log(cookMessage("Jacob")); // "Welcome, Jacob!
names.forEach(name => console.log(makeMessage(name))); // "Welcome, Mikola!"; "Welcome, Alice!"; "Welcome, Robin!"

import * as userSpecs from "./module-9-namespace.js";
console.log(userSpecs); // {name: "Mango", age: 2, email: "mango@mail.com}
