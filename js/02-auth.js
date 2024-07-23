/**
 * Авторизація запитів з ключами
 * Які бувають:
 * - у query string
 * - у хедерах
 *
 * Для прикладу використовуємо https://pixabay.com/api/docs/
 */

function searchImagesByQuery(query) {
  const URL = "https://pixabay.com/api";
  const API_KEY = "33291155-7539ac0bf1c0d1be65bb6c22f";

  //   const params = new URLSearchParams({
  //     key: API_KEY,
  //     q: query,
  //   });

  // `${URL}?${params}`
  // `${URL}?key=${API_KEY}&q=${query}`

  return fetch(`${URL}?key=${API_KEY}&q=${query}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

searchImagesByQuery("blue+house")
  .then((data) => {
    console.log(data);
  })
  .catch(console.log);
