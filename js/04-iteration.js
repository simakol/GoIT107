/**
 * Перебір об'єкта
 *
 * - Цикл for...in
 * - Метод Object.keys
 * - Метод Object.values
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// for (const key in feedback) {
//   // console.log(key);
//   // console.log(feedback[key]);
//   /*
//   feedback["good"] -> 5
//   feedback["neutral"] -> 10
//   feedback["bad"] -> 3
//   */
//   totalFeedback += feedback[key];
// }

// console.log("totalFeedback:", totalFeedback);

//* for in - перебирає ключі(індекси)
//* for of - перебирає значення в масивах (для обʼєктів не використовується)

/**
 * ---------------------------------
 */

//* Object.keys(feedback); - повертає масив ключів
//* Object.values(feedback); - повертає масив значень

// const keys = Object.keys(feedback);
// console.log(keys);

// for(const key of keys){
//   console.log(key);
//   console.log(feedback[key]);
//   totalFeedback += feedback[key];
// }

// console.log("totalFeedback:", totalFeedback);

const values = Object.values(feedback); // [5, 10, 3]
console.log(values);

for (const value of values) {
  console.log(value);
  totalFeedback += value;
}

console.log("totalFeedback:", totalFeedback);
