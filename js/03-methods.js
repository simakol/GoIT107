/**
 * Методи масиву
 *
 * - join
 * - split
 * - slice
 * - concat
 * - indexOf
 * - push/pop
 */

const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

//* .join(separator) - викликається на масиві та приймає один параметр (знак розділювача). Цей метод повертає рядок у якому всі елементи масиву будуть розділені нашим параметром separator. з масиву в рядок
const coursesStr = courses.join(" | ");

// console.log(`На курсі ми вивчаємо такі технології: ${coursesStr}`);

//* .split(splitter) - викликається на рядку та приймає один параметр (знак розділювача). Повертає новий масив де кожен елемент було вибрано з рядка з урахуванням розділювача splitter. з рядка в масив

const fruits = "banana, apple, melon, lemon";

const fruitsArr = fruits.split(", ");

console.log(fruitsArr);

//* .slice(start, end) - повертає новий масив з копією елементів від start до end не включно масиву на якому він викликається. [start, end)

const someFruitsCopy = fruitsArr.slice(1, 3); // [1, 3) - тобто ми робимо копію починаючи з індексу 1 і закінчуючи на індексі 2 (тому що 3 не включається в діапазон) від 1 до 3 не включно
console.log(someFruitsCopy);

// console.log(fruitsArr.slice(1));

//* .concat(...arrs) - повертає новий масив у якому зілʼє всі масиви, які ви передаєте в якості аргументів в один

const moreFruits = fruitsArr.concat(
  ["watermelon", "strawberry"],
  ["kiwi", "papaya"],
  ["orange"],
  ["mango"]
);

console.log(moreFruits);

//* indexOf(value) - повертає індекс першого входження яке буде рівним значенню value, якщо такого елементу не знайшлось - повертається -1

console.log("Індекс полуниці:", moreFruits.indexOf("strawberry"));
console.log("Індекс сливи:", moreFruits.indexOf("plum"));

//* .push(value) - додає значення value у кінець масиву

moreFruits.push("plum", "cherry");
console.log(moreFruits);

//* .pop() - видаляє ОДНЕ значення з кінця масиву

moreFruits.pop();
console.log(moreFruits);

//* .includes(value) - повертає true якщо значення value зустрічається у масиві і повертає false, якщо значення value у масиві немає

console.log("Чи є такий фрукт як огірок?", moreFruits.includes("cucumber"));
console.log("Чи є такий фрукт як яблуко?", moreFruits.includes("apple"));