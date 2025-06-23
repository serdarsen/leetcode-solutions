from typing import List

class Solution:
  def containsDuplicate(self, nums: List[int]) -> bool:
    hashset = set()

    for n in nums:
      if n in hashset:
        return True
      hashset.add(n)
    return False

solution = Solution()

# case 1
nums = [1,2,3,1]
result = solution.containsDuplicate(nums)
print(result)

# case 2
nums = [1,2,3,4]
result = solution.containsDuplicate(nums)
print(result)

# case 3
nums = [1,1,1,3,3,4,3,2,4,2]
result = solution.containsDuplicate(nums)
print(result)
