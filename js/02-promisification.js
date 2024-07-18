/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

//! without promises
// const makeOrder = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Ваше замовлення: ${dish}`);
//     }

//     onError("❌ Упс, у нас закінчилися продукти");
//   }, 1000);
// };

// makeOrder(
//   "пиріжок",
//   (result) => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   },
//   (error) => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   }
// );

//* with promises
const makeOrder = (dish) => {
  return new Promise((res, rej) => {
    const passed = Math.random() > 0.5;

    setTimeout(() => {
      if (passed) {
        res(`✅ Ваше замовлення: ${dish}`);
      }

      rej("❌ Упс, у нас закінчилися продукти");
    }, 1000);
  });
};

// makeOrder("пиріжок")
//   .then((result) => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   });

/*
 * Промісифікація «синхронних» функцій
 * - Promise.resolve()
 * - Promise.reject()
 */

//! without promises
// const prepareDish = (dish, onSuccess, onError) => {
//   const passed = Math.random() > 0.5;

//   if (passed) {
//     onSuccess(`✅ Ваше замовлення: ${dish}`);
//   }

//   onError("❌ Упс, у нас закінчилися продукти");
// };

// prepareDish(
//   "пиріжок",
//   (result) => {
//     console.log("onMakeOrderSuccess");
//     console.log(result);
//   },
//   (error) => {
//     console.log("onMakeOrderError");
//     console.log(error);
//   }
// );

//* with promises

const prepareDish = (dish) => {
  const passed = Math.random() > 0.5;

  return passed
    ? Promise.resolve(`✅ Ваше замовлення: ${dish}`)
    : Promise.reject("❌ Упс, у нас закінчилися продукти");
};

// Promise.resolve і Promise.reject - створюють проміс на ходу та відразу переведуть його у стан Fullfilled або Rejected відповідно. В цих статичних методах немає фукнції executor, в якості аргументів вони приймають відразу дані, які далі будуть оброблюватись в then або в catch

prepareDish("пиріжок")
  .then((result) => {
    console.log("onMakeOrderSuccess");
    console.log(result);
  })
  .catch((error) => {
    console.log("onMakeOrderError");
    console.log(error);
  });
