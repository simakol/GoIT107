/**
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

/*
всі ці методи потрібні для привʼязки нового контексту до вашої функції

call - викликає фукнцію на місці з новим контекстом (аргумети передаються через кому)

apply - викликає фукнцію на місці з новим контекстом (аргумети передаються у вигляді масиву)

bind - повертає копію фукнції з новим контекстом, щоб можна було викликати її пізніше (наприклад, коли йде передача колбек фукнції). (аргумети передаються через кому)
*/

const showThis = function (a, b, arr) {
  console.log(a, b, arr);
  console.log("showThis -> this", this);
};

// showThis();

const objA = {
  a: 5,
  b: 10,
};

// func.call(newThis, ...args)
// func.apply(newThis, [...args])

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

const objB = {
  x: 788,
  y: 25,
};

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

/**
 * -------------------------------
 */
const changeColor = function (color) {
  console.log("changeColor -> this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

// changeColor.call(hat, "orange");
// console.log(hat);

const sweater = {
  color: "green",
};

// changeColor.call(sweater, "blue");
// console.log(sweater);

/**
 * -------------------------------
 */
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor("yellow");
// console.log(hat);

// changeSweaterColor("red");
// console.log(sweater);

/**
 * -------------------------------
 */
const counter = {
  value: 0,
  increment(value) {
    console.log("increment -> this", this);
    this.value += value;
  },
  decrement(value) {
    console.log("decrement -> this", this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

// ви повинні передати копію функції зі звʼязаним контекстом

updateCounter(5, counter.increment.bind(counter));
updateCounter(3, counter.decrement.bind(counter));

console.log(counter);
