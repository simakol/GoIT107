/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 *
 * Оброби форму та збери відгук користувача в об'єкт
 */

const form = document.querySelector(".js-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // обовʼязково для того, щоб відмінити поведінку браузера за замовчуванням, для події сабміту це перезавантаження сторінки

  console.log(event);
  console.dir(event.currentTarget.elements);

  const elements = event.currentTarget.elements;

  const info = {
    email: elements.email.value,
    password: elements.password.value,
    comment: elements.comment.value,
  };

  console.log(info);

  event.currentTarget.reset() // очистити поля форми
}
