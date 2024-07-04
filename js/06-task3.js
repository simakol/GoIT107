/**
 * Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
 * так щоб вона приймала об'єкт з параметрами будинку,
 * включаючи довжини сторін будинку.
 * Функція повинна розрахувати та повернути периметр будинку.
 */

function calculateHousePerimeter({ a, b, c, d }) {
  const perimeter = a + b + c + d;
  return perimeter;
}

const houseSides = {
  a: 10,
  b: 15,
  c: 10,
  d: 15,
};

const perimeter = calculateHousePerimeter(houseSides);
console.log(`Периметр будинку: ${perimeter}`);

// fn(true, 10, "primary", false, null)

// fn({
//   status: true,
//   age: 10,
//   accountType: "primary"
// })

function calculatePerimetr({ width, length }) {
  return width * 2 + length * 2;
}

console.log(calculatePerimetr({ width: 5, length: 2 }));
console.log(calculatePerimetr({ width: 10, length: 4 }));

const obj = {
  firstName: "Jack",
};

const { firstName: username, lastName } = obj;
// const username = obj.firstName

// console.log(firstName); //! ERROR
console.log(username);
console.log(lastName); // undefined

function foo({ firstName } = {}) {
  console.log(firstName);
}

console.log(foo(obj));

const names = [
  {
    firstName: "Alex",
    age: 20,
  },
  {
    firstName: "Rob",
    age: 25,
  },
  {
    firstName: "Alice",
    age: 23,
  },
  {
    firstName: "Revekka",
    age: 25,
  },
  {
    firstName: "John",
    age: 30,
  },
];

const namesMarkup = names
  .map(
    ({ firstName, age }) => `<div>
<p>Name: ${firstName} 
<br>
<span>Age: ${age}</span></p>
</div>`
  )
  .join("");

console.log(namesMarkup);

document.body.innerHTML = namesMarkup
