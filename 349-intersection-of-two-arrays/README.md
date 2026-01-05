# 349 - Intersection of Two Arrays

**Difficulty:** Easy  
**Problem:** [LeetCode 349](https://leetcode.com/problems/intersection-of-two-arrays/)

## Problem Description

Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

## Examples

**Example 1:**
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**
```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
```

## Constraints
- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

## Approach

1. Use a set/map to track seen elements
2. Find common elements while avoiding duplicates

## Solution (JavaScript)

```javascript
var intersection = function(nums1, nums2) {
    var arr = [];
    var k = 0;
    var obj = {};
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j] && !obj[nums1[i]]){
                obj[nums1[i]] = 1;
                arr[k] = nums1[i];
                k++;
                break;
            }
        }
    }
    return arr;
};
```

## Complexity Analysis
- **Time Complexity:** O(n * m)
- **Space Complexity:** O(n)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 2 ms | 56.6 MB | JavaScript |
