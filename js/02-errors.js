/**
 * Типові помилки
 *
 * - Звернення до змінної до її оголошення
 * - Перевизначення значення для змінної оголошеної через const
 * - Звернення по неправильному імені змінної
 *
 */

const username = "Mango";

// console.log(userName); // ! ReferenceError: userName is not defined - звернення до неіснуючого ідентифікатора

// console.log(age); //! ReferenceError: Cannot access 'age' before initialization - не можна звертатись до ідентифікаторів до моменту їх оголошення чи створення
let age = 20;

const price = 200;

// price = 300; // ! TypeError: Assignment to constant variable. - не можна перевизначати константні значення (на те вони і константні)
