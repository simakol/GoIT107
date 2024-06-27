/**
 * - Подія input
 * - Подія blur
 * - change
 *
 * Виводь в консоль все що користувач вводить в input
 */

const userName = document.querySelector(".js-user-name");

// userName.addEventListener("input", handleInput);
// input - подія яка викликається кожного разу коли користувач додає або видаляє символ в полі вводу

function handleInput(event) {
  // event - це обʼєкт який є у кожній функції яка оброблює подію, він зберігає абсолютно всю інформацію про подію яка тільки що відбулась

  // currentTarget - властивість події яка зберігає посилання на елемент на якому висить обробник. В нашому випадку це поле вводу userName (значення яке стоїть перед крапкою методу userName.addEventListener)

  console.log(event);
  console.log(event.currentTarget.value); // .value - отримати значення input, textarea, select
}

//* change - подія яка викликається кожного разу коли користувач ЗМІНИВ щось в полі вводу і прибрав фокус з поля
// userName.addEventListener("change", handleInput);

/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

// blur - спрацьовує тоді, коли користувач втрачає фокус з поля вводу, чимось схоже на подію change, але різниця в тому що chenge перевіряє чи змінили ви щось в полі вводу, якщо так то викликається фукнція, якщо ні - не викликається, а от подія blur цієї перевірки не робить

userName.addEventListener("blur", handleBlur);

function handleBlur(event) {
  console.log(event);
  const userName = event.currentTarget.value;
  alert(`Hello, ${userName}`);
}
