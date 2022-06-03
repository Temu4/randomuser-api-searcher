/**
 * Methods:
 * - GET
 * - POST (PATCH)
 * - PUT
 * - DELETE
 */

const BASE_API_URL = 'https://randomuser.me/api/';
const content = document.getElementById('content');
const loader = document.getElementById('loader');
const form = document.forms.searchForm;

function hideLoader() {
  loader.classList.add('hidden');
}

function showLoader() {
  loader.classList.remove('hidden');
}

function createUserCard(user) {
  if (!user) return;

  // destructuring user object
  const {
    name: {first: firstName, last: lastName},
    gender,
    phone,
    email = 'TEST',
    picture: {thumbnail: avatar}
  } = user;

  return `<div class="card">
      <img class="card__image" src="${avatar}" alt="${firstName} ${lastName}"/>
      <div class="card__info info">
        <h2 class="info__name">${firstName} ${lastName}</h2>
        <p class="info__text">${phone}</p>
        <p class="info__text">${email}</p>
        <p class="info__text">${gender}</p>
      </div>
    </div>`;
}

function getData({results = 1, gender}) {
  showLoader();

  fetch(`${BASE_API_URL}?results=${results}${gender ? `&gender=${gender}` : ''}`)
    .then((response) => response.json())
    .then((data) => {
      const users = data.results;

      usersHTML = '';
      users.forEach((element) => {
        usersHTML += createUserCard(element);
      });

      content.innerHTML = usersHTML;

      hideLoader();
    });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const results = e.target.elements.results.value;

  const gender = e.target.elements.gender.value;

  if (results < 1 || results > 100) {
    alert('Unexpected value');
    return;
  }

  getData({
    results,
    gender
  });
});

form.addEventListener('reset', () => {
  content.innerHTML = '';
});
