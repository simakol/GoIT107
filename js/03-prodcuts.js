/**
 * Створи картки з товарами на основі масиву products,
 * приклад картки https://prnt.sc/KmgDlzqOIA3M
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт,
 * приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox
 */

const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Monitor",
    price: 3000,
    description: "23-inch monitor with Full HD resolution.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Laptop",
    price: 20000,
    description:
      "Lightweight and powerful laptop with a 15-inch display and SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Smartphone",
    price: 8000,
    description: "Equipped with a triple camera and a multi-core processor.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Tablet",
    price: 12000,
    description: "10-inch tablet with high performance and a Retina display.",
  },
];

// фукнція для формування розмітки списку продуктів на основі масиву обʼєктів продуктів
function createProductsMarkup(products) {
  return products
    .map(
      ({ id, img, name, price }) => `
      <li data-id="${id}" class="item product-item">
         <img src="${img}" alt="${name}" width="300"/>
         <h2>${name}</h2>
         <p>Ціна: ${price} грн</p>
  </li>`
    )
    .join("");
}

const container = document.querySelector(".products");

container.insertAdjacentHTML("beforeend", createProductsMarkup(products));
container.addEventListener("click", handleCardClick);

function handleCardClick(event) {
  if (event.currentTarget === event.target) {
    return;
  }

  /*
  1. отримати id карточки на яку я натиснув
  2. знайти в масиві продуктів тей обʼєкт який відповідає нашому id натиснутої карточки
  3. створювати розмітку для модалного вікна на оснвоі знайденого обʼєкту
  */

  // метод closest повертає посилання на найближчий батьківський елемент який відповідає переданому селектору
  const currentProduct = event.target.closest(".product-item");
  const productId = Number(currentProduct.dataset.id); // дістаємо id продукту
  const productObj = products.find(({ id }) => id === productId); // знаходимо відповідний обʼєкт (тей, на якому відбувся клік) в масиві продуктів

  // створення екземпляру модального вікна за допомогою бібліотеки
  const instance = basicLightbox.create(`
   <div class="modal">
      <img src="${productObj.img}" alt="${productObj.name}"/>
      <h2>${productObj.name}</h2>
      <p>Ціна: ${productObj.price} грн</p>
      <p>${productObj.description}</p>
   </div>
`);

  // виклик методу який відкриє модальне вікно (з документації бібліотеки)
  instance.show();
}
