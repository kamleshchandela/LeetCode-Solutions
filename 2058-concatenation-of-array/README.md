# 2058 - Concatenation of Array

**Difficulty:** Easy  
**Problem:** [LeetCode 2058](https://leetcode.com/problems/concatenation-of-array/)

## Problem Description

Given an integer array `nums` of length `n`, create an array `ans` of length `2n` where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n`.

Specifically, `ans` is the concatenation of two `nums` arrays.

## Examples

**Example 1:**
```
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
```

**Example 2:**
```
Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
```

## Constraints
- `n == nums.length`
- `1 <= n <= 1000`
- `1 <= nums[i] <= 1000`

## Approach

1. Create a result array of size 2n
2. Fill first half with original array elements
3. Fill second half with same elements

## Solution (C++ - Best)

```cpp
class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> arr(nums.size() * 2);
        for(int i = 0; i < nums.size(); i++){
            arr[i] = nums[i];
        }
        for(int i = 0; i < nums.size(); i++){
            arr[nums.size() + i] = nums[i];
        }
        return arr;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 16.8 MB | C++ |
| 0 ms | 58.2 MB | JavaScript |
| 3 ms | 58.6 MB | JavaScript |
| 3 ms | 59.2 MB | JavaScript |
