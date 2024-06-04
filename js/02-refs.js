/**
 * Об'єкти
 *
 * - Тип даних за посиланням
 * - Масиви і функції - це об'єкти
 */

/**
 * --------------------------
 */

// console.log([1, 2, 3] === [1, 2, 3]); // false
// console.log({a: 1} === {a: 1}); // false

const a = { x: 1, y: 2 };
const b = a;

console.log(a === b); // true

b.x = 100;

console.log(a.x); // 100

//* =====================

const arr = [1, 2, 3];

arr.hello = ":)";

console.log(arr);
console.log(arr.hello);

function foo() {
  console.log("hello");
}

foo.hello = "world!";

console.dir(foo); // вивід в консоль у вигляді обʼєкту

console.log(foo.hello);
