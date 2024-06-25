/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

console.dir(document);

const magicBtn = document.querySelector('.js-magic-btn');
console.dir(magicBtn);

const firstListElement = document.querySelector('#firstListElement');
console.dir(firstListElement);

const ulEl = document.querySelector('ul');
console.dir(ulEl);

const liEl = document.querySelectorAll('li');
console.log(liEl);

/*
 * Властивості «навігації» по DOM-вузлах
 *
 */
console.log('======');
console.log(ulEl.firstChild); // повертає перший вузол (може бути або вузол тексту, або вузол елементу, або вузол коментаря)
console.log(ulEl.firstElementChild); // повертає перший вузол ЕЛЕМЕНТУ

console.log(ulEl.children); // псевдомасив всіх дітей (дочірних елементів контейнеру)

console.log(ulEl.lastChild);
console.log(ulEl.lastElementChild);
