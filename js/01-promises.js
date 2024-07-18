/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

//* promise - це обʼєкт, який представляє результат асинхронної операції (створення промісу є синхронною операцією, а його обробка - асинхронною (мікрозадача))

/*
Проміс має 3 стани:
- Pending - стан створення промісу, означає, що проміс поки що не виконався
- Fullfilled - проміс виконався успішно (обролюється методом .then())
- Rejected - проміс виконався неуспішно (обролюється методом .catch())

-- Також між програмістами ви можете почути термін Settled - означає, що проміс виконався (тобто, два стани: Fullfilled, Rejected)
*/

const promise = new Promise((resolve, reject) => {
  //* resolve - фукнція, яка переведе проміс у стан Fullfilled
  //* reject - функція, яка переведе проміс у стан Rejected

  const isPromiseFullfilled = Math.random() > 0.5;
  console.log(isPromiseFullfilled);

  setTimeout(() => {
    if (isPromiseFullfilled) {
      resolve(
        "Проміс виконався успішно, із результатом (виконаний, fulfilled)"
      );
    } else {
      reject("Проміс виконався з помилкою (відхилений, rejected)");
    }
  }, 1000);
});

console.log(promise); // побачимо обʼєкт промісу у стані пендінг, наголошую увагу на тому, що витягнути результат виконання промісу у синхронний код не можна!!! (можна зробити імітацію через async/await, але це розглянемо пізніше, або обробити результат промісу за допомогою методів then() та catch())

// promise
//   .then((value) => {
//     console.log(`✅ ${value}`);
//   })
//   .catch((err) => {
//     console.log(`❌ ${err}`);
//   })
//   .finally(() => {
//     console.log("проміс завершений!");
//   });

/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

/*
!callback hell

callback1(() => {
    ...
    callback2(() => {
        ..
        callback3(() => {
            ..
            callback4(() => {
                ..
                })
            })
        })
    })

*/

//! Важливо запамʼятати, що в якості значення параметру колбек фукнції then (value) приходить те, що ви передали у функцію resolve, або те, що повернув (return) попердній then в вашому ланцюгу!!!

// then потрібен не тільки для обробки успішного результату виконання асинхронного коду, а й задля імітації синхронності виконання асинхронного коду.

promise
  .then((value) => {
    console.log(`✅ ${value}`);
    return value;
  })
  .then((value) => {
    console.log(1, value);
    return 10;
  })
  .then((value) => {
    console.log(value);
  })
  .then((value) => {
    console.log("the last value =>", value);
    // value = undefined тому що в попередньому then колбек фукнція нічого не повернула
  })
  .catch((err) => {
    console.log(`❌ ${err}`);
  })
  .finally(() => {
    console.log("проміс завершений!");
  });


