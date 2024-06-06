/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// константи значення яких ми знаємо ще до початку роботи програми (означає що значення не обчислюється під час роботи) зазвичай називають кепслоком
const TRANSACTIONS = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    return {
      id: this.transactions.length,
      amount,
      type,
    };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount; // додаємо суму до балансу
    const currentTransaction = this.createTransaction(
      amount,
      TRANSACTIONS.DEPOSIT
    ); // створюємо обʼєкт транзакції {id, amount, type}

    this.transactions.push(currentTransaction); // додаємо поточну транзакцію в масив усіх транзакція (в історію операцій)
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.error("Зняття суми неможливо, недостатньо коштів!");
      return; // виходимо з функції щоб не виконувати її код
    }

    this.balance -= amount; // знімаємо кошти з балансу
    const currentTransaction = this.createTransaction(
      amount,
      TRANSACTIONS.WITHDRAW
    ); // створюємо обʼєкт транзакції {id, amount, type}

    this.transactions.push(currentTransaction); // додаємо поточну транзакцію в масив усіх транзакція (в історію операцій)
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    return id > this.transactions.length - 1 ? null : this.transactions[id];
    // якщо id елементу який ми шукаємо буде більшим за довжину -1(тобто останній індекс в масиві) то повертаємо 0, інакше отримуємо поточний елемент по id в якості індексу
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    /*
    1. Створити змінну в яку будемо накопичувати суму транзакцій
    2. перебираємо масив транзакцій циклом фор оф
    3. робимо перевірку якщо тип транзкації обʼєкту співпадає з типом, який ми шукаємо, то
      3.1. ми додаємо суму операції до змінної накопичувача
    */

    let totalSum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalSum += transaction.amount;
      }
    }

    return totalSum;
  },
};

console.log("Current balance:", account.getBalance());
account.deposit(100);
account.deposit(500);
account.deposit(600);
console.log("Current balance:", account.getBalance());
account.withdraw(250);
account.withdraw(1250);
account.withdraw(100);
account.withdraw(50);
console.log("Current balance:", account.getBalance());

console.log(account.getTransactionDetails(2)); // {id: 2}
console.log(account.getTransactionDetails(100)); // null

console.log("SUM DEPOSIT:", account.getTransactionTotal(TRANSACTIONS.DEPOSIT)); // 600
console.log(
  "SUM WITHDRAW:",
  account.getTransactionTotal(TRANSACTIONS.WITHDRAW)
); // 250

console.log(account);
