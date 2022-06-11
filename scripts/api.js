import {showLoader, hideLoader} from './utils.js';
import {BASE_API_URL, DEFAULT_USERS_COUNT} from './constants.js';

// async / await

async function getData({results = DEFAULT_USERS_COUNT, gender}) {
  showLoader();

  // 1. Using then chaining
  // fetch(`${BASE_API_URL}?results=${results}${gender ? `&gender=${gender}` : ''}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const users = data.results;

  //     let usersHTML = '';
  //     users.forEach((element) => {
  //       usersHTML += createUserCard(element);
  //     });

  //     content.innerHTML = usersHTML;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  //   .finally(() => hideLoader());

  // 2. Using sync/await syntax chaining
  try {
    const response = await fetch(
      `${BASE_API_URL}?results=${results}${gender ? `&gender=${gender}` : ''}`
    );

    if (!response.ok) throw new Error('Client Error');

    const data = await response.json();

    const users = data.results;

    return users;
  } catch (e) {
    console.log(e);
  } finally {
    hideLoader();
  }
}

// END
export default getData;

// SOLID
