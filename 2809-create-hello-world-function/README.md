# 2809 - Create Hello World Function

**Difficulty:** Easy  
**Problem:** [LeetCode 2809](https://leetcode.com/problems/create-hello-world-function/)

## Problem Description

Write a function `createHelloWorld`. It should return a new function that always returns "Hello World".

## Examples

**Example 1:**
```
Input: args = []
Output: "Hello World"
```

**Example 2:**
```
Input: args = [{},null,42]
Output: "Hello World"
```

## Constraints
- `0 <= args.length <= 10`

## Approach

Return a closure that accepts any arguments but always returns "Hello World".

## Solution (JavaScript)

```javascript
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};
```

## Complexity Analysis
- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

## Submission Stats
| Runtime | Memory | Language |
|---------|--------|----------|
| 36 ms | 53.9 MB | JavaScript |
