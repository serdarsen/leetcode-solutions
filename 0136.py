from typing import List

class Solution:
  def singleNumber(self, nums: List[int]) -> int:
    res = 0
    for n in nums:
      res = n ^ res
    return res

solution = Solution()

# case 1
nums = [2,2,1]
result = solution.singleNumber(nums)
print(result)

# case 2
nums = [4,1,2,1,2]
result = solution.singleNumber(nums)
print(result)

# case 3
nums = [1]
result = solution.singleNumber(nums)
print(result)


