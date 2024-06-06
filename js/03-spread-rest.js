/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

const sideArr = [1, 2, 3];
const numbers = [1000, 10, 5, ...sideArr, 70, ...[4, 5, 6]];
// console.log(numbers);

/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log("MAX:", Math.max(...temps), "C");
// console.log("MIN:", Math.min(...temps), "C");

/**
 * Створення масиву і тип за посиланням
 */
const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

// console.log(a[0] === b[0]);
// a[0].x = 1000;

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

/*
 * Створення об'єкта
 */
const objA = { x: 1, y: 2 };
const objB = { x: 0, z: 3 };
const objC = { ...objA, ...objB };

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */
const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

// console.log(finalSettings);

//* rest ...

function sumAll(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sumAll(1, 6, 3)); // 10
console.log(sumAll(1, 6, 3, 7, 4)); // 21
console.log(sumAll(1, 6, 3, 7, 4, 9, 10, 65)); // 105
