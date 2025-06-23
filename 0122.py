from typing import List

class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    profit = 0

    for i in range(1, len(prices)):
      if prices[i] > prices[i - 1]:
        profit += (prices[i] - prices[i - 1])
  
    return profit


solution = Solution()

# case 1
prices = [7,1,5,3,6,4]
maxProfit = solution.maxProfit(prices)
print(maxProfit)

# case 2
prices = [1,2,3,4,5]
maxProfit = solution.maxProfit(prices)
print(maxProfit)

# case 3
prices = [7,6,4,3,1]
maxProfit = solution.maxProfit(prices)
print(maxProfit)
