/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

console.log(user);
const keys = Object.keys(user);

console.log(keys);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}

console.log("================================");

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

/*
1. let sum = 0; - створити змінну для накопичення суми
2. отримати масив значень всіх зарплат за допомогою Object.values(salaries)
3. перебрати масив значень за допомогою циклу for of та додати кожне значення до змінної суми
*/

function sumSalaries(salaries) {
  let sum = 0;

  const salariesArr = Object.values(salaries);

  for (const salary of salariesArr) {
    sum += salary;
  }
  return sum;
}

console.log("SUM:", sumSalaries(salaries));
console.log("SUM:", sumSalaries({ Dima: 100, Alice: 250, Mark: 260 }));
