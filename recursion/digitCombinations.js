/**Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

  0 = null
  1 = null
  2 = abc
  3 = def 
  4 = ghi
  5 = jkl
  6 = mno
  7 = pqrs
  8 = tuv
  9 = wxyz


Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want. */



/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let result = [];
  if (digits == null || digits.length == 0) return result;
  let mappings = [
    '0',
    '1',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ]

  findCombinations(digits, result, '', 0, mappings);

  return result;
};

const findCombinations = (digits, result, current, index, mappings) => {
  console.log('index: ', index)
  console.log('digit: ', digits.charAt(0));
  console.log('current: ', current);
  console.log('result: ', result);
  console.log('-------');
  if (index == digits.length) {
    result.push(current);
    return;
  }

  let letters = mappings[digits.charAt(index).toString()];

  for (let i = 0; i < letters.length; i++) {
    findCombinations(digits, result, current + letters.charAt(i), index + 1, mappings);
  }

}