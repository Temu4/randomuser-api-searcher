import getData from './scripts/api.js'; // here the name doesn't matter
import {renderUsersCards} from './scripts/utils.js';

const content = document.getElementById('content');
const form = document.forms.searchForm;

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const results = e.target.elements.results.value;

  const gender = e.target.elements.gender.value;

  if (results < 1 || results > 100) {
    alert('Unexpected value');
    return;
  }

  const users = await getData({
    results,
    gender
  });

  renderUsersCards(users);
});

form.addEventListener('reset', () => {
  content.innerHTML = '';
});

// eslint - check js
