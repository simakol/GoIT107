/*
 * Створюємо та додаємо колекцію
 */
const options = [
  { label: 'червоний', color: '#F44336' },
  { label: 'зелений', color: '#4CAF50' },
  { label: 'синій', color: '#2196F3' },
  { label: 'сірий', color: '#607D8B' },
  { label: 'рожевий', color: '#E91E63' },
  { label: 'індіго', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

const createColorPickerMarkup = options =>
  options.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('color-picker__option');
    buttonEl.type = 'button';
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    return buttonEl;
  });

const buttonElements = createColorPickerMarkup(options);
console.log(buttonElements);

colorPickerContainerEl.append(...buttonElements);
