# 3331 - Minimum Operations to Exceed Threshold Value I

**Difficulty:** Easy  
**Problem:** [LeetCode 3331](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/)

## Problem Description

You are given a 0-indexed integer array `nums`, and an integer `k`.

In one operation, you can remove one occurrence of the smallest element of `nums`.

Return the minimum number of operations needed so that all elements of the array are greater than or equal to `k`.

## Examples

**Example 1:**
```
Input: nums = [2,11,10,1,3], k = 10
Output: 3
```

**Example 2:**
```
Input: nums = [1,1,2,4,9], k = 1
Output: 0
```

**Example 3:**
```
Input: nums = [1,1,2,4,9], k = 9
Output: 4
```

## Constraints
- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 10^9`
- `1 <= k <= 10^9`
- Input guarantees at least one element >= k

## Approach

Count the number of elements that are less than k. This is the minimum operations needed.

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int count = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] < k){
                count++;
            }
        }
        return count;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 24.8 MB | C++ |
| 0 ms | 55.7 MB | JavaScript |
