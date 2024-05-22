/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді
 * рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0,
 * то виводь рядок "14 г.", без хвилин.
 */

// const hours = 14;
// const minutes = 5;

//! variant 1
// let timestring;
// if (minutes !== 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }

//! variant 2
// const timestring = minutes !== 0 ? `${hours} г. ${minutes} хв.` : `${hours} г.`;

// console.log(timestring);

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй if...else.
 *
 * Якщо до дедлайну 0 днів - виведи рядок "Today"
 * Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
 * Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
 * Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

const daysUntilDeadline = 5;

console.log(getTimeUntilDeadline(daysUntilDeadline));

function getTimeUntilDeadline(daysUntilDeadline) {
  if (daysUntilDeadline === 0) {
    return "Today";
  } else if (daysUntilDeadline === 1) {
    return "Tomorrow";
  } else if (daysUntilDeadline === 2) {
    return "Overtomorrow";
  } else {
    return "Date in the future";
  }
}
