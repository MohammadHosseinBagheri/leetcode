/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  let n = s.length - 1;
  if (n < 1) return s;
  let maxLength = 1;
  let start = 0;
  function expandAroundCenter(left, right) {
    while (left >= 0 && right <= n && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        start = left;
        maxLength = right - left + 1;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i <= n; i++) {
    expandAroundCenter(i - 1, i + 1);
    expandAroundCenter(i, i + 1);
  }
  return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("ac"));
