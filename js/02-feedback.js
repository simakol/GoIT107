const STORAGE_KEY = "feedback-form";

const form = document.querySelector(".feedback-form");

populateForm();

form.addEventListener("submit", handleFormSubmit);
form.addEventListener("input", handleFormInput);

/*
 * - Скасовуємо стандартну поведінку
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */

function handleFormSubmit(event) {
  event.preventDefault();

  localStorage.removeItem(STORAGE_KEY);

  event.currentTarget.reset();
}

/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховище
 */

function handleFormInput(event) {
  const value = event.target.value;
  const key = event.target.name;

  let savedFeedbackData = {};

  try {
    savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    console.log(err);
    return;
  }

  // якщо в ЛС існують дані (обʼєкт), то ми звертаємось вже до існуючого обʼєкту, та змінюмо/створюємо поля зі значеннями
  if (savedFeedbackData) {
    savedFeedbackData[key] = value;
  } else {
    // якщо в ЛС немає взагалі даних (обʼєкту), то ми його самостійно створюємо та записуємо туди перший ключ з значенням
    savedFeedbackData = {
      [key]: value,
    };
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedFeedbackData));
  } catch (err) {
    console.log(err);
    return;
  }
}

/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */

function populateForm() {
  let savedFeedbackData = {};

  try {
    savedFeedbackData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (err) {
    console.log(err);
    return;
  }

  // якщо в ЛС не існує таке значення, то виходимо з фукнції
  if (!savedFeedbackData) {
    return;
  }

  for (const key in savedFeedbackData) {
    form.elements[key].value = savedFeedbackData[key];
  }
}
