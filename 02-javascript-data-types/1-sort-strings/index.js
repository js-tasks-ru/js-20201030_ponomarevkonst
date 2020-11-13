/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const direction = param == 'desc' ? -1 : 1;
  const subsort = (a, b) => direction * a.toString().localeCompare(b, ["ru", "en"], {caseFirst: "upper"});
  const sorted = [...arr].sort(subsort);
  return sorted;
}
