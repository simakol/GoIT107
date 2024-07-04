/**
 * Деструктуризація об'єкта в параметрах функції
 */

const user = {
  username: "Jacob name",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// Без деструктуризації
function getUserName({ username: name, skills: { html, css, js } } = {}) {
  console.log(
    `Hello my name is ${name}, I know html - ${html}, css - ${css} and js -${js}`
  );
}

// З деструктуризацією

getUserName(user);
