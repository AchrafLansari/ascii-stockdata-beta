/**
 * Check if the input date is in YYYY-MM-DD format
 * @param {String} inputDate
 * @returns Boolean
 */
const checkDateFormat = (inputDate) => {
  const dateObj = new Date(inputDate);
  const date = ("0" + dateObj.getDate()).slice(-2);
  const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
  const year = dateObj.getFullYear();

  return (inputDate === (`${year}-${month}-${date}`)) ? true : false;
};

/**
 * Check if the input dates are a dateRange between since and until dates
 * @param {String} inputDateSince
 * @param {String} inputDateUntil
 * @returns Boolean
 */
const checkDateRange = (inputDateSince, inputDateUntil) => {
  return (new Date(inputDateSince) < new Date(inputDateUntil))
};

/**
 * Check both format and date range
 * @param {String} sinceDate
 * @param {String} untilDate
 * @returns Boolean
 */
const checkDate = (sinceDate, untilDate) => {
  return (checkDateFormat(sinceDate) && checkDateFormat(untilDate) && checkDateRange(sinceDate, untilDate))
    ? true : false
};


module.exports = checkDate;
