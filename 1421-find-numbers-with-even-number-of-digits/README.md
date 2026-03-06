# 1421 - Find Numbers with Even Number of Digits

**Difficulty:** Easy  
**Problem:** [find-numbers-with-even-number-of-digits](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)

## Description

Given an array `nums` of integers, return how many of them contain an even number of digits.

## Examples

**Example 1:**
```
Input: nums = [12,345,2,6,7896]
Output: 2
```

**Example 2:**
```
Input: nums = [555,901,482,1771]
Output: 1
```

## Constraints
- `1 <= nums.length <= 500`
- `1 <= nums[i] <= 10^5`

## Approach

Count digits for each number.

### Algorithm
1. For each number, count its digits
2. If count is even, increment result
3. Return count

## Complexity
- **Time:** O(n * d) where d is number of digits
- **Space:** O(1)

## Best Solution

**Runtime:** 0ms | **Memory:** 13.4MB (C++)

```cpp
class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int ans = 0 ;
        for(int i = 0 ; i < nums.size() ; i++){
            int count = 0 ;
            while(nums[i] >= 1){
                count ++ ;
                nums[i] = int(nums[i] / 10) ; 
            }
            if(count % 2 == 0){
                ans ++ ;
            }
        }
        return ans ;
    }
};
```

## Submission Statistics
- **Best Runtime:** 0ms (C++)
- **Best Memory:** 13.4MB (C++)
- **Total Submissions:** 2
- **Accepted Submissions:** 2
