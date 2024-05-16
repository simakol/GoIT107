/**
 * Оператори
 *
 * - Оператори порівняння
 * - Оператори рівності
 * - Приведение типів операндів
 */

// console.log(5 > 4); // true

// console.log(10 >= "7"); // true
// 10 >= Number("7") -> 10 >= 7 -> true

// console.log("2" > "12"); // true
/*
при порівнянні строки і числа все приведеться до числа, але коли ви порівнюєте строки, то вони порівнюються посимвольно за лексикографічним словником (unicode)
*/

// 50 > 49 -> true
// console.log("2".charCodeAt(0));
// console.log("1".charCodeAt(0));

// console.log("2" < "12"); // false
// 50 < 49

/*
 1. = - оператор присвоєння
 2. == - оператор рівності зі зведенням типів (не сувора)
 3. === - оператор рівності без зведення типів (сувора)

*/

// console.log("4" == 4); // true
// string == number
// Number("4") == 4 -> 4 == 4 -> true

// console.log("6" === 6); // false
/*
порівняння без зведення типів (суворе порівняння)
суворе порівняння спочатку порінює типи даних значень, а тільки потім самі значення, якщо ж типи даних будуть різні, результатом порівняння будет false, навіть якщо самі значення будуть рівні.

"6" === 6 | string === number -> false
*/

// console.log("false" === false);  // false

// console.log(1 == true); // true

// console.log(1 === true); // false

// console.log("0" == false); // true
// Number("0") == Number(false) -> 0 == 0 true

// console.log("0" === false); // false

// console.log("Papaya" < "papaya"); // true

// console.log("P".charCodeAt(0));
// console.log("p".charCodeAt(0));

// console.log("Papaya" === "papaya"); // false

console.log(undefined == null); // true
//! undefined і null це унікальні значення які ні в що не перетворюються і завжди дорівнють тільки одне одному (при порівняннях ==)

console.log(undefined === null); // false
