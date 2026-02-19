# 3581 - The Two Sneaky Numbers of Digitville

**Difficulty:** Easy  
**Problem:** [LeetCode 3581](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/)

## Problem Description

You are given an array `nums` containing integers from 0 to n-1, where each number should appear exactly once, but two numbers sneaked in an additional time. Find these two repeated numbers.

## Examples

**Example 1:**
```
Input: nums = [0,1,1,0]
Output: [0,1]
```

**Example 2:**
```
Input: nums = [0,3,2,1,3,2]
Output: [2,3]
```

## Constraints
- `2 <= n <= 100`
- `nums.length == n + 2`
- `0 <= nums[i] < n`

## Approach

1. Find elements that appear more than once
2. Track and return the two sneaky numbers

## Solution (JavaScript)

```javascript
var getSneakyNumbers = function(nums) {
    var arr = [];
    var count = 0;
    var obj = {};
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] == nums[j] && i != j && !obj[nums[i]]){
                obj[nums[i]] = 1;
                arr[count] = nums[i];
                count++;
            }
        }
    }
    return arr;
};
```

## Complexity Analysis
- **Time Complexity:** O(n^2)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 2 ms | 55.1 MB | JavaScript |
