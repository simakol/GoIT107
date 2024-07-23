/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */

function fetchPokemon(pokemonId) {
  const URL = "https://pokeapi.co/api/v2";
  const ENDPOINT = "pokemon";

  return fetch(`${URL}/${ENDPOINT}/${pokemonId}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

const cardContainer = document.querySelector(".card-container");
const searchForm = document.querySelector(".search-form");

searchForm.addEventListener("submit", handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const queryValue = form.elements.query.value.trim().toLowerCase();

  fetchPokemon(queryValue) // робимо запит на пошук покемона
    .then(renderPokemonCard) // відмальовка карточки знайденого покемона
    .catch(onFetchError) // оброблюємо помилку якщо покемона не знайдено з інформуванням користувача про це
    .finally(() => form.reset());
}

function renderPokemonCard({ name, sprites, weight, height, abilities }) {
  const abilityListItems = abilities
    .map(({ ability }) => `<li class="list-group-item">${ability.name}</li>`)
    .join("");

  const markup = `<div class="card">
   <div class="card-img-top">
     <img src="${sprites.front_default}" alt="${name}">
   </div>
   <div class="card-body">
     <h2 class="card-title">Ім'я: ${name}</h2>
     <p class="card-text">Вага: ${weight}</p>
     <p class="card-text">Зростання: ${height}</p>

     <p class="card-text"><b>Уміння</b></p>
     <ul class="list-group">${abilityListItems}</ul>
   </div>
</div>`;
  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  cardContainer.innerHTML = "";
  alert("Упс, щось пішло не так і ми не знайшли вашого покемона!");
}
