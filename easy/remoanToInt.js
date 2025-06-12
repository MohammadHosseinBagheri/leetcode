/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let next = map[s[i + 1]] ?? 0;
    let current = map[s[i]];
    if (next > current) {
      result += next - current;
      i++
    } else {
      result += current;
    }
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
