// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */


let removeElement = (nums, val) => {
  if (!nums) return 0;
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    nums[0] === val ? nums.shift() : nums.push(nums.shift());
  }
  return nums.length;

};