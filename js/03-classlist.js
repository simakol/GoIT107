/*
 * Інтерфейс classList
 * - add - додає новий клас до існуючих
 * - remove - видаляє клас зі списку
 * - toggle - видаляє клас якщо він є, і додає якщо його немає (переключалка)
 * - replace - заміняє один клас на інший
 * - contains - перевіряє наявність певного класу
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);


linkEl.classList.add("site-nav__link--current")
// linkEl.classList.remove("site-nav__link--current")
// linkEl.classList.toggle("site-nav__link--current")
// linkEl.classList.toggle("site-nav__link--current")
linkEl.classList.replace("site-nav__link--current", "site-nav__link--secondary")

console.log(linkEl.classList.contains("site-nav__link--current")); // false
console.log(linkEl.classList.contains("site-nav__link--secondary")); // true



console.log(linkEl.classList);