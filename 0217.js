/**
 * Hash Set - Early Exit
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

export {
  containsDuplicate
}

// case 1
let nums = [1,2,3,1];
let result = containsDuplicate(nums);
console.log(result);

// case 2
nums = [1,2,3,4];
result = containsDuplicate(nums);
console.log(result);

// case 3
nums = [1,1,1,3,3,4,3,2,4,2];
result = containsDuplicate(nums);
console.log(result);