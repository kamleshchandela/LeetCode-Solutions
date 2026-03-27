# 2860 - Sort By

**Difficulty:** Easy  
**Problem:** [LeetCode 2860](https://leetcode.com/problems/sort-by/)

## Problem Description

Given an array `arr` and a function `fn`, return a sorted array `sortedArr`. The function `fn` returns numbers that determine the sort order. `sortedArr` must be sorted in ascending order by `fn` output.

## Examples

**Example 1:**
```
Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
```

**Example 2:**
```
Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output: [{"x": -1}, {"x": 0}, {"x": 1}]
```

**Example 3:**
```
Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
Output: [[10, 1], [5, 2], [3, 4]]
```

## Constraints
- `arr` is a valid JSON array
- `fn` is a function that returns a number
- `1 <= arr.length <= 5 * 10^5`

## Approach

Use the built-in sort function with a comparator that applies fn to each element.

## Solution (JavaScript)

```javascript
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};
```

## Complexity Analysis
- **Time Complexity:** O(n log n)
- **Space Complexity:** O(1) or O(n) depending on sort implementation

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 108 ms | 68 MB | JavaScript |
| 110 ms | 71.6 MB | TypeScript |
| 120 ms | 69.7 MB | JavaScript |
