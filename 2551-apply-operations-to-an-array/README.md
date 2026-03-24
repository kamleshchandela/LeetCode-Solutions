# 2551 - Apply Operations to an Array

**Difficulty:** Easy  
**Problem:** [LeetCode 2551](https://leetcode.com/problems/apply-operations-to-an-array/)

## Problem Description

You are given a 0-indexed array `nums` of size `n` consisting of non-negative integers.

You need to apply `n - 1` operations where in the `i`th operation:
- If `nums[i] == nums[i + 1]`, multiply `nums[i]` by 2 and set `nums[i + 1]` to 0
- Otherwise, skip this operation

After performing all operations, shift all the 0's to the end of the array.

## Examples

**Example 1:**
```
Input: nums = [1,2,2,1,1,0]
Output: [1,4,2,0,0,0]
```

**Example 2:**
```
Input: nums = [0,1]
Output: [1,0]
```

## Constraints
- `2 <= nums.length <= 2000`
- `0 <= nums[i] <= 1000`

## Approach

1. First pass: apply the doubling operation for equal adjacent elements
2. Second pass: move all non-zero elements to the front
3. Third pass: fill remaining positions with zeros

## Solution (C++ - Best)

```cpp
class Solution {
public:
    vector<int> applyOperations(vector<int>& nums) {
        for(int i = 0; i < nums.size() - 1; i++){
            if(nums[i] == nums[i+1]){
                nums[i] = nums[i] * 2;
                nums[i + 1] = 0;
            }
        }
        int count = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] != 0){
                nums[count] = nums[i];
                count++;
            }
        }
        for(int i = count; i < nums.size(); i++){
            nums[i] = 0;
        }
        return nums;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 13.2 MB | C++ |
| 1 ms | 56.2 MB | JavaScript |
