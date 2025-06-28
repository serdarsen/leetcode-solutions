from typing import List

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        seen = set(nums1)

        res = []
        for n in nums2:
          if n in seen:
            res.append(n)
            seen.remove(n)
        return res

solution = Solution()

# case 1
nums1 = [1,2,2,1]
nums2 = [2,2]
result = solution.intersection(nums1, nums2)
print(result)

# case 2
nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
result = solution.intersection(nums1, nums2)
print(result)

