/**
 * Об'єкти
 *
 * - Створення об'єкта
 * - Вкладені властивості
 * - Доступ до властивостей через крапку
 * - Доступ до вкладених властивостей
 * - Доступ до властивостей через квадратні дужки
 * - Зміна значення властивостей
 * - Додавання властивостей
 */

/*
[0, 1, 2, 3, 4]

{
  key: value, // властивість
}


*/

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  isFavourite: true,
};

// console.log(playlist);

playlist.newProp = 100;
playlist.rating = 4;

playlist.object = {
  smth: 5,
};

// console.log(playlist.name);
// console.log(playlist.tracks);

/**
 * -----------------------------------
 */
const propertyName = "tracks";
console.log(playlist[propertyName]);
console.log(playlist.name); // тоді, коли ви знаєте назву ключа
console.log(playlist["name"]); // використовуєте тоді, коли назва ключа невідома та зберігається в сторонній змінній

console.log(playlist.isFavourite);
console.log(playlist["isFavourite"]);

/**
 * -----------------------------------
 */
function foo(values) {
  console.log(values);
  console.log(values.a);
  console.log(values.b);
}

foo({
  a: 5,
  b: 10,
});

foo({
  a: 50,
  b: 0,
});
