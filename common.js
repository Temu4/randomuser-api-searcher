import api from './scripts/api.js';

const content = document.getElementById('content');
const form = document.forms.searchForm;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const results = e.target.elements.results.value;

  const gender = e.target.elements.gender.value;

  if (results < 1 || results > 100) {
    alert('Unexpected value');
    return;
  }

  api({
    results,
    gender
  });
});

form.addEventListener('reset', () => {
  content.innerHTML = '';
});
