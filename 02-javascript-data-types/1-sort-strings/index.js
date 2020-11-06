/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let subsort = (a,b) => a.localeCompare(b, 'ru', 'en');
  let sorted = arr.sort(subsort);
  return (param == 'asc') ? sorted : sorted.reverse();
}