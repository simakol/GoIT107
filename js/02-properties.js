/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const imageEl = document.querySelector('.hero__image');
console.dir(imageEl);
imageEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imageEl.alt = 'New cat!!!!';

const heroTitleEl = document.querySelector('.hero__title');
heroTitleEl.textContent = "Це новий заголовок доданий через JS"

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

console.log(imageEl.getAttribute("alt"));
console.log(imageEl.setAttribute("alt", "new value for alt"));
console.log(imageEl.hasAttribute("alt")); // true
console.log(imageEl.removeAttribute("alt"));
console.log(imageEl.hasAttribute("alt")); // false

/*
 * Data-атрибути
 */

const actions = document.querySelectorAll('.actions button');
console.log(actions[0].dataset.action);
