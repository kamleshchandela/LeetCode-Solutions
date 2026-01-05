# 283 - Move Zeroes

**Difficulty:** Easy  
**Problem:** [LeetCode 283](https://leetcode.com/problems/move-zeroes/)

## Problem Description

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Note** that you must do this in-place without making a copy of the array.

## Examples

**Example 1:**
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**
```
Input: nums = [0]
Output: [0]
```

## Constraints
- `1 <= nums.length <= 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`

## Approach

**Two-Pointer Approach:**
1. Use pointer `j` to track position for next non-zero element
2. First pass: copy all non-zero elements to front, incrementing `j`
3. Second pass: fill remaining positions with zeros

This minimizes operations by only writing each element once.

## Solution (C++ - Best)

```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int j = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] != 0){
                nums[j] = nums[i];
                j++;
            }
        }
        for(int i = j; i < nums.size(); i++){
            nums[i] = 0;
        }
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 23.9 MB | C++ |
| 302 ms | 60.8 MB | JavaScript |
| 618 ms | 60.6 MB | JavaScript |
