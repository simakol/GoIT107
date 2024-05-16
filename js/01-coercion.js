/**
 * Перетворення типів: числа
 *
 * - Явне перетворення типів
 * - Неявне перетворення типів
 */

console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("Jacob")); // NaN
console.log(Number("25px")); // NaN
//* NaN - not a number - ви отримуєте його тоді, коли якесь значення неможливо перетворити в числовий тип

console.log(typeof NaN); // number




console.log("5" * 2); // 10
// Number("5") * 2 = 5 * 2 = 10
console.log("10" - 5); // 5
// Number("10") - 5 = 10 - 5 = 5
console.log(5 + true); // 6
// 5 + Number(true) -> 5 + 1 = 6
console.log(5 - true); // 4

console.log("5" * "2"); // 10
console.log("5" + 2); // "52"

console.log(5 * "a"); // NaN
// 5 * Number("a") -> 5 * NaN = NaN
