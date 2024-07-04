/**
 * Деструктуризація об'єкта
 */

const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

const { username } = user;
// const username = user.username

// console.log(username);

/**
 * Глибока деструктуризація об'єкта
 */

const {
  skills: { html, css, js },
} = user;

// const html = user.skills.html
// const css = user.skills.css
// const js = user.skills.js

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

//* іменована деструктуризація

const stack = {
  js: true,
  html: true,
  nodejs: false,
};

const { js: jsCore, html: html5, nodejs: node } = stack;

// const jsCore = stack.js
// const html5 = stack.html
// const node = stack.nodejs

//* деструктуризація зі значенням за замовчуванням

const teacher = {
  firstName: "Robert",
  lastName: "Black",
};

const { firstName, lastName, age = 30 } = teacher;

// const firstName = teacher.firstName
// const lastName = teacher.lastName
// const age = teacher.age || 30

// console.log(`Teacher: ${firstName} ${lastName}.\nAge: ${age} y. o.`);

/**
 * Деструктуризація масива
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const [first, second, , fourth, ...newArr] = arr;

// const first = arr[0];
// const second = arr[1];

console.log(first, second, fourth);

console.log(newArr);
