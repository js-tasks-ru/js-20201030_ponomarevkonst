/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj = undefined) {
  if (obj === undefined) {return undefined;}
  let newObject = new Object();
  Object.entries(obj).forEach(([key, value]) => newObject[value] = key);
  return newObject;
}
