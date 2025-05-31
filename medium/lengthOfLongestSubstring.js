/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  const map = {};
  let start = 0;
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] in map && map[str[i]] >= start) {
      start = map[str[i]] + 1;
    }
    map[str[i]] = i;

    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("dvdf"));
