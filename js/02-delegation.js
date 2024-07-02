/**
 * Додавання прослуховувача подій на кожен елемент
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

const container = document.querySelector(".container");

//! Поганий варіант рішення задачі, тому що ви вішаєте обробник на кожен елемент вашої колекції. Кожен обробник подій - це по суті нескінченний цикл в браузері який слідкує за подіями на елементі. В даному рішенні ми вішеємо 3 обробники на 3 елементи, при тому що код обробки події у них однаковий.

// [...container.children].forEach((box) =>
//   box.addEventListener("click", handleClick)
// );

function handleClick(event) {
  // в даному прикладі event.currentTarget та event.target будуть однаковими, тому що currentTarget це елемент на якому висить обробник (тобто на кожному box). А target це елемент на якому відбулася подія, а подія може відбутись тільки на кожному елементі box.

  const color = event.currentTarget.dataset.color;
  console.log("color =>", color);
}

/**
 * Дегегування подій
 *
 * Отримай колір квадратика по якому було здійснено клік
 */

//* Найкращий варіант рішення задачі за допомогою делегування подій. В цьому рішенні обробник подій ОДИН і він висить на батьківському елементі.

container.addEventListener("click", handleBoxClick);

function handleBoxClick(event) {
    console.log("currentTarget ->", event.currentTarget);
    console.log("target ->", event.target);

  //перевіряємо місклік, тобто перевірка на те, що ми клікнули поза елементами box. Тут перевіряється рівніть currentTarget і target. Вони будуть рівними тільки тоді, коли ми клікнемо на сам елемент батьківсього container. А батьківський container і є цим місклікліком між квадратиками.
  if (event.currentTarget === event.target) {
    return;
  }

  const color = event.target.dataset.color;
  console.log("color =>", color);
}


