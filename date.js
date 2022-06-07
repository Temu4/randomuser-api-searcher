/**
 * JS libs for date manipulation:
 * - moment.js
 * - day.js
 */

const SECOND_IN_MILLISECONDS = 1000;
const MINUTE_IN_MILLISECONDS = 1000 * 60;
const HOUR_IN_MILLISECONDS = 1000 * 60 * 60;
const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

const newYearDate = new Date(2022, 11, 31, 23, 59, 59);

const calcTimeToNY = (currentDate) => {
  const diffInMilliseconds = newYearDate - currentDate;

  const days = Math.floor(diffInMilliseconds / DAY_IN_MILLISECONDS);

  const diffLeftForHours = diffInMilliseconds - days * DAY_IN_MILLISECONDS;

  const hours = Math.floor(diffLeftForHours / HOUR_IN_MILLISECONDS);

  const diffLeftForMinutes = diffLeftForHours - hours * HOUR_IN_MILLISECONDS;

  const minutes = Math.floor(diffLeftForMinutes / MINUTE_IN_MILLISECONDS);

  const diffLeftForSeconds = diffLeftForMinutes - minutes * MINUTE_IN_MILLISECONDS;

  const seconds = Math.floor(diffLeftForSeconds / SECOND_IN_MILLISECONDS);

  const result = `To NY left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  console.log(result);
};

setInterval(() => {
  const currentDate = new Date();
  calcTimeToNY(currentDate);
}, 1000);
