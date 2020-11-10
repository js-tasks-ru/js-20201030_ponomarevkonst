/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return (obj) => {
    if (!Object.keys(obj).length) {return undefined;}
    let value = obj;
    path.split(".").forEach((element) => value = value[element]);
    return value;
  };  
}
