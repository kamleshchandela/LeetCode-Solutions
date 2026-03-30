# 2442 - Number of Arithmetic Triplets

**Difficulty:** Easy  
**Problem:** [LeetCode 2442](https://leetcode.com/problems/number-of-arithmetic-triplets/)

## Problem Description

You are given a 0-indexed, strictly increasing integer array `nums` and a positive integer `diff`. A triplet `(i, j, k)` is an arithmetic triplet if:
- `i < j < k`
- `nums[j] - nums[i] == diff`
- `nums[k] - nums[j] == diff`

Return the number of unique arithmetic triplets.

## Examples

**Example 1:**
```
Input: nums = [0,1,4,6,7,10], diff = 3
Output: 2
```

**Example 2:**
```
Input: nums = [4,5,6,7,8,9], diff = 2
Output: 2
```

## Constraints
- `3 <= nums.length <= 200`
- `0 <= nums[i] <= 200`
- `1 <= diff <= 50`
- `nums` is strictly increasing.

## Approach

Use three nested loops to find all triplets where the difference between consecutive elements equals diff.

## Solution (C++ - Best)

```cpp
class Solution {
public:
    int arithmeticTriplets(vector<int>& nums, int diff) {
        int count = 0;
        for(int i = 0; i < nums.size() - 2; i++){
            for(int j = i + 1; j < nums.size() - 1; j++){
                for(int k = j + 1; k < nums.size(); k++){
                    if(nums[j] - nums[i] == diff && nums[k] - nums[j] == diff){
                        count++;
                    }
                }
            }
        }
        return count;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n^3)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 11 ms | 11.6 MB | C++ |
| 21 ms | 55.3 MB | JavaScript |
