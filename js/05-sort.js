/**
 * Метод toSorted
 *
 * - Свій порядок сортування чисел
 * - Свій порядок сортування рядків
 * - Сортування об'єктів
 *
 * За замовчуванням:
 * - сортує за зростанням
 * - приводить елементи до рядка і сортує за [Unicode](https://unicode-table.com/en/)
 */

const numbers = [1, 9, 6, 2, 3];

// const sorted = numbers.toSorted((a, b) => a - b); // сортування за зростанням a - b
// const sorted = numbers.toSorted((a, b) => b - a); // сортування за спаданням b - a
// console.log("sorted ", sorted);

const letters = ["b", "B", "a", "A"];
// const sortedLetters = letters.toSorted((a, b) => a.localeCompare(b)); // сортування за алфавітним порядком
const sortedLetters = letters.toSorted((a, b) => b.localeCompare(a)); // сортування за зворотнім алфавітним порядком
// console.log("letters", sortedLetters);

/**
 * compareFunction - функція порівняння (callback)
 * Елементи масиву сортуються відповідно до її значення, що повертається
 */

// console.log(
//   numbers.toSorted((curEl, nextEl) => {
//     return nextEl - curEl;
//   })
// );

// const descSortedNumbers = numbers;
// const ascSortedNumbers = numbers;
// console.log("descSortedNumbers", descSortedNumbers);
// console.log("ascSortedNumbers", ascSortedNumbers);

/**
 * Сортування масиву об'єктів
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Aajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

// За ігровим часом
const sortedByBestPlayers = players.toSorted(
  (a, b) => b.timePlayed - a.timePlayed
);
console.table(sortedByBestPlayers);

const sortedByWorstPlayers = players.toSorted(
  (a, b) => a.timePlayed - b.timePlayed
);
console.table(sortedByWorstPlayers);

// по першій букві імені
const byName = players.toSorted((a, b) => a.name[0].localeCompare(b.name[0]));
console.table(byName);

console.table(players.toSorted((a, b) => a.name.localeCompare(b.name)));
