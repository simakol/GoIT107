/**
 * Отримуємо ключ https://newsapi.org/
 * Запити робитимемо на http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 *
 * Пагінація: номер групи та кількість елементів групи
 * - Завантажуємо статті при самітті форми
 * - Завантажуємо статті при натисканні на кнопку «Завантажити ще»
 * - Оновлюємо групу в параметрах запиту
 * - Рендерим статті
 * - Скидання значення при пошуку за новим критерієм
 * - Показуємо спинер поки йде запит
 */

/*
створюємо обʼєкт де зберігаємо параметри запиту (page, perPage, q, maxPage)

сховати кнопку

1. вішаємо обробник подій по сабміту
    1.1. превент дефолт 
    1.2. очищуємо список новин від попередніх результатів
    1.3. беремо рядок з поля вводу (trim())
    1.4. перевіряємо чи користувач взагалі щось ввів (на пустий рядок) - якщо не ввів, то повідомити його про це
    1.5. показуємо прелоадер на кнопкці (блокуючи її)
    1.6. робимо запит на сервер з даними, які вказав користувач (скидуємо сторінку назад на 1)
    1.7. отримуємо дані з серверу та перевіряємо чи вони є, якщо даних немає, то повідомляємо про це користувача, якщо є, малюємо розмітку (якщо наступної сторінки не буде, кнопку треба сховати)
    1.8. якщо у нас ще є дані то розблоковуємо кнопку завантажити більше


load more btn states

1. hidden - ховаємо кнопку коли скінчились результати сторінок, або коли їх взагалі немає, або коли ми перший раз заходимо на сторінку
2. visible - показуємо кнопку коли робимо новий запит
3. disabled - відключаємо кнопку тоді, коли робимо запит на сервер і чекаємо відповіді від нього
4. enabled (visible) - включаємо кнопку тоді, коли отримали результати запиту
*/

import refs from "./refs.js";
import appendArticlesMarkup from "./templates/articles.js";
import ButtonService from "./services/loadMoreService.js";
import * as NewsApiService from "./services/newsAPIService.js";

const loadMoreBtn = new ButtonService(refs.loadMoreBtn, "is-hidden");

loadMoreBtn.hide();

const params = {
  page: 1,
  pageSize: 5,
  q: "",
  maxPage: 0,
};

refs.searchForm.addEventListener("submit", handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  refs.articlesContainer.innerHTML = "";

  const form = event.currentTarget;
  params.q = form.elements.query.value.trim();

  if (params.q === "") {
    Notiflix.Notify.failure("Введіть запит!");
    form.reset();
    return;
  }

  loadMoreBtn.show();
  loadMoreBtn.disable();

  params.page = 1;

  try {
    const { articles, totalResults } = await NewsApiService.getNews(params);

    params.maxPage = Math.ceil(totalResults / params.pageSize);

    appendArticlesMarkup(articles);

    // робимо перевірку на те, що у нас є наступні сторінки (бо якщо їх не буде, кнопку ми показувати більше не будемо)
    if (params.maxPage > 1) {
      // якщо все гуд, розблоковуємо кнопку для подальшої взаємодії
      loadMoreBtn.enable();
      refs.loadMoreBtn.addEventListener("click", handleLoadMore);
    } else {
      // якщо нема наступних результатів - ховаємо кнопку
      loadMoreBtn.hide();
    }
  } catch (err) {
    Notiflix.Notify.failure(`Помилка під час запиту: ${err.message}`);
  } finally {
    form.reset();
  }
}

/*
1. блокуємо кнопку
2. додаємо до сторінки +1
3. робимо запит
4. отримаємо відповідь та візуалізуємо карточки
5. після запиту робимо перевірку: якщо поточна сторінка співпадає з максимальною - то ховаємо кнопку і знімаємо слухача подій, якщо ж все ок - розблоковуємо кнопку для подальшої взаємодії

*/

async function handleLoadMore() {
  loadMoreBtn.disable();
  params.page += 1;

  try {
    const { articles } = await NewsApiService.getNews(params);
    appendArticlesMarkup(articles);
  } catch (err) {
    Notiflix.Notify.failure(`Помилка під час запиту: ${err.message}`);
  } finally {
    if (params.page === params.maxPage) {
      loadMoreBtn.hide();
      refs.loadMoreBtn.removeEventListener("click", handleLoadMore);
    } else {
      loadMoreBtn.enable();
    }
  }
}
