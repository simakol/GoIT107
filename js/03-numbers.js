/**
 * Арифметичні функції
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log("elementWidth:", elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
console.log("elementHeight: ", elementHeight);

/**
 * Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д.
 * значення змінної value. Використовуй методи Math.floor(), Math.ceil()
 * та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.
 */

const value = 27.5;

console.log(Math.floor(value)); // округлює дробові частини вниз
console.log(Math.ceil(value)); // окгруглює дробові частини вгору
console.log(Math.round(value)); // якщо дробова частина менша ніж 0.5 то округлює вниз, інакше, округлює вгору

console.log(Math.max(5, 10, 6, -4, 9.35, 100, 75));
console.log(Math.min(5, 10, 6, -4, 9.35, 100, 75));
console.log(Math.sqrt(16));
console.log(Math.pow(5, 6)); // 5^6 -> 5 ** 6

console.log(Math.pow(-4, 2));
