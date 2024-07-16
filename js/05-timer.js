/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

class Timer {
  constructor({ onTick }) {
    this.onTick = onTick; // фукнція, яка буде викликатись кожну секунду для оновлення інтерфейсу користувача
    this.intervalID = 0; // ідентифікатор запущенного таймеру, для того щоб ми могли його зупинити при натисканні на нопку стоп
    this.isActive = false; // статус таймера (запущений, чи ні)

    this.initTimer();
  }

  initTimer() {
    const timeComponents = this.getTimeComponents(0);
    this.onTick(timeComponents); // обнуляємо годинник до вигляду 00:00:00
  }

  start() {
    console.log("натиснули нопку старт");
    /*
    1. перевірка на те чи запущенний таймер, якщо запущенний - виходимо з фукнції
    2. змінити статус таймера на активний   this.isActive = true
    3. беремо поточний час на момент натискання на кнопку Date.now()
    4. запускаємо інтервал кожні 1000 мілісекунд (записуємо айді інтервалу в  this.intervalID)
      4.1. беремо поточний час Date.now()
      4.2. знаходимо різницю двох дат (від поточного віднімаємо минулий(за межами інтервалу))
      4.3. викликаємо метод getTimeComponents, передаємо туди різницю двох дат (мілісекунди) і отримуємо обʼєкт з нормальними годинами, хвилинами і секундами
      4.4. викликаємо метод onTick і передаємо обʼєкт годин, хвилин і секунд для оновлення інтерфейсу застосунку
    */

    // step 1
    if (this.isActive) {
      return;
    }

    // при повторному натисканню на старт - обнуляємо таймер і потім запускаємо рахунок
    this.initTimer();

    // step 2
    this.isActive = true;

    // step 3
    const startTime = Date.now();

    // step 4
    this.intervalID = setInterval(() => {
      // step 4.1
      const currentTime = Date.now();

      // step 4.2
      const diff = currentTime - startTime;

      // step 4.3
      const timeComponents = this.getTimeComponents(diff);

      // step 4.4
      this.onTick(timeComponents);
    }, 1000);
  }

  stop() {
    console.log("натиснули нопку стоп");
    /*
    1. перевіряємо активність таймеру, якщо він не активний - то виходимо з методу, тому що нам немає чого зупиняти
    2. міняємо статус активності на фолз
    3. зупиняємо інтервал
    */

    // step 1
    if (!this.isActive) {
      return;
    }

    // step 2
    this.isActive = false;

    // step 3
    clearInterval(this.intervalID);
  }

  /*
   * - Приймає час в мілісекундах
   * - Вираховує скільки в них вміщається годин/хвилин/секунд
   * - Повертає об'єкт з властивостями hours, mins, secs
   * - Адська копіпаста з stackoverflow 💩
   */
  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  }

  /*
   * Приймає число, перетворює його в рядок і додає в початок 0, якщо число менше 2-х знаків
   */
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".js-clockface");

const timer = new Timer({
  onTick: updateClockface,
});

startBtn.addEventListener("click", timer.start.bind(timer));
stopBtn.addEventListener("click", timer.stop.bind(timer));

/*
 * - Приймає час в мілісекундах
 * - Вираховує скільки в них вміщається годин/хвилин/секунд
 * - Рисує інтерфейс
 */
function updateClockface({ hours, mins, secs }) {
  clockface.textContent = `${hours}:${mins}:${secs}`;
}
