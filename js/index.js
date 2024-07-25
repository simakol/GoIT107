/**
 * Використовуємо сервіс https://mockapi.io/ для створення бекенду
 */

/**
 * Read (GET)
 */

function fetchBooks() {}

function fetchBookById(bookId) {}

fetchBooks();
fetchBookById(2);
fetchBookById(4);

/**
 * Create (POST)
 */

function addBook(book) {}

addBook({
  title: "Тестова книга з CSS",
  author: "Я",
  genres: ["CSS"],
  Rating: 9,
})
  .then((book) => {
    console.log("Прийшла відповідь від бекенда можна малювати");
    console.log(book);
  })
  .catch((error) => console.log(error));

addBook({
  title: "Тестова книга з HTML",
  author: "Я",
  genres: ["HTML"],
  Rating: 7,
}).then((book) => {
  console.log("Прийшла відповідь від бекенда можна малювати");
  console.log(book);
});

/**
 * Update (PUT/PATCH)
 */

function updateBookById(update, bookId) {}

// updateBookById({ title: "Велика нова книга по NODEJS" }, 19);
// updateBookById({ rating: 1 }, 18);
// updateBookById({ rating: 4, author: "Манго" }, 17);

/**
 * Delete (DELETE)
 */

function removeBook(bookId) {}

// removeBook(15);
// removeBook(14);
