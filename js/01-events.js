/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

const clickMe = document.querySelector(".js-click");
const box = document.querySelector(".js-box");

clickMe.addEventListener("click", handleClick);
clickMe.addEventListener("click", handleClickColor);
// кожного разу при натисканні на кнопку clickMe буде викликатись та виконуватись фукнція handleClick яка оброблює цю подію

let step = 0;
const colors = ["black", "green", "yellow", "blue", "grey", "purple", "violet"];


function handleClick() {
  step += 50;

  box.style.marginTop = `${step}px`;
  box.style.marginLeft = `${step}px`;
  console.log(step);
}

function handleClickColor() {
  const randomIndex = Math.floor(Math.random() * (colors.length - 1));
  box.style.backgroundColor = colors[randomIndex];
}
