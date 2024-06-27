/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  // event.code - зберігає код клавіші, тобто її фізичне розположення, завʼязка на цю властивість відбувається тоді, коли вам треба зберегти комбінацію клавіш на фізичне розташування клавіші без урахування розкладки (мови)
  // event.key - зберігає символ клавіші яку ви натиснули з урахуванням мови(розкладки)
  //   console.log(event);

  if (event.code === "Escape") {
    console.log("You pressed esc");
  } else {
    console.log("Other key");
  }
}

/**
 * Обробка комбінацій клавіш
 */
document.addEventListener("keydown", handleKeyCombo);

function handleKeyCombo(event) {
  console.log(event);
  if (event.code === "KeyC" && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    alert("Купи підписку!");
  }
}
