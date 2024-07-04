/**
 * Деструктуризація об'єкта в циклі
 */

const users = [
  {
    name: "Kate",
    age: 10,
  },
  {
    name: "Alex",
    age: 7,
  },
  {
    name: "Mark",
    age: 30,
  },
];

/**
 * Без деструктуризації
 */
// const names = [];

// for (const user of users) {
//   names.push(user.name);
// }

// console.log(names);

/**
 * З деструктуризацією
 */

const names = [];
const ages = [];

for (const { name, age } of users) {
  names.push(name);
  ages.push(age);
}

console.log(names);
console.log(ages);
