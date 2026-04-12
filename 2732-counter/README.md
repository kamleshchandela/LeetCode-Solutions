# 2732 - Counter

**Difficulty:** Easy  
**Problem:** [LeetCode 2732](https://leetcode.com/problems/counter/)

## Problem Description

Given an integer `n`, return a `counter` function. This `counter` function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc).

## Examples

**Example 1:**
```
Input: n = 10, calls = ["call","call","call"]
Output: [10,11,12]
```

**Example 2:**
```
Input: n = -2, calls = ["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
```

## Constraints
- `-1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i] === "call"`

## Approach

Use a closure to capture the initial value and return a function that increments and returns it using post-increment operator.

## Solution (JavaScript)

```javascript
var createCounter = function(n) {
    return (
        function () {
            return n++;
        }
    )
};
```

## Complexity Analysis
- **Time Complexity:** O(1) per call
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 30 ms | 54 MB | JavaScript |
| 35 ms | 54 MB | JavaScript |
| 45 ms | 53.8 MB | JavaScript |
