from typing import List

class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
      """
      Do not return anything, modify nums in-place instead.
      """
      k = k % len(nums)
      l = 0
      r = len(nums) - 1
      while l < r:
        nums[l], nums[r] = nums[r], nums[l]
        l = l + 1
        r = r - 1

      l = 0 
      r = k - 1
      while l < r:
        nums[l], nums[r] = nums[r], nums[l]
        l = l + 1
        r = r - 1
      
      l = k
      r = len(nums) - 1
      while l < r:
        nums[l], nums[r] = nums[r], nums[l]
        l = l + 1
        r = r - 1

solution = Solution()

# case 1
nums = [1,2,3,4,5,6,7]
k = 3
solution.rotate(nums, k)
print(nums)

# case 2
nums = [-1,-100,3,99]
k = 2
solution.rotate(nums, k)
print(nums)