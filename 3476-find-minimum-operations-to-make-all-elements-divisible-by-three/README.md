# 3476 - Find Minimum Operations to Make All Elements Divisible by Three

**Difficulty:** Easy  
**Problem:** [LeetCode 3476](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/)

## Problem Description

You are given an integer array `nums`. In one operation, you can add or subtract 1 from any element of `nums`. Return the minimum number of operations to make all elements of `nums` divisible by 3.

## Examples

**Example 1:**
```
Input: nums = [1,2,3,4]
Output: 3
```

**Example 2:**
```
Input: nums = [3,6,9]
Output: 0
```

## Constraints
- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 50`

## Approach

Count elements that are not divisible by 3 but can become divisible with one operation.

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int minimumOperations(vector<int>& nums) {
        int count = 0;
        for(int i = 0; i < nums.size(); i++){
            if((nums[i] + 1) % 3 == 0 || (nums[i] - 1) % 3 == 0){
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
| 0 ms | 57.2 MB | JavaScript |
| 4 ms | 23.2 MB | C++ |
