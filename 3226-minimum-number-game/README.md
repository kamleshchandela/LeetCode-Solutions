# 3226 - Minimum Number Game

**Difficulty:** Easy  
**Problem:** [LeetCode 3226](https://leetcode.com/problems/minimum-number-game/)

## Problem Description

You are given a 0-indexed integer array `nums` of even length.

Alice removes the minimum element first, then Bob removes their minimum. Bob appends his removed element to arr, then Alice does the same. Continue until `nums` is empty.

Return the resulting array `arr`.

## Examples

**Example 1:**
```
Input: nums = [5,4,2,3]
Output: [3,2,5,4]
```

**Example 2:**
```
Input: nums = [2,5]
Output: [5,2]
```

## Constraints
- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `nums.length % 2 == 0`

## Approach

1. Sort the array
2. Swap adjacent pairs to simulate the game

## Solution (C++ - Best)

```cpp
class Solution {
public:
    vector<int> numberGame(vector<int>& nums) {
        for(int i = 0; i < nums.size(); i++){
            int max = 0;
            int index = 0;
            for(int j = 0; j < nums.size() - i; j++){
                if(max < nums[j]){
                    max = nums[j];
                    index = j;
                }
            }
            int temp = nums[index];
            nums[index] = nums[nums.size() - 1 - i];
            nums[nums.size() - 1 - i] = temp;
        }
        for(int i = 0; i < nums.size(); i = i + 2){
            int temp = nums[i];
            nums[i] = nums[i+1];
            nums[i+1] = temp;
        }
        return nums;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n^2)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 2 ms | 57.9 MB | JavaScript |
| 3 ms | 28.2 MB | C++ |
