// init
function alert(args) {
  console.log(args);
}

// короткі властивості (shorthand properties)
alert(`// короткі властивості`);
//
const propName = `rating`;

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  // обчислювальні властивості (computed properties)
  [propName]: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
const firstTag = apartment.tags[0];
const aptRating = apartment["rating"];
apartment.tags.push("trusted");
apartment.rating = 4.7;
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Jamaica",
  city: "Kingston",
};
console.log(apartment);

function createHenry() {
  const name = "Henry Sibola";
  const age = 25;
  const sex = `male`;
  const user = {
    name,
    age,
    sex,
  };
  return user;
}

console.log(typeof createHenry(), createHenry());

// Global `name` is depricated
const name = "Henry Sibola";
console.log(name);

//
const emailInputName = "email";
const passwordInputName = "password";
const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

//* Цикл for...in // for (key in object) { інструкції }
alert(`// Цикл for...in`);
//

const keys = [];
const values = [];
for (const key in createHenry()) {
  keys.push(key);
  values.push(createHenry()[key]);
  console.log(key); // Ключ
  console.log(createHenry()[key]); // Властивість ключа
}
console.log(keys);
console.log(values);

//* Object.keys та Object.values - конструктори (або вбудовані глобальні об'єкти)
alert(`// Object.keys`);
const keys2 = Object.keys(createHenry());
console.log(keys2);
alert(`// Object.values`);
const values2 = Object.values(createHenry());
console.log(values2);
alert(`// Object.entries`);
const entries2 = Object.entries(createHenry());
console.log(entries2);
