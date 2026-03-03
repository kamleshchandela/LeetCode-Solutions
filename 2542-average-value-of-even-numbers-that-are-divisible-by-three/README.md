# 2542 - Average Value of Even Numbers That Are Divisible by Three

**Difficulty:** Easy  
**Problem:** [average-value-of-even-numbers-that-are-divisible-by-three](https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/)

## Description

Given an integer array `nums` of positive integers, return the average value of all even integers that are divisible by 3.

Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.

## Examples

**Example 1:**
```
Input: nums = [1,3,6,10,12,15]
Output: 9
```

**Example 2:**
```
Input: nums = [1,2,4,7,10]
Output: 0
```

## Constraints
- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`

## Approach

Filter and compute average.

### Algorithm
1. Iterate through array
2. If number is even and divisible by 3, add to sum and count
3. Return sum/count or 0 if count is 0

## Complexity
- **Time:** O(n)
- **Space:** O(1)

## Best Solution

**Runtime:** 3ms | **Memory:** 17.2MB (C++)

```cpp
class Solution {
public:
    int averageValue(vector<int>& nums) {
        int sum = 0 ; 
        int count = 0 ;
        for(int i = 0 ; i < nums.size() ; i++){
            if((nums[i] % 3) == 0 && (nums[i] % 2) == 0 && nums[i] > 0){
                sum = sum + nums[i] ;
                count ++ ;
            }
        }
        if(count == 0){
            return 0 ;
        }
        int ans = int(sum / count) ;
        return ans ;
    }
};
```

## Submission Statistics
- **Best Runtime:** 2ms (JavaScript)
- **Best Memory:** 55.4MB (JavaScript)
- **Total Submissions:** 3
- **Accepted Submissions:** 2
