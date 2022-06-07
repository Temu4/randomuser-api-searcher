// JSON - JavaScript Object Notation (1999)

const person = {
  name: 'Alex',
  age: 25,
  isAdmin: false
};
// const personInJson = JSON.stringify(person); // make a string (json);

// {
//   data.json();
// }

JSON.parse(personInJson); // parse a string (json) to an object

const dataFromLocalStorageJSON = localStorage.getItem('IS_CONFIRMED'); // null

const dataFromLocalStorage = JSON.parse(dataFromLocalStorageJSON);

if (!dataFromLocalStorage) {
  // null
  const result = confirm('Are you 18+?');

  localStorage.setItem('IS_CONFIRMED', JSON.stringify(result));
}

console.log('show content');

const users = [person, person, person];

// sessionStorage.setItem('USERS', JSON.stringify(users));
