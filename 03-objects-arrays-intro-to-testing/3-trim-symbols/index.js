/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size = Infinity) {
  if (size === 0 || string === '') {return "";}

  const arrString = [...string.trim("")];
  let result = arrString[0];
  let counter = 1;
  for (let i = 1; i < arrString.length; i++) {
    if (arrString[i - 1] === arrString[i]) {
      if (counter < size) {
        result += arrString[i];
      }
      counter += 1;
    } else {
      result += arrString[i];
      counter = 1;
    }
  } 
  return result;
}
