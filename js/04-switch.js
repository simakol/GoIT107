/**
 * Оператор switch
 */

// const username = "Mango";

// switch case це просто суворе порівнянн (===) вашого аргументу (username) з кожним кейсом, тобто це порівняння username === "Mango"

// switch (username) {
//   case "Mango":
//     console.log("case 1");
//     break;

//   case "Poly":
//     console.log("case 2");
//     break;

//   default:
//     console.log("block default");
// }

// if (username === "Mango") {
//   console.log("case 1");
// } else if (username === "Poly") {
//   console.log("case 2");
// } else {
//   console.log("block default");
// }

/**
 * Виконай рефакторинг коду задачі використовуючи switch.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 3;

// console.log(getTimeUntilDeadline(daysUntilDeadline));

// function getTimeUntilDeadline(daysUntilDeadline) {
//   switch (daysUntilDeadline) {
//     case 0:
//       return "Today";
//     case 1:
//       return "Tomorrow";
//     case 2:
//       return "Overtomorrow";
//     default:
//       return "Date in the future";
//   }
// }

// if (daysUntilDeadline === 0) {
//   return "Today";
// } else if (daysUntilDeadline === 1) {
//   return "Tomorrow";
// } else if (daysUntilDeadline === 2) {
//   return "Overtomorrow";
// } else {
//   return "Date in the future";
// }

/*
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається у змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * У змінну message записати повідомлення залежно від опції.
 * - 'Ви зможете забрати товар завтра з 12:00 у нашому офісі'
 * - 'Кур'єр доставить замовлення завтра з 9:00 до 18:00'
 * - 'Посилка буде відправлена сьогодні'
 * - 'Вам передзвонить менеджер'
 */

// const option = 1;
// let message = "";

// switch (option) {
//   case 1:
//     message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
//     break;
//   case 2:
//     message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посилка буде відправлена сьогодні";
//     break;
//   default:
//     message = "Вам передзвонить менеджер";
// }

// console.log(message);
