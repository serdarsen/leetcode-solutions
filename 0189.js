/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k = k % nums.length;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }

  l = 0;
  r = k - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }

  l = k;
  r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};

export { 
  rotate 
};

// case 1
let nums = [1,2,3,4,5,6,7];
rotate(nums, 3);
console.log(nums); 

// case 2
nums = [-1,-100,3,99];
rotate(nums, 2);
console.log(nums);
