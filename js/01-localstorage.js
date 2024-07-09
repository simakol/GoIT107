/**
 * LocalStorage
 */

const LS_KEY = "Array of names";
const names = ["Alice", "Kate", "Emma"];

/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// localStorage.setItem("user id", "1")
//* localStorage.setItem(key, value) - записує дані (value) в локальний сховок по ключу key

//* JSON.stringify(value) - бере значення value і намагається перетворити його на JSON формат

localStorage.setItem(LS_KEY, JSON.stringify(names));

/**
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

//* localStorage.getItem(key) - зчитати дані які записані в локальному сховку по ключу key

// console.log(localStorage.getItem("smth")); // якщо ми хочемо зчитати дані по неіснуючому ключу - ми отримаємо null

const namesFromLS = localStorage.getItem(LS_KEY);

console.log(namesFromLS);
console.log(JSON.parse(namesFromLS));
// * JSON.parse(validJSON) - приймає валідний JSON та перетворює його на валідний JS обʼєкт(масив)

console.log("Починаємо парсинг не валідного ДЖСОН");

/*
JS
{
  user: "Alex",
  age: 20,
  stack: ["html", "css", "js", "react"],
  isOnline: true
}

JSON
'{
  "user": "Alex",
  "age": 20,
  "stack": ["html", "css", "js", "react"],
  "isOnline": true
}'

*/

try {
  // блок трай, у якому ви описуєте код який потенційно може викинути помилку
  console.log(JSON.parse('{ "name": "Alex" }'));
  console.log(JSON.parse('["Alex", "Rick"]'));
  console.log(JSON.parse("sdfsdfsdf"));
} catch (err) {
  // блок кетч, його задача - зловити помилку яка виникла в блоці трай та обробити її
  console.log("ERROR:", err);
}

console.log("Закінчуємо парсинг не валідного ДЖСОН");

/**
 * Видалення
 */
//* localStorage.removeItem(key) - приймає ключ та видаляє всю інформацію зі сховища по цьому ключу key

localStorage.removeItem(LS_KEY);

/**
 * LocalStorage не може зберігати функції
 */

function add(a, b) {
  return a + b;
}

localStorage.setItem("my function", JSON.stringify(add)); // undefined
console.log(localStorage.getItem("my function")); // undefined

const calculator = {
  a: 5,
  b: 10,
  add() {
    return this.a + this.b;
  },
};

/*
JSON.stringify(calculator) ->
'{
  "a": 5,
  "b": 10
}'
*/

localStorage.setItem("calculator", JSON.stringify(calculator));

console.log(localStorage.getItem("calculator"));

console.log(JSON.parse(localStorage.getItem("calculator")));
