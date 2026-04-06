# 287 - Find the Duplicate Number

**Difficulty:** Medium  
**Problem:** [LeetCode 287](https://leetcode.com/problems/find-the-duplicate-number/)

## Problem Description

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only one repeated number in `nums`, return this repeated number.

You must solve the problem without modifying the array `nums` and using only constant extra space.

## Examples

**Example 1:**
```
Input: nums = [1,3,4,2,2]
Output: 2
```

**Example 2:**
```
Input: nums = [3,1,3,4,2]
Output: 3
```

**Example 3:**
```
Input: nums = [3,3,3,3,3]
Output: 3
```

## Constraints
- `1 <= n <= 10^5`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- All integers in `nums` appear once except for one integer which appears two or more times.

## Approach

**Sorting Approach:**
1. Sort the array
2. Find the adjacent pair of equal elements

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] == nums[i+1]){
                return nums[i];
            }
        }
        return -1;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 34 ms | 65.2 MB | C++ |
| 39 ms | 65.1 MB | C++ |
| 140 ms | 89.4 MB | C++ |
| 143 ms | 89.6 MB | C++ |
