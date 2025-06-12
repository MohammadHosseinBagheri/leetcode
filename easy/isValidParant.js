/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const stack = [];

  for (i of s) {
    if (typeof map[i] !== "undefined") {
      if (stack.at(-1) === map[i]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(i);
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
console.log(isValid("[{"));
