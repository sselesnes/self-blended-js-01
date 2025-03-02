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
docBody.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/id/15/320/240";
newImg.setAttribute("alt", "Amazing nature");
newImg.width = 300;
newImg.className = "image";
docBody.appendChild(newImg);

const image = document.querySelector(".image"); // by class
console.log(image.hasAttribute("alt")); // true
console.log(image.getAttribute("alt")); // Amazing nature

image.setAttribute("alt", "New world order");
console.log(image.getAttribute("alt")); // New world order

image.removeAttribute("alt");
console.log(image.hasAttribute("alt")); // false

const newBtn = document.createElement("button");
newBtn.className = "action";
newBtn.type = "button";
newBtn.textContent = "Press me";
newBtn.dataset.action = "magic";
docBody.appendChild(newBtn);

const readBtn = document.querySelector("[data-action='magic']");
readBtn.addEventListener("click", () => {
  console.log("button pressed");
});
