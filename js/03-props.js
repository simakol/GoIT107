/**
 * Об'єкти
 *
 * - Короткі властивості
 * - Обчислювальні властивості
 */

const username = "Mango";
const email = "mango@mail.com";

const credentials = {
  // username: username,
  // email: email
  username,
  email,
};

console.log(credentials);
console.log(credentials.username);
console.log(credentials.email);

/**
 * -------------------------
 */

const inputName = "color";

const colorPickerData = {
  // color: "red"
  [inputName]: "red", // ми створили ключ на основі значення константи inputName
};

console.log(colorPickerData);
