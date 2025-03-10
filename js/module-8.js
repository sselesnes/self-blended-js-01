// keyboard mouse
const eventTypes = ["click", "keydown"];

eventTypes.forEach(eventType => {
  document.querySelector("body").addEventListener(eventType, event => {
    console.log(`event.type:`, event.type);
    console.log("event.code", event.code);
    console.log("event.key", event.key);
    console.log(`event.target:`, event.target);
    console.log(`event.target.tagName:`, event.target.tagName);
    console.log(`event.target.className:`, event.target.className);
    console.log(`event.target.id:`, event.target.id);
  });
});

// window
const windowEventTypes = ["load", "resize", "scroll", "unload"];

function handleWindowEvent(event) {
  console.log(`Подія: ${event.type}`);
}

windowEventTypes.forEach(eventType => {
  window.addEventListener(eventType, handleWindowEvent);
});

// event delegation - делегування
const bodyElement = document.querySelector("body");
eventTypes.forEach(eventType => {
  bodyElement.addEventListener(eventType, handleEvent);
});

function handleEvent(event) {
  if (event.target.matches(".specific-class")) {
    console.log(
      `event.type: ${event.type}, event.target: ${event.target}, event.target.tagName: ${event.target.tagName}, event.target.className: ${event.target.className}, event.target.id: ${event.target.id}`
    );
  } else if (event.target.matches(".another-class")) {
    // Обробка подій для елементів з класом .another-class
    console.log(`Another class event: ${event.type}`);
  } else {
    // Обробка подій для інших елементів
    console.log(`Other event: ${event.type}`);
  }
}

//
function parent() {
  someElement.addEventListener("click", event => {
    console.log("event.target: ", event.target); // це завжди вихідний (і найглибший) елемент, на якому був клік
    console.log("event.currentTarget: ", event.currentTarget); // елемент, до якого подія спливла, і обробник її перехопив, тобто елемент, який ми прослуховуємо
  });
}

//
/* <ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul> */

function itemListListener() {
  document.getElementById("list").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      console.log("Clicked on: ", event.currentTarget); // Виведе <ul id="list">
      console.log("Specific list item: ", event.target.textContent); // Виведе текст конкретного елемента списку
    }
  });
}

//
const container = document.querySelector(".container");

function itemListListener2() {
  // [...container.children] === Array.from(container.children)
  [...container.children].forEach(item => {
    item.addEventListener("click", handleClick);
  });
}

function handleClick(event) {
  const color = event.target.style.color;
  console.log(color);
}
