/*
 * Створення та додавання елементів
 */

const heroEl = document.querySelector('.hero');

/*
 * Створюємо заголовок
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Це заголовок сторінки :)';

console.log(titleEl);

heroEl.append(titleEl); // додає один або кілька вузлів в кінець батьківсього елементу

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src =
  'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = ' valais-alpine-mountains-glacier';
imageEl.width = 320;
heroEl.append(imageEl);

/*
 * Створюємо та додаємо новий пункт меню
 */

const ulEl = document.createElement('ul');

for (let i = 1; i <= 5; i += 1) {
  const liEl = document.createElement('li');
  liEl.textContent = `Li number ${i}`;
  ulEl.append(liEl);
}

console.log(ulEl);

heroEl.append(ulEl);
