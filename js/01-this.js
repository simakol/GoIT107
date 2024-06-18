/**
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

/*
* Правила визначення this
1. Коли фукнція викликається без контексту (коли немає обʼєкту, який викликає цю фукнцію) то this буде або undefined (use strict) або буде глобальним обʼєктом Window (звичайний режим запуску)

2. this завжди посилається на обʼєкт, який викликає метод (фукнцію). Тому при визначенні значення контексту завжди дивіться на місце де йде виклик вашого методу (обʼєкт стоїть зліва від крапки obj.func())

3. під час передачі методу в якості колбек фукнції контекст буде втрачено (правило 1). Тому для вирішення цієї проблеми втрати контексту ми будемо користуватись методом .bind();

*/

/**
 * Глобальний контекст
 */
function foo() {
  console.log("foo -> this", this);
}

// foo();

/**
 * Контекст методу об'єкта
 */

const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this);
  },
};

// user.showTag();

/**
 * Контекст методу об'єкта, але оголошена як зовнішня функція.
 */

function showTag() {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
}

// showTag(); //! ERR!!!

const mango = {
  tag: "Mango",
  // showTag: showTag
};

mango.showUserTag = showTag;
// console.log("mango", mango);

// mango.showUserTag();

/**
 * Виклик без контексту, але оголошена як метод об'єкта.
 */

const poly = {
  tag: "Poly",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

// poly.showTag();

const outerShowTag = poly.showTag;

// outerShowTag(); // втрата контексту, тому що немає обʼєкту, який викликав скопійовану фукнцію (правло №1)



/**
 * Контекст у callback-функціях
 */

const jacob = {
  tag: "Jacob",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};


// ф-ція вищого порядку
function invokeAction(action) {
  console.log(action);
  action();
}

// jacob.showTag - колбек фукнція яка передається посиланням і не викликається 
invokeAction(jacob.showTag);
