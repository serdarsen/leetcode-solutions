from typing import List

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        # two pointer solution
        nums1 = sorted(nums1)
        nums2 = sorted(nums2)

        p1 = 0
        p2 = 0

        n = len(nums1)
        m = len(nums2)

        result = []

        while p1 < n and p2 < m:
          if nums1[p1] == nums2[p2]:
            result.append(nums1[p1])
            p1 += 1
            p2 += 1
            continue

          if nums1[p1] > nums2[p2]:
            p2 += 1
          else:
            p1 += 1

        return result

solution = Solution()

# case 1
nums1 = [1,2,2,1]
nums2 = [2,2]
result = solution.intersect(nums1, nums2)
print(result)

# case 2
nums1 = [4,9,5]
nums2 = [9,4,9,8,4]
result = solution.intersect(nums1, nums2)
print(result)

