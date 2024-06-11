/**
 * Функція зворотнього виклика (callback)
 *
 * - Функція як значення
 * - Колбек-функції
 * - Інлайн-колбеки
 */

// функція вищого порядку, бо вона очікує іншу функція в якості параметру
function fnA(message, callback) {
  console.log(message);

  console.log(callback);
  callback(100);
}

// колбек фукнція, тому що ми передаємо її в якості аргументу
function fnB(number) {
  console.log("Log during fnB execution ", number);
}

function fnC(number) {
  console.log(number * 2);
}

// fnA("A message", fnB); //! НЕ МОЖНА ВИКЛИКАТИ КОЛБЕК ПІД ЧАС ПЕРЕДАЧІ
// fnA("A message", fnC);

/**
 * Функція calc(a, b, callback)
 */

function calc(a, b, callback) {
  return callback(a, b);
}

// console.log(
//   calc(5, 3, function (a, b) {
//     return a * b;
//   })
// ); // 15

// console.log(
//   calc(10, 6, function (a, b) {
//     return a - b;
//   })
// ); // 4

// console.log(
//   calc(15, 2, function (a, b) {
//     return a % b;
//   })
// ); // 1

// console.log(calc(4, 9, add)); // 13

function add(a, b) {
  return a + b;
}

// console.log(add(5, 7));

/**
 * Напишіть функцію each(array, callback), яка першим параметром очікує масив,
 * а другим - функцію, яка застосовується до кожного елемента масиву. Функція
 * each повинна повернути новий масив, елементами якого будуть
 * результати виклику коллбека.
 */

function each(array, callback) {
  /*
  1. Створюємо новий масив, у який будемо записувати всі видозмінені елементи
  2. Запускаємо цикл для перебору оригінального масиву (for of)
    2.1. Викликаємо колбек фукнцію і передаємо в неї поточний елемент масиву
    2.2. Пушимо результат колбек фукнції в новий масив
  3. Повертаємо новий масив
  */

  // [1]
  const result = [];

  // [2]
  for (const value of array) {
    // [2.1]
    const callbackResult = callback(value);
    // [2.2]
    result.push(callbackResult);
  }
  // [3]
  return result;
}

// Інлайн передача колбек фукнції - це створення та передача фукнції в якості аргументу в одному місці fooA(function fooB() {...})

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
