# 35 - Search Insert Position

**Difficulty:** Easy  
**Problem:** [LeetCode 35](https://leetcode.com/problems/search-insert-position/)

## Problem Description

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

## Examples

**Example 1:**
```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

**Example 2:**
```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

**Example 3:**
```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

## Constraints
- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` contains distinct values sorted in ascending order.
- `-10^4 <= target <= 10^4`

## Approach

Linear scan to find position where target should be inserted.

## Solution (JavaScript)

```javascript
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(i == 0 && target <= nums[i]){
            return i;
        }
        else if(i == nums.length - 1 && target >= nums[i]){
            return i + 1;
        }
        else if(target <= nums[i + 1] && target >= nums[i]){
            return i + 1;
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
| 0 ms | 54.3 MB | JavaScript |
| 1 ms | 54.1 MB | JavaScript |
| 1 ms | 54.4 MB | JavaScript |
