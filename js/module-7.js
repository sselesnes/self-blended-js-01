// document.body.innerHTML
// classList
console.log(typeof document.body.innerHTML);
console.log(typeof document.body);

const docBody = document.body;

const sentence = `Кажуть, що людина більше всього чекає на 3 речі: кінець робочого дня, п'ятницю і весну... Тоо у мене тоді сьогодні флеш рояль.`;
console.log(sentence);

docBody.innerHTML = `<p>${sentence}</p>`;

console.log(document.querySelector("noneOfAll")); // null

const par = document.querySelector("p"); // select by tag name
par.textContent = par.textContent.replace("весну", "перемогу України");

docBody.innerHTML += `<a class="link" id="link" href="https://goit.global">GoIT</a><br><br>`;

const link = document.querySelector(".link"); // select by class
console.log(link.href); // "https://goit.global"

const linkSomeArg = `https://goit.globa1`;
const linkSome = document.querySelector(`.link[href="${linkSomeArg}"]`); // select by class and attribute
(linkSome && console.log(linkSome.href)) || console.log(`invalid selector attribute = null`); // "https://goit.global"

link.href = "https://neo.goit.global";
console.log(link.href); // "https://neo.goit.global"

const linkId = document.querySelector("#link"); // select by id
linkId.href = "https://edu.goit.global";

// style
linkId.style.color = `rgb(255, 107, 10)`;
linkId.style.backgroundColor = `rgb(0, 0, 0)`; // властивості записуються в camelCase нотації (backgroundColor), замість дефісів (background-color), які використовуються в CSS
console.log(linkId.href);
console.log(linkId.classList.contains("link"));

link.classList.add("special");
console.log(link.classList);
link.classList.remove("link");
console.log(link.classList);
link.classList.toggle("is-active");
console.log(link.classList);
link.classList.replace("special", "regular");
console.log(link.classList);

// New code to add elements to HTML
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is another new paragraph";
const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/id/15/320/240";
newImg.setAttribute("alt", "Amazing nature");
newImg.width = 300;
newImg.className = "image";

// New container with paragraph and image
const container = document.createElement("div");
container.appendChild(newParagraph);
container.appendChild(newImg);
container.id = `container`;
container.className = `container`;
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.backgroundColor = "cyan";
docBody.appendChild(container);

const image = document.querySelector(".image"); // by class
console.log(image.hasAttribute("alt")); // true
console.log(image.getAttribute("alt")); // Amazing nature

image.setAttribute("alt", "New world order");
console.log(image.getAttribute("alt")); // New world order
image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false

// createElement
const newBtn = document.createElement("button"); // метод createElement(tagName) створює елемент з ім'ям tagName і повертає посилання на його об’єкт як результат свого виконання.
newBtn.className = "js-click";
newBtn.type = "button";
newBtn.textContent = "Press me";
newBtn.dataset.action = "magic"; //dataset використовується для доступу до атрибутів даних, які починаються з префікса data-
newBtn.style.margin = "10px 0 10px";
docBody.appendChild(newBtn);

console.log(newBtn.dataset);

// click listener
const readBtnClick = document.querySelector("[data-action='magic']");
readBtnClick.addEventListener("click", () => {
  console.log("button pressed");
});

// hover listener - на мобілках заліпає - використовуємо :active та pointer
// @media (pointer: fine) { // миша, тачпад, стилус
//   .button:hover {
//
// @media (pointer: coarse) { // сенсорний екран смартфона або планшет
//   .button:active {
//
// замість event "mouseover", "mouseout" допомогає "pointerover", "pointerout"
//
const readImgHover = document.querySelector(`#container .image`);

readImgHover.addEventListener("mouseover", () => {
  console.log("image mouseover");
});

readImgHover.addEventListener("mouseout", () => {
  console.log("image mouseout");
});

readImgHover.addEventListener("mouseenter", () => {
  console.log("image mouseenter");
});

readImgHover.addEventListener("mouseleave", () => {
  console.log("image mouseleave");
});

readImgHover.addEventListener("mousemove", () => {
  console.log("image mousemove");
});

// prepend append prependChild appendChild - приймають декілька аргументів
// const container = document.querySelector(`#container`); // by id

// Створюємо новий елемент для prepend
const childForPrepend = document.createElement("p");
childForPrepend.textContent = "prepend додає вміст на початок контейнера div #container";

// Додаємо текст і новий елемент на початок контейнера
container.prepend("Текст, доданий перед дочірнім елементом prepend", childForPrepend);

// Створюємо новий елемент для append
const childForAppend = document.createElement("p");
childForAppend.textContent = "append додає вміст до кінця контейнера div #container";

// Додаємо текст і новий елемент до кінця контейнера
container.append(childForAppend, "Текст, доданий після дочірнього елемента append");

console.log(childForPrepend.parentNode.id); // container
console.log(childForPrepend.parentNode.className); // container

// colorpicker
const options = [
  {
    label: "Red",
    color: "#f00",
  },
  {
    label: "Green",
    color: "#0f0",
  },
  {
    label: "Blue",
    color: "#00f",
  },
  {
    label: "Yellow",
    color: "#ff0",
  },
  {
    label: "Cyan",
    color: "#0ff",
  },
  {
    label: "Magenta",
    color: "#f0f",
  },
  {
    label: "Black",
    color: "#000",
  },
  {
    label: "White",
    color: "#fff",
  },
];

// Створення контейнера для кнопок
const colorPickerContainerElement = document.createElement("div");
colorPickerContainerElement.id = "color-picker-container";

// Створення кнопок на основі масиву options
const elements = options.map(option => {
  const buttonEl = document.createElement("button");
  buttonEl.classList.add("color-picker-style");
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;
  return buttonEl;
});

// Додавання кнопок до контейнера
colorPickerContainerElement.append(...elements);

// Додавання контейнера до body
document.body.appendChild(colorPickerContainerElement);

// Додавання стилів для кнопок
const style = document.createElement("style");
style.innerHTML = `
  .color-picker-style {
    margin: 5px;
    padding: 10px;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
  }
`;
document.head.appendChild(style);

// innerHTML
// Заміна вмісту: innerHTML замінює весь вміст елемента на новий HTML-код.
// Повернення значення: innerHTML повертає поточний HTML-вміст елемента.
// Використовується, коли потрібно повністю замінити вміст елемента.

const innerHTMLContent = ` <a href="https://goit.global">GoIT</a> `;
newParagraph.innerHTML += innerHTMLContent;

// insertAdjacentHTML
// Вставка вмісту: insertAdjacentHTML вставляє HTML-код у вказану позицію відносно елемента, не замінюючи його вміст.
// Позиція вставки: Має чотири можливі позиції для вставки:
// 'beforebegin': Перед елементом.
// 'afterbegin': Всередині елемента, перед його вмістом.
// 'beforeend': Всередині елемента, після його вмісту.
// 'afterend': Після елемента.
// Використовується, коли потрібно вставити HTML-код у конкретне місце відносно елемента, не заміняючи його вміст.

const insertAdjacentHTMLContent = ` <a href="https://goit.global">GoIT</a> `;
newParagraph.insertAdjacentHTML("afterbegin", insertAdjacentHTMLContent);

//
const btn = document.querySelector(".js-click");
const box = document.querySelector(".image");

let step = 0;
btn.addEventListener("click", () => {
  step += 50;
  console.log(step);
});

// Створення форми
const form = document.createElement("form");

// Створення текстового поля
const inputBoxCreate = document.createElement("input");
inputBoxCreate.type = "text";
inputBoxCreate.className = "js-input";
inputBoxCreate.placeholder = "Enter text";
inputBoxCreate.name = "submitName";

// Додавання текстового поля до форми
form.appendChild(inputBoxCreate);

// Створення кнопки
const subscribeButton = document.createElement("button");
subscribeButton.type = "submit";
subscribeButton.textContent = "Subscribe";

// Додавання кнопки до форми
form.appendChild(subscribeButton);

// Додавання форми до тіла документа
docBody.appendChild(form);

// Отримання посилання на текстове поле за класом
const inputBox = document.querySelector(".js-input");

// Додавання обробника подій для події input
inputBox.addEventListener("input", event => {
  console.log("Input value:", event.target.value);
  console.log("Input element by name:", event.target.form.elements.submitName.value);
});

// Додавання обробника подій для події focus
inputBox.addEventListener("focus", event => {
  console.log("focus");
});

// Додавання обробника подій для події blur
inputBox.addEventListener("blur", event => {
  console.log("blur");
});

// Додавання обробника подій для події focusin
inputBox.addEventListener("focusin", event => {
  console.log("focusin");
});

// Додавання обробника подій для події focusout
inputBox.addEventListener("focusout", event => {
  console.log("focusout");
});

// Додавання обробника подій для події keydown
inputBox.addEventListener("keydown", event => {
  console.log("keydown:", event.key);
});

// Додавання обробника подій для події keypress
inputBox.addEventListener("keypress", event => {
  console.log("keypress:", event.key);
});

// Додавання обробника подій для події keyup
inputBox.addEventListener("keyup", event => {
  console.log("keyup:", event.key);
});

// Додавання обробника подій для події submit для форми
form.addEventListener("submit", event => {
  event.preventDefault(); // Заборона стандартної поведінки форми
  const inputValue = inputBoxCreate.value;
  console.log("Input value:", inputValue);

  // Очищення текстового поля після введення
  inputBoxCreate.value = "";
});

document.addEventListener("keydown", event => {
  console.log(event.code);
  console.log(event.key);
  console.log(event); // shiftKey ctrlKey altKey meta(це win-key)
  // event.preventDefault(); // Заборона стандартної поведінки
});

form.addEventListener("change", event => {
  console.log(event); // подія відбувається після втрати фокусу за умови, що відбулася зміна значення в елементі
});

//
const createBoxes1 = amount => {
  const boxesHTML = Array.from({ length: amount }, (_, index) => {
    const size = 30 + index * 10;
    return `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`;
  }).join("");
  boxesDiv.innerHTML = boxesHTML;
};

//
const createBoxes2 = amount => {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesDiv.innerHTML = "";
  boxesDiv.append(...boxes);
};
