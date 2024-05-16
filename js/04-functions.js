/**
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 */

// DRY - do not repeat yourself

//* function declaration - оголошення фукнції
//* () - список параметрів
//* {} - тіло функції

// function displayMsg() {
//   console.log("Hello World!");
// }

// // виклик фукнції
// displayMsg(); // () - список аргументів
// console.log("aaa");
// displayMsg();
// displayMsg();
// displayMsg();

//! ==========================================

// (username) - це параметр, це звичайна змінна, яка доступна тільки всередині функції, її значення завжди буде приходити під час виклику фукнції зі списку аргументів

// function greeting(username) {
//   // let username;
//   console.log(`Hello, ${username}!`);
// }

// //("Dima") - це аргумент, це значення для параметру функції
// greeting("Dima");
// greeting("Alice");
// greeting("John");

//! ==========================================

//* console.log(sum(8, 99)); // це особливість function declaration, вони доступні в будь-якому місці програми, в не залежності від того, де функція була оголошена, ця технологія називається hoisting

//* кожна функція в джс повинна щось повертати, за замовчуванням усі фукнції повертають значення undefined
function sum(a, b) {
  //   const result = a + b;

  //   return result;
  return a + b;

  // 1. функція далі не виконується
  // 2. функція повертає результат на місце виклику
}
//* повернення - це результат роботи фукнції, який можна використовувати у зовнішньому коді після розрахунків

// console.log(sum(8, 99));

// console.log(sum(5, 70)); // 75
// console.log(sum(4, 9)); // 13

// console.log(sum(5, 9) - 3); // 14 - 3
// undefined - 3 -> NaN

//! ==========================================

//Global Scope: foo

//     function foo(a){
//         //Local scope: a
//         console.log(a); // виклик всередині
//     }

// foo(5)
// console.log(a); // виклик з глобальної області

// function convertToInt(string) {
//   const number = Number.parseFloat(string);
//   const result = Math.round(number);

//   return result; // для отримання значення(результату розрахунків всередині функції) у зовнішній код на місце її виклику
// }

// console.log(convertToInt("25.7px")); // 26
// console.log(convertToInt("100.5px")); // 101
// console.log(convertToInt("3.01px")); // 3

// const newFigHeight = convertToInt("25.7px") + 5;

// console.log(newFigHeight);

//! ==========================================

/**
 * Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 * маси тіла людини. Для цього необхідно розділити вагу на
 * квадрат висоти.
 *
 * Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть
 * бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової
 * частини може бути кома.
 *
 * Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */

function calcBMI(weight, height) {
  /*
 1. замінити кому на крапку (для цього є метод .replace())
 2. зробити усі значення числами
 3. зробити обчислення
 4. округлити до одного знаку після кому (toFixed) та повернути результат
*/

  // перший крок алгоритму
  weight = weight.replace(",", ".");
  height = height.replace(",", ".");

  // другий крок алгоритму
  weight = Number(weight);
  height = Number(height);

  // третій крок алгоритму

  const result = weight / (height * height);

  //четвертий крок алгоритму
  return Number(result.toFixed(1));
  // toFixed(amount) - округлює значення amount знаків після коми, результатом виклику цього методу є строка
}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); // 28.8
