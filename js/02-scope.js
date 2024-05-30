/**
 * - Глобальна область видимості
 * - Блочна область видимості
 * - Пошук за ланцюжком областей видимості
 */

const globalValue = 10;

console.log(globalValue);

function foo() {
  const a = 20;
  console.log(a);
  console.log(globalValue);

  for (let i = 0; i < 5; i += 1) {
    console.log(a);
    console.log(globalValue);

    if (i === 2) {
      console.log(a);
      console.log(globalValue);
    }
  }
}

console.log(a);

for (let i = 0; i < 3; i += 1) {
  console.log(a);
}
