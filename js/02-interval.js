/*
 * Метод setInterval(callback, delay, args)
 */

const logger = (time) => {
  console.log(`Лог кожні ${time} мс - ${Date.now()}`);
};

console.log("До виклику setInterval");

// setInterval(logger, 2000, 2000)

console.log("Після виклику setInterval");

/*
 * Очищення інтервалу за допомогою clearInterval(intervalId)
 */

const intervalId = setInterval(logger, 2000, 2000);

setTimeout(() => {
  console.log("Зупинка інтервалу!");
  clearInterval(intervalId); // метод, який зупинить інтервальний виклик фукнції, приймає ідентифікатор вашого інтервалу
}, 10e3);
