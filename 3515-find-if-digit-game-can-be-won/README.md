# 3515 - Find if Digit Game Can Be Won

**Difficulty:** Easy  
**Problem:** [LeetCode 3515](https://leetcode.com/problems/find-if-digit-game-can-be-won/)

## Problem Description

You are given an array of positive integers `nums`. Alice can choose either all single-digit numbers or all double-digit numbers, and the rest go to Bob. Alice wins if the sum of her numbers is strictly greater than Bob's sum.

Return `true` if Alice can win.

## Examples

**Example 1:**
```
Input: nums = [1,2,3,4,10]
Output: false
```

**Example 2:**
```
Input: nums = [1,2,3,4,5,14]
Output: true
```

**Example 3:**
```
Input: nums = [5,5,5,25]
Output: true
```

## Constraints
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 99`

## Approach

1. Sum single-digit numbers and double-digit numbers
2. If sums are not equal, Alice wins (she can pick the larger group)

## Solution (C++ - Best)

```cpp
class Solution {
public:
    bool canAliceWin(vector<int>& nums) {
        int sum1 = 0;
        int sum2 = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums[i] < 10){
                sum1 = sum1 + nums[i];
            }
            else{
                sum2 = sum2 + nums[i];
            }
        }
        if(sum1 != sum2){
            return true;
        }
        return false;
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 28.7 MB | C++ |
| 1 ms | 57.4 MB | JavaScript |
