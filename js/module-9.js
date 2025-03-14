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
  const form = document.querySelector(".feedback-form");
  const textarea = form.elements.message;
  const localStorageKey = "goit-example-message";

  textarea.value = localStorage.getItem(localStorageKey) ?? "";

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
