/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

  if (!x) return true;
  x = x.toString();

  let k = x.length - 1;

  for (let i = 0; i < x.length / 2; i++) {

    if (x[i] !== x[k]) return false;
    k--;

  }

  return true;


};