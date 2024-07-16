/*
 * Метод window.setTimeout(callback, delay, args)
 */

//! в джс спочатку виконується весь СИНХРОННИЙ код, а тільки потім починає виконуватись АСИНХРОННИЙ код

console.log("1. До виклику setTimeout");

setTimeout(
  () => console.log("2 - Всередині зворотного виклику для setTimeout"),
  2000
);

setTimeout(
  () => console.log("3 - Всередині зворотного виклику для setTimeout"),
  1000
);

console.log("4. Після виклику setTimeout");

/*
 * Очищення таймаута за допомогою clearTimeout(timeoutId)
 */

const logger = (time) => {
  console.log(`Лог через ${time} мс, оскільки не скасували таймаут`);
};

const timeoutID = setTimeout(logger, 2000, 2000);

console.log(timeoutID);

clearTimeout(timeoutID); // функція яка скасовує виконання таймауту, в якості аргументу обовʼязково потрібно передати ідентифікатор таймауту, який потрібно скасувати (кожна фукнція setTimeout повертає цей ідентифікатор)

/**
 * Можливість передати параметри для колбеку
 */

const id = setTimeout(
  (name, country) => {
    console.log(`Hello, my name is ${name}, I'm from ${country}`);
  },
  1000,
  "Alex",
  "Ukraine"
);
