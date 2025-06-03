/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let minLength = +Infinity;
  let minIndex = "";
  let result = "";

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length;
      minIndex = i;
    }
  }
  const filtered = strs.filter((_, index) => index !== minIndex);

  for (let j = 0; j < strs[minIndex].length; j++) {
    const temp = [];

    for (let i = 0; i < filtered.length; i++) {
      if (filtered[i][j] === strs[minIndex][j]) {
        temp.push(strs[minIndex][j]);
      } else {
        break;
      }
    }
    console.log(temp);
    if (
      (result.length !== 0 && temp.length === 0) ||
      (result.length === 0 && j !== 0)
    ) {
      break;
    }

    if (temp.length === filtered.length) {
      result += strs[minIndex][j];
    }
  }
  return result.length === 0 ? "" : result;
};