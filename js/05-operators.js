/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор &&
 * - Оператор ||
 * - Оператор !
 */

// console.log(Boolean(true)); // true
// console.log(Boolean(false)); // false
// console.log(Boolean(NaN)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(3.14)); // true
// console.log(Boolean(-10)); // true
// console.log(Boolean("")); // false
// console.log(Boolean("hello")); // true
// console.log(Boolean("false")); // true
// console.log(Boolean("0")); // true
// console.log(Boolean(" ")); // true

//* True: всі числа, крім 0 | будь-який рядок, у якому є хоча б один символ, true

//! False: 0, NaN, пустий рядок, null, undefined, false

/*
результатом ивкористання логічного або і логічного і завжди буде один з перелічених операндів (третього не дано).

* - Логічне АБО (||): повертає перше значення яке при конвертації в булевий тип поверне вам true (якщо таких значень не буде, тобто, всі будуть false, то просто повертається останнє зі списку)

* - Логічне І (&&): повертає перше значення яке при конвертації в булевий тип поверне вам false (якщо таких значень не буде, тобто, всі будуть true, то просто повертається останнє зі списку)

* - Логічне НІ (!): перевертає логічний тип на зворотній, тобто якщо було true - робить false, якщо було false - зробить true. Результатом цієї логічної операції завжди буде буль.

*/

/**
 * --------------------------------
 */

// console.log(5 && 4);
// // true(5) && true (4) -> 4

// console.log(5 && "mango");
// // true(5) && true ("mango") -> "mango"

// console.log(7 && 0 && " ");
// // true (7) && false (0) && true (" ") -> 0

// console.log("false" && null && 0 && true);
// // true ("false") & false (null) && false (0) && true (true) -> 1 false -> null

/**
 * --------------------------------
 */

// console.log(false || 5);
// false || true (5) -> 5

// console.log(false || null);
// false || false (null) -> null

/**
 * --------------------------------
 */

// console.log(!5);
// // !true -> не істина -> false
// console.log(!false);

// console.log(!!" ");
// // !!true -> !false -> true

// console.log(!true); // false

// console.log(!10); // !Boolean(10) -> !true -> false
// console.log(!0); // !Boolean(0) -> !false -> true

/**
 * --------------------------------
 */

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && "kiwi"); // "kiwi"

// console.log(true && 0 && "kiwi"); // 0

// console.log(true || 3); // true

// console.log(true || 3 || 4); // true

// console.log(true || false || 7); // true

// console.log(null || 2 || undefined); // 2

console.log((1 && null && 2) > 0);
// (1 && null && 2) -> null
// null > 0 -> 0 > 0 -> false

// console.log(null || (2 && 3) || 4);
