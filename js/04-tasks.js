/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems() {
  for (let i = 0; i < arguments.length; i += 1) {
    console.log(`${i + 1} - ${arguments[i]}`);
  }
}

// logItems("Mango", "Poly", "Ajax");
// logItems("🍎", "🍇", "🍑", "🍌", "🍋");

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

function displayPhoneBook(names, phones) {
  /*
    1. перетворюємо імена та телефони на два масиви за допомогою split(",")
    2. використовуючи цикл for ми переберемо будь-який масив
    3. за допомогою шаблонного рядка сформуємо повідомлення і зробимо вивід в консоль
    */

  const namesArr = names.split(",");
  const phonesArr = phones.split(",");

  // оскікльки масиви однакової довжини (4), ми робимо 4 ітерації циклу. В тілі циклу ми звертаємось і до масиву імен і до масиву номерів по однакомому індексу (від 0 до 3)

  for (let i = 0; i < namesArr.length; i += 1) {
    console.log(`${namesArr[i]}: ${phonesArr[i]}`);
  }
}

// displayPhoneBook(
//   "Jacob,William,Solomon,Artemis",
//   "89001234567,89001112233,890055566377,890055566300"
// );

/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

function formatTime(totalMinutes) {
/*
 1. витягуємо години з хвилин, для цього minutes/60. Оскільки це не ціле число, округлюємо його вниз за допомогою методу Math.floor()
 2. витягнути хвилини з остачі, за допомогою остачі від ділення, беремо minutes % 60
 3. За допомогою методу .padStart(2, 0) заповнюємо початок рядка нулями поки довжина не стане 2
 4. За допомогою шаблонного рядка привести значення до вигляду HH:MM
*/
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const doubleDigitHours = String(hours).padStart(2, 0);
  const doubleDigitMinutes = String(minutes).padStart(2, 0);

  return `${doubleDigitHours}:${doubleDigitMinutes}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
console.log(formatTime(5379)); // "89:39"
console.log(formatTime(15379)); // "256:19"

//* .padStart(maxLength, char) - метод, який викликається на рядочку та приймає максимальну довжину рядка і символ для заповнення. Цей метод заповнює початок рядку символами char до тих пір, поки довжина рядку не стане maxLength

//* .padEnd(maxLength, char) - метод, який викликається на рядочку та приймає максимальну довжину рядка і символ для заповнення. Цей метод заповнює кінець рядку символами char до тих пір, поки довжина рядку не стане maxLength


