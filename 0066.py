from typing import List

class Solution:
  def plusOne(self, digits: List[int]) -> List[int]:
      digits = digits[::-1]
      carry = 1
      i = 0

      while carry:
        if i < len(digits):
          if digits[i] == 9:
            digits[i] = 0
          else:
            digits[i] += 1
            carry = 0
        else:
          digits.append(1)
          carry = 0
        i += 1
      return digits[::-1]

solution = Solution()

# case 1
digits = [1, 2, 3]
result = solution.plusOne(digits)
print(result)

# case 2
digits = [4, 3, 2, 1]
result = solution.plusOne(digits)
print(result)

# case 3
digits = [9]
result = solution.plusOne(digits)
print(result)