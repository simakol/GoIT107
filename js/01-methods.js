/**
 * Методи рядків
 *
 *  - slice
 *  - toLowerCase/toUpperCase
 *  - includes
 *  - startsWith/endsWith
 *  - indexOf
 *  - trim
 */

const username = "Jacob Mercer";

//* метод - це по суті звичайна функція, яка виконує якусь дію, але вона викликається через крапку на якомусь значенні. value.method()

//! ===================================

//* .slice(start[, end]) - метод який повертає копію підрядка від індексу start до індексу end не включно, при чому ці параметри не є обовʼязковими

// const usernameCopy = username.slice(); // повна копія рядка
// console.log(usernameCopy);

// console.log(username.slice(6)); // часткове копіювання рядка, ми вказали що почнемо робити копію з 6 індексу (індекси починаються з 0), кінець копіювання ми не вказали, значить воно скопіює до кінця всього рядка

// console.log(username.slice(6, 9)); // ми зробили копію підрядка перших 3 літер прізвища [6, 9)

// console.log(username.slice(10, 1)); // якщо індекс початку більший за індекс кінця, то повертається пустий рядок

// console.log(username.slice(-3)); // якщо значення є відʼємним, то ви копіюєте з кінця рядка

// console.log(username.slice(-6, -3)); // копіювання з кінця рядка, початок в позиції -6 символів від кінця рядка, а кінець копіювання в позиції -3 символи від кінця рядка

// console.log(username.slice(4, -2));
// console.log(username.slice(-9, 8));
// console.log(username.slice(3, 8));

//! ===================================

//* toLowerCase/toUpperCase - ці методи маніпулюють регістром, піднімаючи всі букви у верхній або у нижній регістр

// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

//! ===================================

//*  string.includes(substring, position) - цей метод повертає буль (true/false), перевіряє наявність первного підрядка substring усередині якогось рядка sring. Також можна звузити коло пошуку вказавши з якого індексу рядку почнеться перевірка в параметрі position

// const goods = "apple, grapes, peach, banana";
// //14
// console.log("Наявність яблук:", goods.includes("apple"));
// console.log("Наявність дині:", goods.includes("melon"));
// console.log("Наявність персику:", goods.includes("peach"));
// console.log("Наявність коми:", goods.includes(","));

// console.log(goods.includes("peach", 14)); // пошук буде проводитись починаючи з 14 індексу, тобто з підрядку peach, banana і ми знайдемо що нам треба

//! ===================================

//* startsWith/endsWith - методи які повертають буль (true/false). За допомогою них можна перевірити чи починається (закінчується) рядок певним підрядком

// const url = "https://example.com";

// const isUrlSecure = url.startsWith("https");
// const isComDomen = url.endsWith(".com");

// console.log("Чи є сайт захищеним?", isUrlSecure);
// console.log("Чи підтримує сайт домен .com?", isComDomen);

//! ===================================

//* indexOf(searchValue) - повертає індекс входження підрядка searchValue в рядок. Якщо такого підрядка не має - повертається -1.

// const goods = "apple, grapes, peach, banana";

// console.log(goods.indexOf("grapes")); // 7 - індекст початку входження цього підрядка

// console.log(goods.indexOf("vine")); // -1 тому що такого підрядка не існує, відповідно його індекс знайти неможливо

//! ===================================

//* .trim() - видаляє усі пробіли на початку рядку та у кінці. Якщо у вас буде рядок "    Hello   world!    ", то метод trim() перетворить його у рядок "Hello   world!"

const msgWithSpacing = "    Hello    world!      ";
const correctMsg = msgWithSpacing.trim();

console.log(msgWithSpacing);
console.log(correctMsg);


