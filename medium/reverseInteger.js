/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  const isNegative = x < 0;
  let divide = isNegative ? -x : x;

  while (divide > 0) {
    result = result + (divide % 10);
    if (Math.floor(divide / 10) > 0) {
      result = result * 10;
    }
    divide = Math.floor(divide / 10);
    console.log({ divide, result });
  }
  if(Math.abs(result)>(Math.pow(2,31)-1)) return 0
  return isNegative ? -result : result;
};


console.log(reverse(1534236469));
