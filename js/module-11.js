/// fetch
// 1XX — мають інформаційне призначення
// 2XX — коди успішного проведення операції
// 3XX — описують усе, що пов'язано з перенаправленням (redirect)
// 4XX — вказують на помилки з боку клієнта
// 5XX — вказують на помилки з боку сервера

// Метод fetch() повертає проміс, значенням якого є об'єкт Response. Це службовий об'єкт, що містить інформацію про стан відповіді сервера та методи для обробки отриманих даних.

// Залежно від типу контенту використовуються різні методи для перетворення даних у зручний формат:

// json() — парсить відповідь у форматі JSON.
// text() — парсить відповідь у вигляді тексту (наприклад табличні дані, .csv).
// blob() — використовується для обробки файлів (зображення, аудіо, відео).

// Метод json() повертає проміс, значенням якого є об'єкт. Щоб отримати доступ до даних, потрібно додати ще один метод then.

// HTTP-методи
// У REST API використовується кілька основних HTTP-методів для взаємодії з ресурсами:

// POST — створює новий ресурс.
// GET — отримує набір ресурсів або один ресурс.
// PUT — оновлює існуючий ресурс або створює новий.
// PATCH — частково оновлює існуючий ресурс.
// DELETE — видаляє ресурс.

function fetchExample() {
  fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
fetchExample();

// AJAX (Asynchronous JavaScript and XML) — це набір технологій, що дозволяють робити асинхронні запити на сервер без перезавантаження сторінки. AJAX використовується для обміну даними між клієнтом і сервером в форматі JSON, XML, HTML або текстовому форматі.

// axios автоматично перетворює відповідь у формат JSON. проміс відхиляється при будь-якому невдалому HTTP-коді відповіді

// import axios from "axios";
function axiosExample() {
  // axios.get("https://jsonplaceholder.typicode.com/users"[, config]);

  const myApiKey = "secret-api-key-for-every-request";
  axios.defaults.headers.common["header-name"] = myApiKey;

  axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

  axios({
    method: "get",
    url: "/users",
    params: {
      _limit: 7,
      _sort: "name",
    },
  })
    .then(response => {
      console.log(response);
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    })
    .catch(error => console.log(error));
}
axiosExample();
