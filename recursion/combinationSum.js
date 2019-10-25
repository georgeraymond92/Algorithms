
/** 
 * 
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
*/


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  candidates.sort(function (a, b) { return a - b });
  findCombinations(candidates, 0, target, new Array(), result);
  return result;
};

const findCombinations = (candidates, index, target, current, result) => {
  if (target === 0) {
    result.push([...current]);
    return;
  }
  if (target < 0) {
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    let num = candidates[i];

    if (i === index || candidates[i] != candidates[i - 1]) {
      current.push(num);
      findCombinations(candidates, i + 1, target - num, current, result);
      current.pop();
    }
  }


}

/** The Solution above is space: O of N and the time is : O2^n */