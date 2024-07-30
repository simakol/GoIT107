/**
 * Синтаксис async/await
 * try...catch
 */

/*
 - async/await - фактично це імітація синхронності асинхронного коду (послідовність, як .then)
 - async - оператор який оголошує асинхронну фукнцію. В асинхронних функція можна використовувати оператор await (І ТІЛЬКИ В НИХ). Будь-яка асинхронна фукнція повертає Promise (завжди)!!!
===
async function foo(){
  return 5;
}

foo().then(console.log)
===

- await - оператор який можна використовувати тільки в асинхронних фукнціях. Цей оператор пишеться перед асинхроними операціями (промісами) і заморожує виконання фукнції до ти пір поки проміс не виконається (не перейде в стан Fullfilled або Rejected). І як тільки проміс виконається оператор await буде повертати відразу дані промісу. Але якщо статус промісу реджектед - то у нас примусово викидується помилка, яку треба обробити

*/

//* with async

const fetchTodos = async () => {
  // await заморозив виконання фукнції до тих пір, поки запит не поверне результат. В константу response буде збережено результат відповіді від серверу (обʼєкт типу Response), а не проміс, як ми звикли. Тому що await повертає завжди результат виконання промісу, який потім можна зберети кудись. Тому тут і явно показана ось ця імітація синхронності асинхронного коду. Бо візуально ми зберегли асинхронну операцію в синхронну константу.
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");

  // перевірка на 404 відповідь
  if (!response.ok) {
    throw new Error(response.status);
  }

  const data = await response.json();

  return data;
};

//? var 1

// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//? var 2

async function start() {
  try {
    console.log("Посилаємо запит на тудушки!");

    const todos = await fetchTodos();
    console.log(todos);

    console.log("Отримали всі результати без помилок!");
  } catch (err) {
    console.log("Отримали помилку під час запиту:", err);
  }
}

// start();


//* without async

// const fetchTodos = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return;
//     });
// };

// fetchTodos()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
