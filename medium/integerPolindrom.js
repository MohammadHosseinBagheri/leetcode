/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let result = 0;
  let divided = x;

  while (divided > 0) {
    result += divided % 10;
    if (Math.floor(divided / 10) > 0) {
      result = result * 10;
    }
    divided = Math.floor(divided / 10);
  }

  if (result % x === 0) return true;
  return false;
};

console.log(isPalindrome(1213));

