/**
 * Основи запиту
 * - Fetch API
 * - URL запиту
 * - Владка Network
 * - Обробка відповіді response (404 з fetch)
 *
 * https://jsonplaceholder.typicode.com/
 */

// fetch - функція яка робить запит на сервер, це асинхронна операція, тому ця функція завжди буде повертати проміс, тому оброблювати її ви будете .then

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     //response - обʼєкт відповіді від серверу

//     console.log(response);

//     // тут робимо перевірку на те, чи успішний у нас результат запиту, властивість ok буде true якщо все добре і false якщо запит не успішний (наприклад, 404 помилка)
//     if (!response.ok) {
//       // вимушено викидуємо помилку для того щоб моментально перейти в блок catch і не оброблювати наступні .then (тому що даних немає)
//       throw new Error(response.status);
//       // викид помилки всередині зену моментально переведе проміс у стан Rejected, і ми перейдемо до блоку обробки помилки
//     }

//     // .json() - повертає проміс, цей метод може бути викликаний тільки на обʼєкті Response, він дістає дані з обʼєкту та перетворює джсон на джс обʼєкт
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch(console.log);

/**
 * Всередині функції запит, зовні обробка
 */

const list = document.querySelector(".todo-list");

// функція яка створює одну лішку
const createLi = ({ title, completed }) =>
  `<li class="${completed ? "done" : "in-progress"}">${title}</li>`;

// функція яка створює розмітку усіх лішок на основі масиву який нам надав сервер
const createListMarkup = (listArr) => listArr.map(createLi).join("");

const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
};

fetchTodos()
  .then((data) => {
    console.log("TODOS:", data);
    const markup = createListMarkup(data);
    list.innerHTML = markup;
  })
  .catch(console.log);
