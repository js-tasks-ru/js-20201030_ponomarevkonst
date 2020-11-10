/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const subsort = (a, b) => a.localeCompare(b, ["ru", "en"], {caseFirst: "upper"});
  const sorted = [...arr].sort(subsort);
  if (param === 'asc') {
    return sorted;
  } else if (param === 'desc') {
    return sorted.reverse();
  } 
}
