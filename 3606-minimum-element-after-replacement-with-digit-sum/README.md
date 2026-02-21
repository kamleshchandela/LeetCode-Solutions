# 3606 - Minimum Element After Replacement With Digit Sum

**Difficulty:** Easy  
**Problem:** [LeetCode 3606](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/)

## Problem Description

You are given an integer array `nums`. Replace each element with the sum of its digits. Return the minimum element after all replacements.

## Examples

**Example 1:**
```
Input: nums = [10,12,13,14]
Output: 1
```

**Example 2:**
```
Input: nums = [1,2,3,4]
Output: 1
```

**Example 3:**
```
Input: nums = [999,19,199]
Output: 10
```

## Constraints
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 10^4`

## Approach

1. For each element, calculate digit sum
2. Track minimum digit sum
3. Return minimum

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int minElement(vector<int>& nums) {
        int min = 2147483647;
        for(int i = 0; i < nums.size(); i++){
            int temp = 0;
            int n = nums[i];
            while(n >= 1){
                temp = temp + n % 10;
                n = int(n / 10);
            }
            if(min > temp){
                min = temp;
            }
        }
        return min;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n * log m) where m is max value
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 27.6 MB | C++ |
| 1 ms | 27.6 MB | C++ |
| 2 ms | 57.6 MB | JavaScript |
| 3 ms | 56.3 MB | JavaScript |
