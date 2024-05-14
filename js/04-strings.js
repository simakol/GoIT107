/**
 * Рядки
 *
 * - Конкатенація рядків
 * - Шаблонні рядки
 * - Довжина рядка
 * - Індексація елементів
 * - Незмінність рядків
 */

// const firstName = "Chelsy";
// const lastName = "Emerald";
// // const fullName = firstName + " " + lastName; //* + в даному прикладі виступає оператором конкатенації рядків
// const fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// console.log("Quote: \"lorem isum dolor\""); // екранування

// const quantity = 15;
// const orderMsg = `You ordered ${quantity} bots`;
// console.log(orderMsg);

// const message = "This string is 28 chars long";
// console.log(message.length); // властивість для отримання довжини рядка (тобто кількості символів)

// console.log(message[0]); // звертаюсь до першої букви рядка за індексом (індекси починаються з цифри 0)
// console.log(message[message.length - 1]); // отримуємо останню букву речення (довжина - 1)

// message[0] = "A" // змінити рядок неможливо, він є незмінним, його можна тільки читати
//! TypeError: Cannot assign to read only property '0' of string

// console.log(message);

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставлені в рядок.
 */
const companyName = "Cyberdyne Systems";
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
