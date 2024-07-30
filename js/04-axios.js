/**
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

axios.defaults.baseURL = "https://66a2821d967c89168f205819.mockapi.io";

/**
 * Read (GET)
 *
 */

async function fetchBooks() {
  const { data } = await axios.get("books");
  return data;

  // аксіос відразу повртає джс обʼєкт з інформацією про запит та даними з серверу, тому не потрібно викликати метод .json() + в бібліотеці аксіос вирішена проблема з 404 помилкою, тому не потрібно робити додаткові перевірки на if(!res.ok).

  // дані від серверу зберігаються у властивості data обʼєкту відповіді

  //! old code
  // return fetch(URL).then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }

  //   return res.json();
  // });
}

async function fetchBookById(bookId) {
  const { data } = await axios.get(`books/${bookId}`);
  return data;

  //! old code
  // return fetch(`${URL}/${bookId}`).then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }

  //   return res.json();
  // });
}

// fetchBooks().then(console.log).catch(console.log);

// fetchBookById(1).then(console.log).catch(console.log);
// fetchBookById(2).then(console.log).catch(console.log);

/**
 * Create (POST) - створює новий ресурс на сервері
 */

async function addBook(book) {
  /*
    method: "POST", - описує HTTP метод який зараз буде передаватись
    body: JSON.stringify(book), - описує тіло запиту, тобто ті дані які ми хочемо передати на сервер (у фрматі JSON)
    headers: { - список заголовків, тобто технічної інфонмації
      "Content-Type": "application/json", - один з заголовків який вказує тип контенту який ми передаємо на сервер, список усіх MIME типів можна вивчити за наступним посиланням: 
      https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
    },

    Список всіх можливих заголовків: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers 
  */

  return (await axios.post("books", book)).data;

  //! old code
  // const options = {
  //   method: "POST",
  //   body: JSON.stringify(book),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };
  // return fetch(URL, options).then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }
  //   return res.json();
  // });
}

// addBook({
//   title: "Тестова книга з CSS",
//   author: "Я",
//   genres: ["CSS"],
//   rating: 9,
// })
//   .then((book) => {
//     console.log("Прийшла відповідь від бекенда можна малювати");
//     console.log(book);
//   })
//   .catch((error) => console.log(error));

// addBook({
//   title: "Тестова книга з HTML",
//   author: "Я",
//   genres: ["HTML"],
//   rating: 7,
// })
//   .then((book) => {
//     console.log("Прийшла відповідь від бекенда можна малювати");
//     console.log(book);
//   })
//   .catch((error) => console.log(error));

/**
 * Update (PUT/PATCH)
 */

/*
в базі є обʼєкт:
{
    title: "Тестова книга з CSS",
    author: "Я",
    genres: ["CSS"],
    rating: 9,
    id: "1"
}
ці два методи оновлюють вже існуючі дані на сервері

* PUT - повне оновлення даних (також цей метод може створити дані на сервері якщо їх не було, наприклад, коли ви намагаєтесь оновити неіснуючі дані)
body: {
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я"
}

Отримаємо наступну відповідь від серверу:

{
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я",
  id: "1"
}


* PATCH - часткове оновлення даних
body: {
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я"
}

Отримаємо наступну відповідь від серверу:

{
  title: "Оновлена тестова книга по CSS",
  author: "Оновлений автор я",
  genres: ["CSS"],
  rating: 9,
  id: "1"
}
*/

async function updateBookById(update, bookId) {
  return (await axios.patch(`books/${bookId}`, update)).data;

  //! old code
  // const options = {
  //   method: "PATCH",
  //   body: JSON.stringify(update),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // return fetch(`${URL}/${bookId}`, options).then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }

  //   return res.json();
  // });
}

// updateBookById({ title: "Велика нова книга по NODEJS" }, 1)
//   .then((data) => {
//     console.log("Успішно оновлено дані!");
//     console.log(data);
//   })
//   .catch(console.log);

// updateBookById({ rating: 1 }, 8)
//   .then((data) => {
//     console.log("Успішно оновлено дані!");
//     console.log(data);
//   })
//   .catch(console.log);

// updateBookById({ rating: 4, author: "Манго" }, 13)
//   .then((data) => {
//     console.log("Успішно оновлено дані!");
//     console.log(data);
//   })
//   .catch(console.log);

/**
 * Delete (DELETE) - видаляє дані з серверу по id
 */

async function removeBook(bookId) {
  return (await axios.delete(`books/${bookId}`)).data;

  /*
(await axios.delete(`books/${bookId}`)) -> {data, status, statusText...}
{data, status, statusText...}.data -> данні з серверу
*/

  //! old code
  // const options = {
  //   method: "DELETE",
  // };

  // return fetch(`${URL}/${bookId}`, options).then((res) => {
  //   if (!res.ok) {
  //     throw new Error(res.status);
  //   }

  //   return res.json();
  // });
}

removeBook(1)
  .then((data) => {
    console.log("Успішно видалено дані!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Таких даних не існує!");
    console.log(err);
  });

removeBook(2)
  .then((data) => {
    console.log("Успішно видалено дані!");
    console.log(data);
  })
  .catch((err) => {
    console.log("Таких даних не існує!");
    console.log(err);
  });
