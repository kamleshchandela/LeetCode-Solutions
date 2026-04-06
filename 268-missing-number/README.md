# 268 - Missing Number

**Difficulty:** Easy  
**Problem:** [LeetCode 268](https://leetcode.com/problems/missing-number/)

## Problem Description

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

## Examples

**Example 1:**
```
Input: nums = [3,0,1]
Output: 2
```

**Example 2:**
```
Input: nums = [0,1]
Output: 2
```

**Example 3:**
```
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
```

## Constraints
- `n == nums.length`
- `1 <= n <= 10^4`
- `0 <= nums[i] <= n`
- All numbers of `nums` are unique.

## Approach

**Sorting Approach:**
1. Sort the array
2. Iterate through and find the first index where `nums[i] != i`
3. If all indices match, return `n` (the missing number)

**Optimal XOR Approach (not implemented):**
- XOR all indices 0 to n with all array elements
- Result is the missing number due to: `a ^ a = 0` and `a ^ 0 = a`

## Solution (C++)

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] != i){
                return i;
            }
        }
        return nums.size();
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n log n) - dominated by sorting
- **Space Complexity:** O(1) - sorts in place

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 19 ms | 21.9 MB | C++ |
