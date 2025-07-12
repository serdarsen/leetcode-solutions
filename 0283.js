/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let l = 0;
    for(let r = 0; r < nums?.length; r++) {
      if (nums[r]) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
      }
    }
    console.log(nums);
};

// case 1
nums = [0, 1, 0, 3, 12]
moveZeroes(nums) // [1, 3, 12, 0, 0]

// case 2
nums = [0]
moveZeroes(nums) // [0]