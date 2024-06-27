/*
 * Події миші
 * - mouseenter і mouseleave (це ховер)
 * - mouseover і mouseout
 * - mousemove (chatty event - балакуча подія)
 */

const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener("mousemove", handleMouseMove);
// boxRef.addEventListener("mouseover", handleMouseOver);
// boxRef.addEventListener("mouseout", handleMouseOut);
boxRef.addEventListener("mouseenter", handleMouseEnter);
boxRef.addEventListener("mouseleave", handleMouseLeave);

function handleMouseEnter(event) {
  //* mouseenter - фіксує входження курсору в певну зону (не фіксує дочірні елементи)
  console.log(event);
}

function handleMouseLeave(event) {
  //* mouseleave - фіксує вихід курсору з певної зони  (не фіксує дочірні елементи)
  console.log(event);
}

function handleMouseOver(event) {
  //* mouseover - фіксує входження курсору в певну зону + фіксує входження в дочірні елементи
  console.log(event);
  event.currentTarget.classList.add("box--active");
}
function handleMouseOut(event) {
  //* mouseout - фіксує вихід курсору з певної зони + фіксує вихід з дочірних елементів
  console.log(event);
  event.currentTarget.classList.remove("box--active");
}

function handleMouseMove(event) {
  //* mousemove - фіксує кожен рух курсору в певній зоні

  console.log(event);
}
