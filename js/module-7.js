// document.body.innerHTML
// classList
console.log(typeof document.body.innerHTML);
console.log(typeof document.body);

const docBody = document.body;

const sentence = `Кажуть, що людина більше всього чекає на 3 речі: кінець робочого дня, п'ятницю і весну... Тоо у мене тоді сьогодні флеш рояль.`;
console.log(sentence);

docBody.innerHTML = `<p>${sentence}</p>`;

const par = document.querySelector("p"); // select by tag name
par.textContent = par.textContent.replace("весну", "перемогу України");

docBody.innerHTML += `<a class="link" id="link" href="https://goit.global">GoIT</a>`;

const link = document.querySelector(".link"); // select by class
console.log(link.href); // "https://goit.global"

link.href = "https://neo.goit.global";
console.log(link.href); // "https://neo.goit.global"

const linkId = document.querySelector("#link"); // select by id
linkId.href = "https://edu.goit.global";

// style
linkId.style.color = `rgb(255, 107, 10)`;
linkId.style.backgroundColor = `rgb(0, 0, 0)`; // властивості записуються в camelCase нотації (backgroundColor), замість дефісів (background-color), які використовуються в CSS
console.log(linkId.href);
console.log(link.classList);
console.log(link.classList.contains("link"));

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
newBtn.className = "action";
newBtn.type = "button";
newBtn.textContent = "Press me";
newBtn.dataset.action = "magic"; //dataset використовується для доступу до атрибутів даних, які починаються з префікса data-
docBody.appendChild(newBtn);

console.log(newBtn.dataset);

// click listener
const readBtnClick = document.querySelector("[data-action='magic']");
readBtnClick.addEventListener("click", () => {
  console.log("button pressed");
});

// hover listener
const readImgHover = document.querySelector(`#container .image`);
readImgHover.addEventListener("mouseover", () => {
  console.log("image hovered");
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
