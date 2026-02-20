# 2324 - Find Triangular Sum of an Array

**Difficulty:** Medium  
**Problem:** [LeetCode 2324](https://leetcode.com/problems/find-triangular-sum-of-an-array/)

## Problem Description

You are given a 0-indexed integer array `nums`, where `nums[i]` is a digit between 0 and 9 (inclusive).

The triangular sum of `nums` is the value of the only element present in `nums` after the following process terminates:
1. Let `nums` comprise of `n` elements. If `n == 1`, end the process. Otherwise, create a new array `newNums` of length `n - 1`.
2. For each index `i` where `0 <= i < n - 1`, assign `newNums[i]` as `(nums[i] + nums[i+1]) % 10`.
3. Replace the array `nums` with `newNums`.
4. Repeat the entire process starting from step 1.

## Examples

**Example 1:**
```
Input: nums = [1,2,3,4,5]
Output: 8
```

**Example 2:**
```
Input: nums = [5]
Output: 5
```

## Constraints
- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 9`

## Approach

1. While array size > 1:
   - Calculate `(nums[i] + nums[i+1]) % 10` for each adjacent pair
   - Store result back in array
   - Remove last element
2. Return single remaining element

## Solution (C++)

```cpp
class Solution {
public:
    int triangularSum(vector<int>& nums) {
        while(nums.size() > 1){
            for(int i = 0; i < nums.size() - 1; i++){
                int a = (nums[i] + nums[i+1]) % 10;
                nums[i] = a;
            }
            nums.pop_back();
        }
        return nums[0];
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n^2)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 40 ms | 57.9 MB | JavaScript |
| 61 ms | 22.3 MB | C++ |
