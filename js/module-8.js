function parent() {
  someElement.addEventListener("click", event => {
    console.log("event.target: ", event.target); // це завжди вихідний (і найглибший) елемент, на якому був клік
    console.log("event.currentTarget: ", event.currentTarget); // елемент, до якого подія спливла, і обробник її перехопив, тобто елемент, який ми прослуховуємо
  });
}

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
