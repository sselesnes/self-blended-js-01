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
}
localStorageExample();
