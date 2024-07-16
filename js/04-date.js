/*
 - Створення
 - Unix-час
 - Методи
 - Різниця часу
 - Date.now()
*/

const now = Date.now(); // кількість мілісекунд яка пройшла з 1 січня 1970 року
console.log("now", now);

const today = new Date();

console.log("today:", today);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
const someday = new Date("3 September 2006");
console.log("someday:", someday);

const diff = today - someday;

console.log("diff:", diff);

console.log(diff / 1000 / 60 / 60 / 24); // кількість діб яка пройшла з 3 вересня 2006 року

console.log("Рік:", today.getFullYear());
console.log("Число (день):", today.getDate());
console.log("День тижня:", today.getDay()); // 0 - неділя, 6 - субота
console.log("Номер місяця:", today.getMonth()); // місяці, так само як і тижні починаються з 0
console.log(
  "Кількість мілісекунд яка пройшла з 1 січня 1970р",
  today.getTime()
);
console.log("Поточна година:", today.getHours());
console.log(today.toLocaleTimeString("es-US"));
console.log(today.toLocaleTimeString("ua-UK"));
console.log(`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`);
