console.log(typeof document.body.innerHTML);
console.log(typeof document.body);
const docBody = document.body;
const sentence =
  "Кажуть, що людина більше всього чекає на 3 речі: кінець робочого дня, п'ятницю і весну... Тоо у мене тоді сьогодні флеш рояль.";
console.log(sentence);
docBody.innerHTML = `<p>${sentence}</p>`;

const par = document.querySelector("p"); // select by tag name
par.textContent = par.textContent.replace("весну", "перемогу України");

docBody.innerHTML += `"<a class="link" id="link" href="https://goit.global">GoIT</a>"`;
const link = document.querySelector(".link"); // select by class
console.log(link.href); // "https://goit.global"

link.href = "https://neo.goit.global";
console.log(link.href); // "https://neo.goit.global"

const linkId = document.querySelector("#link"); // select by id
linkId.href = "https://edu.goit.global";
linkId.style.color = `rgb(255, 107, 10)`;
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
