/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

/*
    1. вішаємо слухач на кнопку старт + блокуємо кнопку поки не закінчилась гра
    2. створити масив промісів на основі дітей контейнеру (запустимо метод map який перетворить кожен елемент container.children на проміс)
    3. Всередині мепу створюємо новий проміс та рандомно визначаємо його стан і рандомно переводимо проміс у стан фулфілд або в стан реджектед
    4. за допомогою методу Promise.allSettled обробимо масив усіх промісів
    5. очищуємо слоти контейнеру
    6. наповнюємо контейнер смайлами в залежності від стану з затримкою в 1 секунду
    7. робимо перевірку на результат, якщо всі проміси в стані фулфілд або всі проміми в стані реджектед - ми перемогли, інакше - програли
*/

const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");

startBtn.addEventListener("click", handleStartGame);

function handleStartGame(event) {
  // step 1
  event.target.disabled = true;

  // step 2
  const promises = [...container.children].map((el) => {
    // step 3
    return new Promise((resolve, reject) => {
      const isPromiseFullfilled = Math.random() > 0.5;

      if (isPromiseFullfilled) {
        resolve("🤑");
      }

      reject("👿");
    });
  });

  // step 4
  Promise.allSettled(promises).then((items) => {
    console.log(items);
    result.textContent = ""; // очищуємо поле результату

    // step 7
    const isWinner =
      items.every(({ status }) => status === "fulfilled") ||
      items.every(({ status }) => status === "rejected");
    // ми перемогли, якщо кожен проміс в стані fulfilled, або якщо кожен проміс в стані rejected

    items.forEach((item, i) => {
      // step 5
      container.children[i].textContent = ""; // очищуємо кожен окремий слот по порядку

      // step 6
      setTimeout(() => {
        container.children[i].textContent = item.value || item.reason; // якщо успішне виконання то в обʼєкті item смайлик буде знаходитись у властивості value, а якщо не успішне виконання, то смайлик буде у властивості reason

        // ще один варіант підсумку гри (менш ефективний, тому що буде перевіряти кожен виклик фукнції таймауту, а у нас їх 3)
        // роблю перевірку на те, що я знаходжусь на останньому елементі масиву відповідей
        // if (container.children.length - 1 === i) {
        //   event.target.disabled = false; // розблокую кнопку для наступної гри
        //   result.textContent = isWinner ? "Winner" : "Loser (Try next time)";
        // }
      }, 1000 * (i + 1));
      /*1000 * (i + 1) - для послідовних викликів сеттаймауту, задаємо різний час
      1. i = 0, 1000 * (0 + 1) -> 1000
      2. i = 1, 1000 * (1 + 1) -> 2000
      3. i + 2, 1000 * (2 + 1) -> 3000
      */
    });

    // показуємо переможця після того, як всі слоти покажуться + розблоковуємо кнопку
    setTimeout(() => {
      event.target.disabled = false; // розблокую кнопку для наступної гри
      result.textContent = isWinner ? "Winner" : "Loser (Try next time)";
    }, container.children.length * 1000);
    //container.children.length * 1000 -> довжина слотів = 3, значить затримка буде рівна 3м секундам
  });
}
