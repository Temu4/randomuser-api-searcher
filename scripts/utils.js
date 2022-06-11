const loader = document.getElementById('loader');

function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
}

function showLoader() {
  loader.classList.remove('hidden');
}

const createUserCard = (user) => {
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
};

function renderUsersCards(users) {
  let usersHTML = '';
  users.forEach((element) => {
    usersHTML += createUserCard(element);
  });

  content.innerHTML = usersHTML;
}

export {hideLoader, showLoader, createUserCard, renderUsersCards};
