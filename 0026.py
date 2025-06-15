class Solution(object):
    def removeDuplicates(self, nums):
        l = 1
        for r in range(1, len(nums)):
            if nums[r] != nums[r - 1]:
                nums[l] = nums[r]
                l += 1
        return l

solution = Solution()

# case 1
nums = [1,1,2]
length = solution.removeDuplicates(nums)
print(f"{length}, nums: {nums[:length]}")

# case 2
nums = [0,0,1,1,1,2,2,3,3,4]
length = solution.removeDuplicates(nums)
print(f"{length}, nums: {nums[:length]}")
