const container = document.querySelector(".js-list");
const clear = document.querySelector(".js-clear");
const totalPrice = document.querySelector(".js-total-price");

const LS_KEY = "basket";
let products = JSON.parse(localStorage.getItem(LS_KEY)) || [];
let totalCost;
function renderCart() {
  totalPriceUpdate();

  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", createMarkup(products));
  clear.addEventListener("click", handleClear);
  container.addEventListener("click", event => handleDelete(event, products));
}

function handleClear() {
  localStorage.removeItem(LS_KEY);
  window.location.href = "./index-9-shop.html";
}

function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, name, price, qty }) => `
        <li class="cart-item">
            <img class="product-img" src="${img}" alt="${name}"/>
            <h2>${name}</h2>
            <p>Quantity: ${qty}</p>
            <p>Total price: ${qty * price} грн</p><div class="qty-buttons">
            <button class="clear-cart-btn js-remove-item-btn" data-id="${id}">-</button>
            <button class="clear-cart-btn js-add-item-btn" data-id="${id}">+</button>
            </div></li>
    `
    )
    .join("");
}

function handleDelete(event, products) {
  event.preventDefault();
  const target = event.target;
  const productId = Number(target.dataset.id);
  const index = products.findIndex(({ id }) => id === productId);

  if (target.classList.contains("js-remove-item-btn")) {
    products[index].qty && (products[index].qty -= 1);
  } else if (target.classList.contains("js-add-item-btn")) {
    products[index].qty += 1;
  } else {
    return;
  }
  localStorage.setItem(LS_KEY, JSON.stringify(products));
  updateCartItemDisplay(productId, products[index].qty, products[index].price);
}

function updateCartItemDisplay(productId, qty, price) {
  const cartItem = document
    .querySelector(`.cart-item [data-id="${productId}"]`)
    .closest(".cart-item");
  cartItem.querySelector("p:nth-child(3)").textContent = `Quantity: ${qty}`;
  cartItem.querySelector("p:nth-child(4)").textContent = `Total price: ${qty * price} грн`;
  totalPriceUpdate();
}

function totalPriceUpdate() {
  if (products.length) {
    clear.hidden = false;
    totalCost = products.reduce((acc, { qty, price }) => (acc += qty * price), 0);
  }
  totalPrice.textContent = totalCost ? `Total cost ${totalCost} грн` : "Your basket is empty";
}

renderCart();
