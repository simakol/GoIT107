/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

const allElements = document.querySelectorAll("*");

console.log(allElements);

// перебираємо кожен елемент на сторінці та вішаємо обробник подій по кліку на абсолютно кожен елемент на сторінці (в алерт виводимо його адйі коли він спрацьовує) (це дуже поагний код, не робіть так, нам це треба для прикладу)

// allElements.forEach((el) => {
//   // за замовчуванням addEventListener фіксує процес сплиття події
//   el.addEventListener("click", () => alert(el.id));

//   // цей addEventListener буде фіксувати процес занурення
//   el.addEventListener("click", () => alert(el.id), true);
// });

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const innerChild = document.querySelector("#inner-child");


parent.addEventListener("click", (event) => {
    console.log("=== Click event ===");

    console.log("event.target ->", event.target); //* посилання на елемент на якому відбулася подія (або елемент, який цю подію викликав). Куди ми клікнули - те і буде таргетом

    console.log("event.currentTarget ->", event.currentTarget); //* посилання на елемент на якому висить обробник подій, в нашому випадку це елемент parent (елемент перед крапкою parent.addEventListener)
})