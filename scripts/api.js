import {showLoader, hideLoader, createUserCard} from './utils.js';
import {BASE_API_URL, DEFAULT_USERS_COUNT} from './constants.js';

export function getData({results = DEFAULT_USERS_COUNT, gender}) {
  showLoader();

  fetch(`${BASE_API_URL}?results=${results}${gender ? `&gender=${gender}` : ''}`)
    .then((response) => response.json())
    .then((data) => {
      const users = data.results;

      let usersHTML = '';
      users.forEach((element) => {
        usersHTML += createUserCard(element);
      });

      content.innerHTML = usersHTML;

      hideLoader();
    });
}

// END
export default getData;
