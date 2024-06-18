/**
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const arr = [1, 2, 3];

// const obj = { a: 1, b: 2, c: 3 };

// console.log(arr);
// console.log(obj);

// console.log(obj.map((el) => el * 2));

const animal = {
  legs: 4,
};

// Object.create(animal); - створює новий пустий обʼєкт і вказує аргумент як прототип (собака була створена на основі обʼєкту тварини, а значить буде мати доступ до всіх методів та властивостей які є у спільного обʼєкту тварини)

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog);
console.log(dog.name);
console.log(dog.legs);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn

console.log(Object.hasOwn(dog, "name")); // true
console.log(Object.hasOwn(dog, "legs")); // false
console.log(Object.hasOwn(dog, "barkCounter")); // false

// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// перевірка на те чи є властивість власною для перебору ключів обʼєкту
for (const key in dog) {
  if (Object.hasOwn(dog, key)) {
    console.log(key); // "name"
  }
}

/**
 * ----------------------------------------
 */
const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA);
console.log(objB);
console.log(objC);

// console.log(Object.hasOwn(objA, "a")); // true
// console.log(objA.a); // "objA prop

// console.log(Object.hasOwn(objA, "b")); // false
// console.log(objA.b); // "objB prop"

// console.log(Object.hasOwn(objA, "c")); // false
// console.log(objA.c); // "objC prop"

// console.log(Object.hasOwn(objA, "x")); // false
// console.log(objA.x); // undefined
