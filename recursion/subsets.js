/**Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
] */



//  Space: On Time:2^n 
// 2 possibllities for each element in the input arr to simulate takeing or not taking the element
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // define output arr
  let subsets = [];
  // invoke recursive helper function pass it an index of 0 to start at the begining of the input nums arr
  generateSubsets(0, nums, [], subsets);
  // return values
  return subsets;

};


// Recursive function to simulate all possible combinations
const generateSubsets = (index, integers, current, subsets) => {

  // push the current value to the subsets arr making sure to create a new instance of the current array
  subsets.push([...current]);


  // loop throught the input array invoking the function on each element
  for (let i = index; i < integers.length; i++) {
    // add the current element from the int array 
    current.push(integers[i]);
    // self invoke the function with the new value of current
    generateSubsets(i + 1, integers, current, subsets)
    // remove the element to simulate the next combination
    current.pop();
  }


}
