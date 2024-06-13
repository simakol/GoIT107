/**
 * Метод reduce
 *
 * - Поелементно перебирає оригінальний масив
 * - Значення, що повертається, залежить від розробника
 */

const numbers = [5, 10, 15, 20, 25];

// let total = 0;
// for (const number of numbers) {
//   total += number;
// }

// має акумулятор - це зовнішня змінна за межами циклу
// те, що повертає колбек фукнція - стане значенням акумулятору на наступній ітерації
// результато роботи методу редьюс є акумулятор

const total = numbers.reduce((total, number) => total + number, 0);
// console.log(total); // 75

/*
1. reduce((total = 0, number = 5) => 5, 0);
2. reduce((total = 5, number = 10) => 15, 0);
3. reduce((total = 15, number = 15) => 30, 0);
4. reduce((total = 30, number = 20) => 50, 0);
5. reduce((total = 50, number = 25) => 75, 0);
result = 75
*/

/**
 * Рахуємо загальну зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, salary) => total + salary,
  0
);
// console.log(totalSalary);

/**
 * Рахуємо загальну кількість годин
 */

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(
  (total, player) => total + player.timePlayed,
  0
);
// console.log(totalTimePlayed);

// const numbers1 = [1, 2, 3, 4, 5];
// const numbersMap = numbers1.map((num) => num * 2);
// const numbersReduce = numbers1.reduce((arr, num) => {
//   arr.push(num * 2);
//   return arr;
// }, []);

// console.log(numbersMap);
// console.log(numbersReduce);

/**
 * Рахуємо загальну суму товарів кошика
 */

const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, good) => total + good.price * good.quantity,
  0
);
console.log(totalAmount);
