/**
 * Форматування посилання (endsWith)
 *
 * Напиши скрипт який перевіряє чи закінчується значення
 *  змінної link символом /. Якщо ні, додай до кінця
 *  значення link цей символ.
 * Використовуй конструкцію if...else.
 */

// let link = "https://my-site.com/about";

// function formatLink(link) {
//   //variant 1
//   // if (link.endsWith("/")) {
//   //   return link;
//   // } else {
//   //   // return link + "/"
//   //   return `${link}/`;
//   // }

//   //variant 2
//   return link.endsWith("/") ? link : `${link}/`;
// }

// console.log(formatLink(link));

/**
 * Форматування посилання (includes та логічне «І»)
 * Напиши скрипт який перевіряє чи закінчується значення
 * змінної link символом /. Якщо ні, додай до кінця
 * значення link цей символ, але тільки в тому випадку,
 * якщо в link є підрядок "my-site".
 * Використовуй конструкцію if...else або тернарний оператор.
 */

// let url = "https://somesite.com/my-site/about";
// // console.log(url);

// function formatLink(link) {
//   //variant 1
//   // if (!link.endsWith("/") && link.includes("my-site")) {
//   //   return `${link}/`;
//   // } else {
//   //   return link;
//   // }

//   //variant 2
//   return !link.endsWith("/") && link.includes("my-site") ? `${link}/` : link;
// }

// console.log(formatLink(url));

/*
 * Пошук у рядку методом includes()
 */

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";

const string2 = "Biggest SALE this week, don't miss out!";

const string3 = "#fatlivesmatter advertising campaign";

function checkSpamWords(string) {
  const blacklistedWord1 = "spam";
  const blacklistedWord2 = "sale";

  // приводимо речення до нижнього регістру, тому що пошук заборонених слів буде відбуватись шляхом порівнянь, де регістр є чутливим
  const stringLowerCase = string.toLowerCase();

  // робимо перевірку, якщо в реченні є (includes) хоча б одне (||) з двох забороненх слів - то результат виразу буде true, тобто, речення має заборонені слова
  const result =
    stringLowerCase.includes(blacklistedWord1) ||
    stringLowerCase.includes(blacklistedWord2);

  // повертаємо результат для подальшого використання
  return result;
}

console.log(
  "Статус наявності заборонених слів у 1 реченні",
  checkSpamWords(string1)
);
console.log(
  "Статус наявності заборонених слів у 2 реченні",
  checkSpamWords(string2)
);
console.log(
  "Статус наявності заборонених слів у 3 реченні",
  checkSpamWords(string3)
);
