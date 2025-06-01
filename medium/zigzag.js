/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (s.length <= numRows || numRows === 1) return s;
  const arr = new Array(numRows).fill("");
  let current = 0;
  let goingDown = false;
  for (let i of s) {
    arr[current] += i;
    if (current === 0 || current === numRows - 1) {
      goingDown = !goingDown;
    }
    current = goingDown ? current + 1 : current - 1;
  }
  console.log(arr.join(""));

  return arr.join("");
};

convert("AB", 1);
