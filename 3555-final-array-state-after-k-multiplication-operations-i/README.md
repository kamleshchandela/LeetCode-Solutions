# 3555 - Final Array State After K Multiplication Operations I

**Difficulty:** Easy  
**Problem:** [LeetCode 3555](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/)

## Problem Description

You are given an integer array `nums`, an integer `k`, and an integer `multiplier`. Perform `k` operations where in each operation:
- Find the minimum value in `nums` (first occurrence if ties)
- Replace it with `x * multiplier`

Return the final state of `nums`.

## Examples

**Example 1:**
```
Input: nums = [2,1,3,5,6], k = 5, multiplier = 2
Output: [8,4,6,5,6]
```

**Example 2:**
```
Input: nums = [1,2], k = 3, multiplier = 4
Output: [16,8]
```

## Constraints
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 10`
- `1 <= multiplier <= 5`

## Approach

1. For each operation, find minimum element and its index
2. Multiply it by multiplier
3. Repeat k times

## Solution (C++ - Best)

```cpp
class Solution {
public:
    vector<int> getFinalState(vector<int>& nums, int k, int multiplier) {
        for(int i = 0; i < k; i++){
            int min = 2147483647;
            int index = 0;
            for(int j = 0; j < nums.size(); j++){
                if(min > nums[j]){
                    min = nums[j];
                    index = j;
                }
            }
            nums[index] = nums[index] * multiplier;
        }
        return nums;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(k * n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 27.2 MB | C++ |
| 0 ms | 57.5 MB | JavaScript |
