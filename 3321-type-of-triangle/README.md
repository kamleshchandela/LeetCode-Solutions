# 3321 - Type of Triangle

**Difficulty:** Easy  
**Problem:** [LeetCode 3321](https://leetcode.com/problems/type-of-triangle/)

## Problem Description

You are given an integer array `nums` of size 3 which can form the sides of a triangle:
- "equilateral": all sides equal
- "isosceles": exactly two sides equal
- "scalene": all sides different
- "none": cannot form a triangle

## Examples

**Example 1:**
```
Input: nums = [3,3,3]
Output: "equilateral"
```

**Example 2:**
```
Input: nums = [3,4,5]
Output: "scalene"
```

## Constraints
- `nums.length == 3`
- `1 <= nums[i] <= 100`

## Approach

1. Check if triangle can be formed (sum of any two sides > third side)
2. Compare sides to determine type

## Solution (JavaScript)

```javascript
var triangleType = function(nums) {
    var a = nums[0];
    var b = nums[1];
    var c = nums[2];
    if (a + b <= c || b + c <= a || c + a <= b) {
        return "none";
    }
    else if (a == b && b == c) {
        return "equilateral";
    }
    else if (a == b || b == c || a == c) {
        return "isosceles";
    }
    return "scalene";
};
```

## Complexity Analysis
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 0 ms | 22.9 MB | C++ |
| 0 ms | 55.2 MB | JavaScript |
| 0 ms | 55.4 MB | JavaScript |
