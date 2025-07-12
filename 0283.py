from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l = 0
        for r in range(len(nums)):
          if nums[r]:
            nums[l], nums[r] = nums[r], nums[l]
            l += 1
        print(nums)

solution = Solution()

# case 1
nums = [0, 1, 0, 3, 12]
solution.moveZeroes(nums) # [1, 3, 12, 0, 0]

# case 2
nums = [0]
solution.moveZeroes(nums) # [0]
