/*
 * Властивість innerHTML
 * - зчитування
 * - запис
 */

const titleEl = document.querySelector('.title');
console.log(titleEl.innerHTML);

titleEl.innerHTML = "<a href='#'>Це посилання</a>"; // повністю замінюємо розмітку контейнеру заголовку
titleEl.innerHTML = ''; // повністю видалити всю розмітку контейнеру

/*
 * Вставка розмітки за допомогою insertAdjacentHTML()
 */

const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-container');

const createColorPickerMarkup = options =>
  options
    .map(
      option =>
        `<button type="button" class="color-picker__option" style="background-color: ${option.color}">${option.label}</button>`
    )
    .join('');

const buttonsMarkup = createColorPickerMarkup(options);

console.log(buttonsMarkup);

colorPickerContainerEl.insertAdjacentHTML('beforeend', buttonsMarkup);
